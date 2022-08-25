import fetch from '@/common/fakeFetch';

export const clientLoader = () => {
  return fetch('sales content', 200);
};
export default function Sales() {
  return <div>This is invoices</div>;
}
