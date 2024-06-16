import { RouteUI } from './route-ui';
import { getDeptListTree } from '@/services/system/dept';

async function query() {
  return getDeptListTree();
}

export async function Route() {
  const dataSource = await query();

  return <RouteUI dataSource={dataSource} />;
}
