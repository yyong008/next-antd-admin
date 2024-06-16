import { RouteUI } from './route-ui';
import { getAccountSettingsData$ } from '@/app/__mock__/account/settings';
import { lastValueFrom } from 'rxjs';

export async function query() {
  const data = await lastValueFrom(getAccountSettingsData$());
  return {
    data,
    provinces: [] as any[],
    cities: [],
  };
}

export async function Route() {
  const { data, provinces, cities } = await query();
  return <RouteUI data={data} provinces={provinces} cities={cities} />;
}
