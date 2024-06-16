import * as systemMenuServices from '@/services/system/menu';

export async function createMenu(data: any) {
  const result = await systemMenuServices.createMenu(data);
  return result;
}
