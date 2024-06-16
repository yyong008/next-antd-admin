import { RouteUI } from './route-ui';
import { getDictListByDictionaryId } from '@/services/system/dict-item';

export async function Route({ params }: any) {
  const { id } = params;
  const data = await getDictListByDictionaryId(Number(id));
  return <RouteUI data={data} />;
}
