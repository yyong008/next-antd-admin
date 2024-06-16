import * as systemMenuServices from '@/services/system/menu';

export async function deleteMenus(ids: number[]) {
  const result = await systemMenuServices.deleteMenu(ids);
  return result;
}
