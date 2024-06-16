import { delay, of } from 'rxjs';

import { cardList } from '@/app/__mock__/db/list/search.projects';

export const getSearchProjectCardList$ = () => {
  return of({ cardList }).pipe(delay(20));
};
