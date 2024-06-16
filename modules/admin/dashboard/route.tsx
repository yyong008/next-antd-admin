import * as loginLogServices from '@/services/system/login-log';
import * as singInLog from '@/services/sign-in';

import { forkJoin, from, lastValueFrom, switchMap } from 'rxjs';

import { RouteUI } from './components';
import { getUserId } from '@/libs/dal';

export async function query() {
  const result$ = from(getUserId()).pipe(
    switchMap(userId =>
      forkJoin({
        isLogin: singInLog.getUserTodayIsSignInById$(userId as number), // 签到
        latestLoginLog: loginLogServices.getLoginLogLatestByUserId(
          userId as number,
        ), // 登录
      }),
    ),
  );

  return await lastValueFrom(result$);
}

export async function Route() {
  const data = await query();
  return <RouteUI data={data} />;
}
