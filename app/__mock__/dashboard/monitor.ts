import { delay, of } from 'rxjs';

// import { geoJson } from "@/app/__mock__/db/dashboard/monitor/map";
import { data as activeMonitorData } from '@/app/__mock__/db/dashboard/monitor/active-monitor';
import { gaugeData } from '@/app/__mock__/db/dashboard/monitor/gauge';

export const getMonitorData$ = () => {
  return of({
    geoJson: {},
    activeMonitorData,
    gaugeData,
  }).pipe(delay(20));
};
