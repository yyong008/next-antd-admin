import { RouteUI } from './components';
import { getNewsById$ } from '@/services/news/news';
import { lastValueFrom } from 'rxjs';

export async function Route({ searchParams, params }: any) {
  const { id } = params;
  const news = await lastValueFrom(getNewsById$(Number(id!)));
  return <RouteUI news={news || {}} />;
}
