import { Outlet, useClientLoaderData } from '@modern-js/runtime/router';
import fetch from '@/common/fakeFetch';

export const clientLoader = () => {
  return fetch('invoices content', 2000);
};

const Invoices = () => {
  const content = useClientLoaderData<string>();
  return (
    <div>
      Invoices Layout
      {content && <div style={{ paddingLeft: '30px' }}>{content}</div>}
      {content && <Outlet />}
    </div>
  );
};

export default Invoices;
