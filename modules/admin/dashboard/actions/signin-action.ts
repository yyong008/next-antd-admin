'use server';

import { from, lastValueFrom, switchMap } from 'rxjs';

import { createUserSignInLog$ } from '@/services/sign-in';
import { getUserId } from '@/libs/dal';

export async function signInAction() {
  const result$ = from(getUserId()).pipe(
    switchMap(userId => {
      return createUserSignInLog$({
        userId: userId!,
        signType: 1,
        signTime: new Date(),
      });
    }),
  );

  return lastValueFrom(result$);
}
