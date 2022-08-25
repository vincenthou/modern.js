import type { RuntimePlugin } from '@modern-js/core';
import type { Entrypoint, Route } from '@modern-js/types';
import { CLIENT_LOADER, NestedRoute } from './nestedRoutes';

export const index = ({
  mountId,
  imports,
  renderFunction,
  exportStatement,
}: {
  mountId: string;
  imports: string;
  exportStatement: string;
  renderFunction: string;
}) => `
const IS_BROWSER = typeof window !== 'undefined' && window.name !== 'nodejs';
const MOUNT_ID = '${mountId}';

${imports}

let AppWrapper = null;

function render() {
  ${renderFunction}
}

AppWrapper = render();

${exportStatement};
`;

export const renderFunction = ({
  plugins,
  customBootstrap,
  fileSystemRoutes,
}: {
  plugins: RuntimePlugin[];
  customBootstrap?: string | false;
  fileSystemRoutes: Entrypoint['fileSystemRoutes'];
}) => `
  AppWrapper = createApp({
    plugins: [
     ${plugins
       .map(
         ({ name, options, args }) =>
           `${name}({...${options}, ...App?.config?.${args || name}}),`,
       )
       .join('\n')}
    ]
  })(${fileSystemRoutes ? '' : `App`})

  if (IS_BROWSER) {
    ${
      customBootstrap
        ? `customBootstrap(AppWrapper);`
        : `bootstrap(AppWrapper, MOUNT_ID);`
    }
  }

  return AppWrapper
`;

export const html = (partials: {
  top: string[];
  head: string[];
  body: string[];
}) => `
<!DOCTYPE html>
<html>
<head>
  <%= meta %>
  <title><%= title %></title>

  ${partials.top.join('\n')}

  <script>
    window.__assetPrefix__ = '<%= assetPrefix %>';
  </script>
  ${partials.head.join('\n')}

  <!--<?- chunksMap.css ?>-->
</head>

<body>
  <noscript>
    We're sorry but react app doesn't work properly without JavaScript enabled. Please enable it to continue.
  </noscript>
  <div id="<%= mountId %>"><!--<?- html ?>--></div>
  ${partials.body.join('\n')}
  <!--<?- chunksMap.js ?>-->
  <!--<?- SSRDataScript ?>-->
  <!--<?- bottomTemplate ?>-->
</body>

</html>
`;

const flattenRoute = (route: NestedRoute): NestedRoute[] => [
  route,
  ...route.children.flatMap(flattenRoute),
];

export const getClientLoaderCode = (nestedRoute: NestedRoute) => {
  const routes = flattenRoute(nestedRoute);
  if (!routes || routes.length === 0) {
    return ``;
  }

  const clientLoaders: [string, string][] = [];
  for (const route of routes) {
    if (route[CLIENT_LOADER]) {
      clientLoaders.push([route.id, route.componentPath]);
    }
  }

  if (clientLoaders.length === 0) {
    return ``;
  }

  let imports = ``;
  let exports = `export default {\n`;

  for (let i = 0; i < clientLoaders.length; i++) {
    const [routeId, filename] = clientLoaders[i];
    imports += `import { ${CLIENT_LOADER} as loader_${i} } from '${filename}';\n`;
    exports += `
      ['${routeId}']: loader_${i},
    `;
  }

  exports += `\n}`;

  return `
    ${imports}
    ${exports}
  `;
};

export const fileSystemRoutes = ({
  routes,
  nestedRoute,
}: {
  routes?: Route[];
  nestedRoute?: NestedRoute;
}) => {
  const importLoadableCode = `import loadable from '@modern-js/runtime/loadable';`;
  let importLoadersCode = ``;
  let loadablePagesCode = '';
  let routesCode = '';
  let loadableNestedRoutesCode = '';
  let nestedRoutesCode = '';

  if (routes && routes.length > 0) {
    loadablePagesCode = routes
      .map(
        ({ component, _component }) =>
          `const ${component} = loadable(() => import('${_component}'));`,
      )
      .join('\n\n');

    routesCode = `
    export const routes = ${JSON.stringify(routes, null, 2).replace(
      /"component"\s*:\s*"(\S+)"/g,
      '"component": $1',
    )}
  ;`;
  }

  if (nestedRoute) {
    const routes = flattenRoute(nestedRoute);
    const useClientLoader = routes.some(route => route[CLIENT_LOADER]);
    if (useClientLoader) {
      importLoadersCode = `import _loaders from "./loaders";`;
    }

    loadableNestedRoutesCode = `
      export const routeComponents = {
    `;

    for (const route of routes) {
      const finalRoute: Partial<NestedRoute> & {
        loader: string;
        component: string;
      } = {
        ...route,
        loader: `_loaders['${route.id}']`,
        component: `loadable(() => import('${route.componentPath}'))`,
      };

      delete finalRoute.children;
      delete finalRoute?.componentPath;

      loadableNestedRoutesCode += `
        '${route.id}': ${JSON.stringify(finalRoute, null, 2)},
      `
        .replace(/"(loadable[^"]*)"/g, '$1')
        .replace(/"(_loaders[^"]*)"/g, '$1');
    }

    loadableNestedRoutesCode += `\n};`;

    nestedRoutesCode = `export const nestedRoutes = ${JSON.stringify(
      nestedRoute,
    )};`;
  }

  return `
    ${importLoadableCode}
    ${importLoadersCode}
    ${loadablePagesCode}
    ${routesCode}
    ${loadableNestedRoutesCode}
    ${nestedRoutesCode}
  `;
};
