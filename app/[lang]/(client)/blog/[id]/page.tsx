import { Route } from '@/modules/client/blog-detail/route';

export default function BlogDetail({ params, searchParams }: any) {
  return <Route params={params} searchParams={searchParams} />;
}
