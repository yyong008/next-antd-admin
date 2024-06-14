import { RouteUI } from './components';
import { getBlogById$ } from '@/services/blog';
import { lastValueFrom } from 'rxjs';

export async function Route({ searchParams, params }: any) {
  const { id } = params;
  const blog = await lastValueFrom(getBlogById$(Number(id!)));
  return <RouteUI blog={blog || {}} />;
}
