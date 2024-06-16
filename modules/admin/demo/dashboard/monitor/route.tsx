import { RouteUI } from './route-ui';
import { getMonitorData$ } from '@/app/__mock__/dashboard/monitor';
import { lastValueFrom } from 'rxjs';

export async function query() {
  const result = await lastValueFrom(getMonitorData$());
  return result;
}

export async function Route() {
  const { activeMonitorData, gaugeData } = await query();
  return (
    <RouteUI activeMonitorData={activeMonitorData} gaugeData={gaugeData} />
  );
}
