import chalk from '@modern-js/utils/chalk';
import { ENABLE_VERSION_LOG } from './constants';

export const log = (message: string) => {
  // eslint-disable-next-line no-console
  console.log(message);
};

export const info = (message: string) => {
  // eslint-disable-next-line no-console
  console.log(`${chalk.cyan.bold('info')} ${message}`);
};

export const warn = (message: string) => {
  console.warn(`${chalk.yellow.bold('warn')} ${message}`);
};

export const error = (message: string | Error) => {
  console.error(`${chalk.red.bold('error')} ${message}`);
};

export const debug = (message: string) => {
  if (ENABLE_VERSION_LOG) {
    console.info(`${chalk.blue.bold('debug')} ${message}`);
  }
};
