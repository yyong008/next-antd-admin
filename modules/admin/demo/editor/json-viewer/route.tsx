import { RouteUI } from './route-ui';
import { getPackageJsonData$ } from '@/app/__mock__/editor/json.service';
import { lastValueFrom } from 'rxjs';

export async function Route() {
  const data = await lastValueFrom(getPackageJsonData$());
  return <RouteUI data={data} />;
}
