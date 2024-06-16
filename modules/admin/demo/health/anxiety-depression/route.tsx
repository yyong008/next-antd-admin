import { RouteUI } from './route-ui';
import { getDiseaseData$ } from '@/app/__mock__/health/anxiety-depression';
import { lastValueFrom } from 'rxjs';

export const query = async () => {
  const data = await lastValueFrom(getDiseaseData$());
  return data;
};

export async function Route() {
  const data = await query();
  return <RouteUI {...data} />;
}
