import { Outlet } from '@modern-js/runtime/router';

export default () => {
  return (
    <div>
      app
      <Outlet />
    </div>
  );
};
