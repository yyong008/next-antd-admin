import { RouteUI } from './rout-ui';
import { getAnalysisData$ } from '@/app/__mock__/dashboard/analysis';
import { lastValueFrom } from 'rxjs';

export async function query() {
  const result = await lastValueFrom(getAnalysisData$());
  return result;
}

export async function Route() {
  const data = await query();

  return <RouteUI data={data} />;
}
