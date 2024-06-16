import { delay, of } from 'rxjs';

import { tableListDataSource } from '@/app/__mock__/db/list/table.list';

export const getCardList$ = () => {
  return of({ tableListDataSource }).pipe(delay(20));
};
