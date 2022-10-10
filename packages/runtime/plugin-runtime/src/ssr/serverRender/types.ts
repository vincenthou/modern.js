import type { RuntimeContext } from '../../core';
import { RenderLevel } from './renderToString/type';

export type { SSRServerContext } from './renderToString/type';
export type ModernSSRReactComponent = React.ComponentType<any> & {
  init: (context: RuntimeContext) => Promise<void>;
  prefetch: (context: RuntimeContext) => Promise<Record<string, any>>;
};
export { RuntimeContext, RenderLevel };
