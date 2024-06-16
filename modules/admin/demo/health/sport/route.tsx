import { RouteUI } from './route-ui';
import { getSportData$ } from '@/app/__mock__/health/sport';
import { lastValueFrom } from 'rxjs';

export const query = async () => {
  const data = await lastValueFrom(getSportData$());
  return data;
};

export async function Route() {
  const data = await query();
  return <RouteUI {...data} />;
}
