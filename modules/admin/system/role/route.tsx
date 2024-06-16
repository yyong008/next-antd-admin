import * as SystemMenuRoleServices from '@/services/system/menu-role';
import * as systemRoleServices from '@/services/system/role';

import { forkJoin, from, lastValueFrom } from 'rxjs';

import { RouteUI } from './route-ui';

async function query() {
  const result$ = forkJoin({
    dataSource: from(systemRoleServices.getRoleList()),
    flatMenu: from(SystemMenuRoleServices.getFlatMenu()),
    menuRoles: from(systemRoleServices.getMenuRoles()),
  });

  const data = await lastValueFrom(result$);
  return data;
}

export async function Route() {
  const data = await query();
  return (
    <RouteUI
      data={{
        dataSource: data.dataSource || [],
        menuRoles: data.menuRoles || [],
        flatMenu: data.flatMenu || [],
      }}
    />
  );
}
