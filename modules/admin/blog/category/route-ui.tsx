'use client';

import { PageContainer, ProTable } from '@ant-design/pro-components';
import {
  blogCategoryColumnsCreate,
  createBlogCategoryToolBarRender,
} from './components';

import { useParams } from 'next/navigation';

export function RouteUI({ data }: { data: any[] }) {
  const { lang } = useParams();

  return (
    <PageContainer>
      <ProTable
        size="small"
        search={false}
        dataSource={data as any[]}
        toolBarRender={() => createBlogCategoryToolBarRender()}
        columns={blogCategoryColumnsCreate(lang! as string)}
      />
    </PageContainer>
  );
}
