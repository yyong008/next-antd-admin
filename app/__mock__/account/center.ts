import { delay, of } from 'rxjs';

import { accountData } from '@/app/__mock__/db/account/center';

export const getAccountData$ = () => {
  return of(accountData).pipe(delay(20));
};
