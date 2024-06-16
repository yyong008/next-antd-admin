import * as newsServices from '@/services/news/news';

import { RouteUI } from './route-ui';
import { lastValueFrom } from 'rxjs';

async function query({ params }: any) {
  const result$ = newsServices.getNewsListByCategoryId$(Number(params.id));
  return lastValueFrom(result$);
}

export async function Route(props: any) {
  const data = await query({ params: props.params });
  return <RouteUI data={data} />;
}
