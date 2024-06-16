import { data, op_data } from '@/app/__mock__/db/health/sleep';
import { delay, of } from 'rxjs';

export const getSleepData$ = () => {
  return of({ data, op_data }).pipe(delay(20));
};
