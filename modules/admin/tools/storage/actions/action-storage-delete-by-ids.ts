import * as toolsStorageServices from '@/services/tools/storage';

import { lastValueFrom } from 'rxjs';

export async function deleteStorageByIds(ids: any[]) {
  const result$ = toolsStorageServices.deleteStorageByIds$(ids);
  return await lastValueFrom(result$);
}
