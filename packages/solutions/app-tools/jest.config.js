const sharedConfig = require('@scripts/jest-config');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...sharedConfig,
  testMatch: [
    '/Users/bytedance/Desktop/workspaces/modern.js/packages/solutions/app-tools/tests/analyze/nested-routes.test.ts',
  ],
  rootDir: __dirname,
};
