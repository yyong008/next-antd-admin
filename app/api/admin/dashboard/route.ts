import { getUser, getUserId } from '@/libs/dal';

import { cache } from 'react';
import { getLoginLogLatestByUserId } from '@/services';
import { getUserInfoById } from '../system/menu/service';
import { getUserTodayIsSignInById } from '../signIn/service';

export async function GET() {
  const userId = (await getUserId()) as number;
  const data = JSON.stringify({
    data: await getData(userId),
  });
  return new Response(data);
}

const getData = cache(async (userId: number) => {
  return {
    userInfo: await getUserInfoById(userId),
    isLogin: await getUserTodayIsSignInById(userId),
    latestLoginLog: await getLoginLogLatestByUserId(userId),
  };
});
