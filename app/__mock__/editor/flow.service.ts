import { delay, of } from 'rxjs';
import { initialEdges, initialNodes } from '@/app/__mock__/db/editor/flow';

export const getFlowData$ = () => {
  return of({ initialNodes, initialEdges }).pipe(delay(20));
};
