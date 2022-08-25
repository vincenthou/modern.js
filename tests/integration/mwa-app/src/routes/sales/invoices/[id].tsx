import { useParams, useClientLoaderData } from '@modern-js/runtime/router';
import fetch from '@/common/fakeFetch';

export const clientLoader = () => {
  return fetch('details', 2000);
};

export default function Id() {
  const params = useParams();
  const content = useClientLoaderData<string>();
  return (
    <div>
      The id is {params.id}
      {content && <div style={{ paddingLeft: '30px' }}>{content}</div>}
    </div>
  );
}
