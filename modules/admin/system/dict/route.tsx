import * as systemDictServices from '@/services/system/dict';

import { RouteUI } from './route-ui';

export async function Route() {
  const data = await systemDictServices.getDictList();
  return <RouteUI data={data!} />;
}
