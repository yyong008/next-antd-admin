import * as services from './service';

import { AdminLayoutUI } from './components';
import { ReactNode } from 'react';
import { cache } from 'react';
import { getUserId } from '@/libs/dal';

const getLayoutData = cache(async (userId: number) => {
  return {
    menu: await services.getFlatMenuByUserId(userId, t => t),
    userInfo: await services.getUserInfoById(userId),
  };
});

export const Route = async ({ children }: { children: ReactNode }) => {
  const userId = await getUserId();
  const _data = await getLayoutData(userId as number);
  return (
    <AdminLayoutUI menu={_data.menu} userInfo={_data.userInfo}>
      {children}
    </AdminLayoutUI>
  );
};
