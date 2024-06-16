import * as systemMenuRoleServices from '@/services/system/menu-role';

import { RouteUI } from './route-ui';

export async function Route(props: any) {
  const { lang = 'zh-CN' } = props.params;
  const t: any = (t: any) => t;
  const menuRaw = await systemMenuRoleServices.getMenuRaw(t, lang!);
  const menuNotPerm = await systemMenuRoleServices.getTypeNotPermMenu(t);
  return <RouteUI menuRaw={menuRaw} menuNotPerm={menuNotPerm} />;
}
