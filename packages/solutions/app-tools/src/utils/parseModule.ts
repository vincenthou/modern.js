import path from 'path';
import type { Loader } from 'esbuild';
import { transform } from 'esbuild';
import { parse } from 'es-module-lexer';

export const parseModule = async ({
  source,
  filename,
}: {
  source: string;
  filename: string;
}) => {
  let content = source;

  if (filename.endsWith('.tsx') || filename.endsWith('.jsx')) {
    const result = await transform(content, {
      loader: path.extname(filename).slice(1) as Loader,
      format: 'esm',
    });
    content = result.code;
  }

  // eslint-disable-next-line @typescript-eslint/await-thenable
  return await parse(content);
};
