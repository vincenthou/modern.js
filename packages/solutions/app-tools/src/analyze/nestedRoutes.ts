import path from 'path';
import { fs } from '@modern-js/utils';
import { parseModule } from '../utils/parseModule';
import { JS_EXTENSIONS } from './constants';

export const CLIENT_LOADER = 'clientLoader';

export interface NestedRoute {
  id: string;
  parentId?: string;
  path: string;
  componentPath: string;
  index: boolean;
  root: boolean;
  [CLIENT_LOADER]: boolean;
  children: NestedRoute[];
  readonly childIds: string[];
}

const hasClientLoader = async (filename: string) => {
  const source = await fs.readFile(filename);
  const [, moduleExports] = await parseModule({
    source: source.toString(),
    filename,
  });
  const clientLoader = moduleExports.find(e => e.n === CLIENT_LOADER);
  return Boolean(clientLoader);
};

const getPathWithoutExt = (filename: string) => {
  const extname = path.extname(filename);
  return filename.slice(0, -extname.length);
};

const createRoute = (
  routeInfo: Omit<NestedRoute, 'id' | 'children' | 'childIds'>,
  routesDir: string,
): NestedRoute => {
  const { componentPath } = routeInfo;
  const relativePath = path.relative(routesDir, componentPath);
  const id = getPathWithoutExt(relativePath);
  return {
    ...routeInfo,
    id,
    children: [],
    get childIds() {
      return this.children?.map(route => route.id);
    },
  };
};

const createIndexRoute = (
  routeInfo: Omit<
    NestedRoute,
    'id' | 'index' | 'root' | 'children' | 'childIds'
  >,
  routesDir: string,
) => {
  return createRoute(
    {
      ...routeInfo,
      index: true,
      root: false,
    },
    routesDir,
  );
};

const createRootRoute = (
  routeInfo: Omit<
    NestedRoute,
    'id' | 'index' | 'root' | 'children' | 'childIds'
  >,
  routesDir: string,
) => {
  return createRoute(
    {
      ...routeInfo,
      index: false,
      root: true,
    },
    routesDir,
  );
};

const walk = async (
  dirname: string,
  routesDir: string,
): Promise<NestedRoute[]> => {
  if (!(await fs.pathExists(dirname))) {
    return [];
  }

  const isDirectory = (await fs.stat(dirname)).isDirectory();
  if (!isDirectory) {
    return [];
  }

  const routes: NestedRoute[] = [];
  const routeMap = new Map<string, NestedRoute>();
  const routesMap = new Map<string, NestedRoute[]>();
  const isRoot = dirname === routesDir;
  const items = await fs.readdir(dirname);

  let appRoute: NestedRoute | null = null;
  for (const item of items) {
    const itemPath = path.join(dirname, item);
    const extname = path.extname(item);
    const itemWithoutExt = item.slice(0, -extname.length);
    const itemPathWithoutExt = itemPath.slice(0, -extname.length);

    if (
      itemPath.startsWith('_') ||
      (extname && !JS_EXTENSIONS.includes(extname))
    ) {
      continue;
    }

    let route: NestedRoute;
    const isDirectory = (await fs.stat(itemPath)).isDirectory();
    if (isDirectory) {
      const itemRoutes = await walk(itemPath, routesDir);
      const parentRoute = routeMap.get(itemPath);
      if (parentRoute) {
        const { children, childIds } = parentRoute;
        for (const route of itemRoutes) {
          route.parentId = parentRoute.id;
          children.push(route);
          childIds.push(route.id);
        }
        children?.push(...itemRoutes);
        childIds?.push(...itemRoutes.map(route => route.id));
      } else {
        routesMap.set(itemPath, itemRoutes);
      }
      continue;
    }

    if (isRoot && itemWithoutExt === 'app') {
      const clientLoader = await hasClientLoader(itemPath);
      appRoute = createRootRoute(
        {
          path: '/',
          componentPath: itemPath,
          clientLoader,
        },
        routesDir,
      );
      routes.push(appRoute);
      continue;
    }

    if (itemWithoutExt === 'index') {
      const clientLoader = await hasClientLoader(itemPath);
      route = createIndexRoute(
        {
          path: itemWithoutExt,
          componentPath: itemPath,
          clientLoader,
        },
        routesDir,
      );
      routes.push(route);
      if (appRoute) {
        appRoute.children?.push(route);
      }
      continue;
    }

    let finalRoutePath = itemWithoutExt;
    if (/^\[.*\]$/.test(itemWithoutExt)) {
      finalRoutePath = `:${itemWithoutExt.slice(1, itemWithoutExt.length - 1)}`;
    }

    const clientLoader = await hasClientLoader(itemPath);
    route = createRoute(
      {
        path: finalRoutePath,
        componentPath: itemPath,
        index: false,
        root: false,
        clientLoader,
      },
      routesDir,
    );
    routes.push(route);
    if (appRoute) {
      appRoute.children?.push(route);
    }

    const childRoutes = routesMap.get(itemPathWithoutExt);
    if (childRoutes) {
      route.children = childRoutes;
    } else {
      routeMap.set(itemPathWithoutExt, route);
    }
  }

  return routes;
};

// TODO: 是否允许用户不写 app.tsx 呢？@yimingjfe
export const getNestedRoutes = async (routesDir: string) => {
  const routes = await walk(routesDir, routesDir);
  const rootRoute = routes.find(route => route.root);
  return rootRoute;
};
