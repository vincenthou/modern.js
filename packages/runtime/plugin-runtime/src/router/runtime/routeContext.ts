import React from 'react';

export interface IGlobalRouteContextType {
  clientLoaderData: Record<string, unknown>;
}
export const GlobalRouteContext = React.createContext<
  IGlobalRouteContextType | undefined
>(undefined);

export function useGlobalRouteData(): IGlobalRouteContextType {
  return React.useContext(GlobalRouteContext)!;
}

export interface IRouteContextType {
  route: any;
}

export const RouteContext = React.createContext<IRouteContextType | undefined>(
  undefined,
);

export function useRouteData(): IRouteContextType {
  return React.useContext(RouteContext)!;
}

export function useClientLoaderData<T>(): T {
  const route = useRouteData();
  const globalRoute = useGlobalRouteData();
  const { clientLoaderData } = globalRoute;
  return clientLoaderData[route.route.id] as T;
}
