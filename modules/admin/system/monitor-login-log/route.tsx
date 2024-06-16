import { forkJoin, from, lastValueFrom } from 'rxjs';
import { getLoginLogList, loginLogCount } from '@/services';

import { RouteUI } from './route-ui';

export async function Route({ searchParams }: any) {
  let page = Number(searchParams.page ?? 1);
  let pageSize = Number(searchParams.pageSize ?? 10);
  let name = searchParams.name ?? '';

  const result$ = forkJoin({
    count: from(loginLogCount()),
    list: from(getLoginLogList({ page, pageSize, name })),
  });
  const result = await lastValueFrom(result$);
  return <RouteUI data={result.list} count={result.count} />;
}
