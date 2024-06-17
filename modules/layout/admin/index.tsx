import { ReactNode, cache } from 'react';

import { AdminLayoutUI } from './layout-ui';
import { getFlatMenuByUserId } from '@/services/system/menu';
import { getUserId } from '@/libs/dal';
import { getUserInfoById } from '@/services/system/user';

const getLayoutData = cache(async (userId: number) => {
  return {
    menu: await getFlatMenuByUserId(userId, t => t),
    userInfo: await getUserInfoById(userId),
  };
});

export const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const userId = await getUserId();
  const _data = await getLayoutData(userId as number);
  return (
    <AdminLayoutUI menu={_data.menu} userInfo={_data.userInfo}>
      {children}
    </AdminLayoutUI>
  );
};
