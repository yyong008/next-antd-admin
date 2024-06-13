import { query } from '@/app/utils/request';

export const getLayoutData = async () => {
  return await query('/api/admin/system/menu');
};
