import { delay, of } from 'rxjs';

import { cardList } from '@/app/__mock__/db/list/search.applications';

export const getSearchApplicationCardList$ = () => {
  return of({ cardList }).pipe(delay(20));
};
