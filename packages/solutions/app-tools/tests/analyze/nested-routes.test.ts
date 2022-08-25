import path from 'path';
import { getNestedRoutes } from '../../src/analyze/nestedRoutes';
import { getClientLoaderCode } from '../../src/analyze/templates';

const fixtures = path.join(__dirname, 'fixtures');

describe('nested routes', () => {
  test('getNestedRoutes', async () => {
    const routeDir = path.join(fixtures, './nest-routes');
    const route = await getNestedRoutes(routeDir);
    expect(route).toMatchSnapshot();
  });

  test('getClientLoaderCode', async () => {
    const routeDir = path.join(fixtures, './nest-routes');
    const route = await getNestedRoutes(routeDir);
    const code = getClientLoaderCode(route!);
    expect(code).toMatchSnapshot();
  });
});
