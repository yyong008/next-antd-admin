import { RouteUI } from './route-ui';
import { getCervicalData$ } from '@/app/__mock__/health/cervical-vertebra';
import { lastValueFrom } from 'rxjs';

export const query = async () => {
  const data = await lastValueFrom(getCervicalData$());
  return data;
};

export async function Route() {
  const data = await query();
  return <RouteUI {...data} />;
}
