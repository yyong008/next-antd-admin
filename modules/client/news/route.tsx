import { RouteUI } from './components';
import { getNews } from '@/services/news/news';

export async function Route() {
  const news = await getNews();
  return <RouteUI news={news ?? []} />;
}
