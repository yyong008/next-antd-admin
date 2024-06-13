import * as services from './service';

import { cache } from 'react';
import { getUserId } from '@/libs/dal';

export async function GET({}) {
  const userId = await getUserId();
  if (!userId) {
    return new Response('');
  }
  const data = JSON.stringify({
    data: await getData(userId as number),
  });
  return new Response(data);
}

const getData = cache(async (userId: number) => {
  return {
    menu: await services.getFlatMenuByUserId(userId, t => t),
    userInfo: await services.getUserInfoById(userId),
  };
});
