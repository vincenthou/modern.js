import { registerPrefetch } from '../core';
import type { Plugin } from '../core';
import { isBrowser } from '../common';
import { SSRServerContext } from './serverRender/types';
import prefetch from './prefetch';
import { formatServer } from './utils';
import serverRender from './serverRender';

const registeredApps = new WeakSet();

const plugin = (): Plugin => ({
  name: '@modern-js/plugin-ssr',
  setup: () => {
    return {
      server: async ({ App, context }) => {
        if (!registeredApps.has(App)) {
          registerPrefetch(App, _context => prefetch(App, _context));
          registeredApps.add(App);
        }

        if (!isBrowser()) {
          return serverRender(App, context);
        }

        return null;
      },
      init({ context }, next) {
        const { request }: { request: SSRServerContext['request'] } =
          context.ssrContext!;

        context.ssrContext!.request = formatServer(request);
        return next({ context });
      },
      pickContext: ({ context, pickedContext }, next) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        const { request, response } = context?.ssrContext!;
        const { initialData } = context;

        return next({
          context,
          pickedContext: {
            ...pickedContext,
            initialData,
            request,
            response,
          },
        });
      },
    };
  },
});

export default plugin;
export * from './react';
