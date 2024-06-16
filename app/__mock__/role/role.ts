import { catchError, delay, of } from 'rxjs';

import { roles } from '@/app/__mock__/db/role';

export const getRoles$ = () => {
  return of(roles).pipe(
    delay(20),
    catchError(error => {
      return of();
    }),
  );
};
