import { RouteUI } from './route-ui';
import { getVisionData$ } from '@/app/__mock__/health/vision';
import { lastValueFrom } from 'rxjs';

export const query = async () => {
  const data: any = await lastValueFrom(getVisionData$());
  return data;
};

export async function Route() {
  const data = await query();
  return <RouteUI {...data} />;
}
