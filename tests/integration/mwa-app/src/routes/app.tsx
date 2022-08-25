import { Outlet } from '@modern-js/runtime/router';

export default () => {
  return (
    <div>
      Global Layout
      <Outlet />
    </div>
  );
};
