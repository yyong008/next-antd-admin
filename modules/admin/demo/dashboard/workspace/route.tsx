import { RouteUI } from './route-ui';
import { getWorkplaceData$ } from '@/app/__mock__/dashboard/workplace';
import { lastValueFrom } from 'rxjs';

export async function query() {
  return await lastValueFrom(getWorkplaceData$());
}

export async function Route() {
  const data = await query();
  return <RouteUI data={data} />;
}
