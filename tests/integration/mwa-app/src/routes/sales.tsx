import { Outlet, useClientLoaderData } from '@modern-js/runtime/router';
import fetch from '@/common/fakeFetch';

export const clientLoader = () => {
  return fetch('sales content', 2000);
};

export default function Sales() {
  const content = useClientLoaderData<string>();
  return (
    <div>
      Sales Layout
      {content && <div style={{ paddingLeft: '30px' }}>{content}</div>}
      {content && <Outlet />}
    </div>
  );
}
