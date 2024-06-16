import { getSearchApplicationCardList$ } from '@/app/__mock__/list/search.applications';
import { RouteUI } from './route-ui';

import { lastValueFrom } from 'rxjs';

export const query = async () => {
  const data = await lastValueFrom(getSearchApplicationCardList$());
  return data;
};

export async function Route() {
  const data = await query();
  return <RouteUI {...data} />;
}
