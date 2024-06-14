import { Route } from '@/modules/client/news-detail/route';

export default function NewsDetail({ params, searchParams }: any) {
  return <Route params={params} searchParams={searchParams} />;
}
