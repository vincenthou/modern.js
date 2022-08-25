import path from 'path';
import { fs } from '@modern-js/utils';
import type {
  IAppContext,
  NormalizedConfig,
  PluginAPI,
  ImportSpecifier,
  ImportStatement,
} from '@modern-js/core';
import type { Entrypoint } from '@modern-js/types';
import esbuild from 'esbuild';
import * as templates from './templates';
import { getClientRoutes } from './getClientRoutes';
import {
  FILE_SYSTEM_ROUTES_FILE_NAME,
  ENTRY_POINT_FILE_NAME,
  ROUTES_DIR_NAME,
  LOADERS_FILE_TS,
  LOADERS_FILE_JS,
} from './constants';
import { getDefaultImports } from './utils';
import { getNestedRoutes } from './nestedRoutes';

const loader: { [ext: string]: esbuild.Loader } = {
  '.aac': 'file',
  '.css': 'text',
  '.less': 'text',
  '.sass': 'text',
  '.scss': 'text',
  '.eot': 'file',
  '.flac': 'file',
  '.gif': 'file',
  '.ico': 'file',
  '.jpeg': 'file',
  '.jpg': 'file',
  '.js': 'jsx',
  '.jsx': 'jsx',
  '.json': 'json',
  '.md': 'jsx',
  '.mdx': 'jsx',
  '.mp3': 'file',
  '.mp4': 'file',
  '.ogg': 'file',
  '.otf': 'file',
  '.png': 'file',
  '.svg': 'file',
  '.ts': 'ts',
  '.tsx': 'tsx',
  '.ttf': 'file',
  '.wav': 'file',
  '.webm': 'file',
  '.webp': 'file',
  '.woff': 'file',
  '.woff2': 'file',
};

export const EXTERNAL_REGEXP = /^[^./]|^\.[^./]|^\.\.[^/]/;

const createImportSpecifier = (specifiers: ImportSpecifier[]): string => {
  let defaults = '';

  const named = [];

  for (const { local, imported } of specifiers) {
    if (local && imported) {
      named.push(`${imported} as ${local}`);
    } else if (local) {
      defaults = local;
    } else {
      named.push(imported);
    }
  }

  if (defaults && named.length) {
    return `${defaults}, { ${named.join(', ')} }`;
  } else if (defaults) {
    return defaults;
  } else {
    return `{ ${named.join(', ')} }`;
  }
};

export const createImportStatements = (
  statements: ImportStatement[],
): string => {
  // merge import statements with the same value.
  const deDuplicated: ImportStatement[] = [];

  const seen = new Map();

  for (const { value, specifiers, initialize } of statements) {
    if (!seen.has(value)) {
      deDuplicated.push({
        value,
        specifiers,
        initialize,
      });
      seen.set(value, specifiers);
    } else {
      seen.get(value).push(...specifiers);
      // make "initialize" param can be connected when multiple plugins were imported from same package
      const modifyIndex = deDuplicated.findIndex(v => v.value === value);
      const originInitialize = deDuplicated[modifyIndex]?.initialize ?? '';
      deDuplicated[modifyIndex].initialize = originInitialize.concat(
        `\n${initialize || ''}`,
      );
    }
  }

  return deDuplicated
    .map(
      ({ value, specifiers, initialize }) =>
        `import ${createImportSpecifier(specifiers)} from '${value}';\n${
          initialize || ''
        }`,
    )
    .join('\n');
};

export const generateCode = async (
  appContext: IAppContext,
  config: NormalizedConfig,
  entrypoints: Entrypoint[],
  api: PluginAPI,
) => {
  const {
    internalDirectory,
    srcDirectory,
    internalDirAlias,
    internalSrcAlias,
  } = appContext;

  const hookRunners = api.useHookRunners();

  const {
    output: { mountId },
  } = config;

  for (const entrypoint of entrypoints) {
    const { entryName, isAutoMount, customBootstrap, fileSystemRoutes } =
      entrypoint;
    if (isAutoMount) {
      // TODO: 支持无 pages dir 的情况 @yimingjfe
      // generate routes file for file system routes entrypoint.
      if (fileSystemRoutes) {
        const initialRoutes = getClientRoutes({
          entrypoint,
          srcDirectory,
          srcAlias: internalSrcAlias,
          internalDirectory,
          internalDirAlias,
        });

        const routesDir = path.join(srcDirectory, ROUTES_DIR_NAME);
        const nestedRoute = await getNestedRoutes(routesDir);

        const { routes } = await hookRunners.modifyFileSystemRoutes({
          entrypoint,
          routes: initialRoutes,
        });

        const { code } = await hookRunners.beforeGenerateRoutes({
          entrypoint,
          code: templates.fileSystemRoutes({ routes, nestedRoute }),
        });

        if (nestedRoute) {
          const tmpLoadersFile = path.resolve(
            internalDirectory,
            `./${entryName}/${LOADERS_FILE_TS}`,
          );
          const outputLoadersFile = path.resolve(
            internalDirectory,
            `./${entryName}/${LOADERS_FILE_JS}`,
          );

          const clientLoaderCode = templates.getClientLoaderCode(nestedRoute);
          fs.outputFileSync(tmpLoadersFile, clientLoaderCode, 'utf8');

          await esbuild.build({
            format: 'esm',
            platform: 'browser',
            target: 'esnext',
            loader,
            watch: process.env.NODE_ENV === 'development' && {},
            bundle: true,
            logLevel: 'error',
            entryPoints: [tmpLoadersFile],
            outfile: outputLoadersFile,
            plugins: [
              {
                name: 'make-all-packages-external',
                setup(build) {
                  // https://github.com/evanw/esbuild/issues/619#issuecomment-751995294
                  build.onResolve({ filter: EXTERNAL_REGEXP }, args => {
                    let external = true;
                    // FIXME: windows external entrypoint
                    if (args.kind === 'entry-point') {
                      external = false;
                    }
                    return {
                      path: args.path,
                      external,
                    };
                  });
                },
              },
            ],
          });
        }

        fs.outputFileSync(
          path.resolve(
            internalDirectory,
            `./${entryName}/${FILE_SYSTEM_ROUTES_FILE_NAME}`,
          ),
          code,
          'utf8',
        );
      }

      // call modifyEntryImports hook
      const { imports: importStatements } =
        await hookRunners.modifyEntryImports({
          entrypoint,
          imports: getDefaultImports({
            entrypoint,
            srcDirectory,
            internalSrcAlias,
            internalDirAlias,
          }),
        });

      // call modifyEntryRuntimePlugins hook
      const { plugins } = await hookRunners.modifyEntryRuntimePlugins({
        entrypoint,
        plugins: [],
      });

      // call modifyEntryRenderFunction hook
      const { code: renderFunction } =
        await hookRunners.modifyEntryRenderFunction({
          entrypoint,
          code: templates.renderFunction({
            plugins,
            customBootstrap,
            fileSystemRoutes,
          }),
        });

      // call modifyEntryExport hook
      const { exportStatement } = await hookRunners.modifyEntryExport({
        entrypoint,
        exportStatement: 'export default AppWrapper;',
      });

      const code = templates.index({
        mountId: mountId as string,
        imports: createImportStatements(importStatements),
        renderFunction,
        exportStatement,
      });

      // generate entry file.
      const entryFile = path.resolve(
        internalDirectory,
        `./${entryName}/${ENTRY_POINT_FILE_NAME}`,
      );

      entrypoint.entry = entryFile;

      fs.outputFileSync(entryFile, code, 'utf8');
    }
  }
};
