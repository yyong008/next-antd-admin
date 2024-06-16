import { RouteUI } from './route-ui';
import { getObesityData$ } from '@/app/__mock__/health/obesity';
import { lastValueFrom } from 'rxjs';

export const query = async () => {
  const data = await lastValueFrom(getObesityData$());
  return data;
};

export async function Route() {
  const data = await query();
  return <RouteUI {...data} />;
}
