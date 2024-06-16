import * as systemMenuServices from '@/services/system/menu';

export async function updateMenu(data: any) {
  const result = await systemMenuServices.updateMenu(data);
  return result;
}
