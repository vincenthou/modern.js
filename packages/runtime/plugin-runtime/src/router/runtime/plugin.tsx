import React, { useCallback, useContext, useEffect } from 'react';
import {
  History,
  BrowserHistoryBuildOptions,
  HashHistoryBuildOptions,
} from 'history';
// import { RouteProps } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  RouteProps,
  matchRoutes,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { RuntimeReactContext } from '../../core';
import type { Plugin } from '../../core';
import { isBrowser } from '../../common';
import { getLocation, urlJoin } from './utils';
import { DefaultNotFound } from './DefaultNotFound';
import { GlobalRouteContext, RouteContext } from './routeContext';

declare global {
  interface Window {
    _SERVER_DATA?: {
      router: {
        baseUrl: string;
        params: Record<string, string>;
      };
    };
  }
}

export type SingleRouteConfig = RouteProps & {
  redirect?: string;
  routes?: SingleRouteConfig[];
  key?: string;

  /**
   * layout component
   */
  layout?: React.ComponentType;

  /**
   * component would be rendered when route macthed.
   */
  component?: React.ComponentType;
};

export type HistoryConfig =
  | {
      supportHtml5History: true;
      historyOptions: BrowserHistoryBuildOptions;
    }
  | {
      supportHtml5History: false;
      historyOptions: HashHistoryBuildOptions;
    };

interface NestedRoute {
  id: string;
  path: string;
  index: boolean;
  root: boolean;
  readonly childIds: string[];
}
type RouteComponents = Record<
  string,
  NestedRoute & {
    component: React.ComponentType;
  }
>;

export type RouterConfig = Partial<HistoryConfig> & {
  routesConfig?: {
    globalApp?: React.ComponentType<any>;
    routes?: SingleRouteConfig[];
    nestedRoutes?: NestedRoute;
    routeComponents?: RouteComponents;
  };
  history?: History;
  serverBase?: string[];
};

export const routerPlugin = ({
  serverBase = [],
  history: customHistory,
  supportHtml5History = true,
  routesConfig,
  historyOptions = {},
}: RouterConfig): Plugin => {
  const isBrow = isBrowser();

  const select = (pathname: string) =>
    serverBase.find(baseUrl => pathname.search(baseUrl) === 0) || '/';

  return {
    name: '@modern-js/plugin-router',
    setup: () => {
      return {
        hoc: ({ App }, next) => {
          // 有 app.tsx 的情况，无 app.tsx 的情况
          const renderNestedRoutes = (
            nestedRoute: NestedRoute,
            routeComponents: RouteComponents,
          ) => {
            const { childIds, path, index, id } = nestedRoute;
            const { component: Component } = routeComponents[id];
            const childComponents = childIds.map(childId => {
              const childRoute = routeComponents[childId];
              return renderNestedRoutes(childRoute, routeComponents);
            });
            const element = (
              <RouteContext.Provider key={id} value={{ route: nestedRoute }}>
                <Component />
              </RouteContext.Provider>
            );
            const routeComponent = index ? (
              <Route key={id} index={index} element={element}>
                {childComponents}
              </Route>
            ) : (
              <Route key={id} path={`${path}`} element={element}>
                {childComponents}
              </Route>
            );
            return routeComponent;
          };

          const getRouteComponents = (props: any) => {
            const Layout = ({ Component, ...props }: any) => {
              const GlobalLayout = routesConfig?.globalApp;
              if (!GlobalLayout) {
                return <Component {...props} />;
              }

              return <GlobalLayout Component={Component} {...props} />;
            };

            const routes = routesConfig?.routes || [];
            const nestedRoutes = routesConfig?.nestedRoutes;
            const routeComponents = routesConfig?.routeComponents;
            let nestedRouteComponent = null;
            if (nestedRoutes && routeComponents) {
              nestedRouteComponent = renderNestedRoutes(
                nestedRoutes,
                routeComponents,
              );
            }
            const componentRoutes = routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Layout Component={route.component} {...props} />}
                />
              );
            });

            if (nestedRouteComponent) {
              componentRoutes.push(nestedRouteComponent);
            }

            componentRoutes.push(
              <Route key="*" path="*" element={<DefaultNotFound />} />,
            );

            return componentRoutes;
          };
          const getRouteApp = () => {
            if (isBrow) {
              const baseUrl =
                window._SERVER_DATA?.router.baseUrl ||
                select(window.location.pathname);
              historyOptions.basename =
                baseUrl === '/'
                  ? urlJoin(baseUrl, historyOptions.basename as string)
                  : baseUrl;

              // TODO: hash router 和 history options 待支持@yimingjfe

              // const history =
              //   customHistory ||
              //   (supportHtml5History
              //     ? createBrowserHistory(historyOptions)
              //     : createHashHistory(historyOptions));

              return (props: any) => {
                const routeComponents = getRouteComponents(props);
                const { routeComponents: nestedRoutesMap } = routesConfig;
                const [clientLoaderData, setClientLoaderData] = React.useState<
                  Record<string, unknown>
                >({});
                const { nestedRoutes } = routesConfig;
                const handleRouteChange = useCallback(
                  (pathname: string) => {
                    const routes = matchRoutes([nestedRoutes], pathname);
                    console.log('matched', routes);
                    const routeIds = routes?.map(route => route.route.id);
                    routeIds?.forEach(id => {
                      const clientLoader = nestedRoutesMap[id].loader;
                      if (clientLoader && !clientLoaderData[id]) {
                        clientLoader().then((data: unknown) => {
                          setClientLoaderData(d => {
                            return {
                              ...d,
                              [id]: data,
                            };
                          });
                        });
                      }
                    });
                  },
                  [clientLoaderData],
                );

                useEffect(() => {
                  handleRouteChange(window.location.pathname);
                });
                // 这里把 history 去掉了，什么场景需要配置 history 吗
                return (
                  <GlobalRouteContext.Provider
                    value={{
                      clientLoaderData,
                    }}
                  >
                    <BrowserRouter>
                      <App {...props}>
                        <Routes>{routesConfig ? routeComponents : null}</Routes>
                      </App>
                    </BrowserRouter>
                  </GlobalRouteContext.Provider>
                );
              };
            }
            return (props: any) => {
              const routeComponents = getRouteComponents(props);
              const runtimeContext = useContext(RuntimeReactContext);
              const { ssrContext } = runtimeContext;
              const location = getLocation(ssrContext);
              // 待移除，react-router6 不支持在初始化渲染时导航，移除了 <StaticRouter context> API.
              // https://stackoverflow.com/questions/70487238/react-router-dom-v6-staticrouter-context-is-not-working
              // const routerContext = ssrContext?.redirection || {};
              const request = ssrContext?.request;
              const baseUrl = request?.baseUrl as string;
              const basename =
                baseUrl === '/'
                  ? urlJoin(baseUrl, historyOptions.basename as string)
                  : baseUrl;

              return (
                <StaticRouter
                  basename={basename === '/' ? '' : basename}
                  location={location}
                >
                  <App {...props}>
                    <Routes>{routesConfig ? routeComponents : null}</Routes>
                  </App>
                </StaticRouter>
              );
            };
          };
          let RouteApp = getRouteApp();

          if (App) {
            RouteApp = hoistNonReactStatics(RouteApp, App);
          }

          if (routesConfig?.globalApp) {
            return next({
              App: hoistNonReactStatics(RouteApp, routesConfig.globalApp),
            });
          }

          return next({
            App: RouteApp,
          });
        },
      };
    },
  };
};
