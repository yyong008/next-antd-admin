import { BlogContent, BlogHeader } from './';

import { Layout } from './layout';

export function RouteUI({ blog }: any) {
  return (
    <Layout>
      <BlogHeader blog={blog} />
      <BlogContent content={blog.content} />
    </Layout>
  );
}
