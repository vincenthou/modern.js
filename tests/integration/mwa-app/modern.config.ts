import { defineConfig } from '@modern-js/app-tools';

export default defineConfig({
  server: {
    ssr: false,
  },
  runtime: {
    router: true,
    state: true,
  },
});
