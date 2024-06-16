import { RouteUI } from './route-ui';
import { getSleepData$ } from '@/app/__mock__/health/sleep';
import { lastValueFrom } from 'rxjs';

export const query = async () => {
  const data = await lastValueFrom(getSleepData$());
  return data;
};

export async function Route() {
  const data = await query();
  return <RouteUI {...data} />;
}
