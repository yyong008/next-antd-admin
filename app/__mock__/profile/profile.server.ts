import { catchError, delay, of } from 'rxjs';
import {
  loggers,
  tableListDataSource,
} from '@/app/__mock__/db/profile/profile.advanced';

export const getTableListDataSource$ = () => {
  return of({ tableListDataSource }).pipe(
    delay(20),
    catchError(error => {
      console.error(error);
      return of();
    }),
  );
};

export const getLoggers$ = () => {
  return of(loggers).pipe(
    delay(20),
    catchError(error => {
      console.error(error);
      return of();
    }),
  );
};
