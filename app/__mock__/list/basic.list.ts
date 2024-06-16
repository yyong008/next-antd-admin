import { delay, of } from 'rxjs';

import { dataSource } from '@/app/__mock__/db/list/basic.list';

export const getBasicList$ = () => {
  return of({ dataSource }).pipe(delay(20));
};
