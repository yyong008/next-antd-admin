import { RouteUI } from './components';
import { getAllBlog$ } from '@/services/blog';
import { getUserId } from '@/libs/dal';
import { lastValueFrom } from 'rxjs';

export async function Route() {
  const blogs = await lastValueFrom(getAllBlog$());

  return <RouteUI blogs={blogs || []} />;
}
