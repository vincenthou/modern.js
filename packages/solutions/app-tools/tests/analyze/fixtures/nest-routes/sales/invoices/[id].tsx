import { useParams } from '@modern-js/runtime/router';

export default function Id() {
  const params = useParams();
  return <div>The id is {params.id}</div>;
}
