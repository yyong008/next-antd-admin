import * as newsCategoryServices from '@/services/news/news-category';

import { RouteUI } from './route-ui';
import { lastValueFrom } from 'rxjs';

async function query() {
  const data = await lastValueFrom(newsCategoryServices.getAllNewsCategory$());
  return data;
}

export async function Route() {
  const data = await query();
  return <RouteUI data={data} />;
}
