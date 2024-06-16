import { cache } from 'react';
import * as services from './service';

export async function GET() {
  const data = JSON.stringify({
    data: await getData(),
  });
  return new Response(data);
}

const getData = cache(async () => {
  return {
    userInfo: await services.getUserInfoById(1),
  };
});
