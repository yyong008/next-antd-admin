import { RouteUI } from './route-ui';
import { gethandData$ } from '@/app/__mock__/health/hand';
import { lastValueFrom } from 'rxjs';

export const query = async () => {
  const data = await lastValueFrom(gethandData$());
  return data;
};

export async function Route() {
  const data = await query();
  return <RouteUI {...data} />;
}
