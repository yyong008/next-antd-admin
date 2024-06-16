import * as systemDeptServices from '@/services/system/dept';
import * as systemRoleServices from '@/services/system/role';
import * as systemUserServices from '@/services/system/user';

import { forkJoin, from, lastValueFrom } from 'rxjs';

import { RouteUI } from './route-ui';

async function query({ searchParams }: any) {
  const options = {
    page: searchParams?.page ?? 1,
    pageSize: searchParams?.pageSize ?? 10,
    name: searchParams?.name ?? '',
    role: searchParams?.role,
  };

  const result$ = forkJoin({
    total: from(systemUserServices.getUserCount(options)),
    dataSource: from(systemUserServices.getUserList(options)),
    roles: from(systemRoleServices.getRoleList()),
    depts: from(systemDeptServices.getDeptListTree()),
  });
  return await lastValueFrom(result$);
}

export async function Route({ searchParams }: any) {
  const data = await query(searchParams);
  return <RouteUI {...data} />;
}
