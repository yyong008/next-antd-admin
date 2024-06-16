import { delay, of } from 'rxjs';

import { packageJson } from '@/app/__mock__/db/editor/json';

export const getPackageJsonData$ = () => {
  return of({ packageJson }).pipe(delay(20));
};
