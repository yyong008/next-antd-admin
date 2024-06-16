'use client';

import { PageContainer, ProTable } from '@ant-design/pro-components';
import { blogTagColumnsCreate, blogTagToolBarRender } from './components';

import { useParams } from 'next/navigation';

export function RouteUI({ data }: { data: any }) {
  const { lang } = useParams();

  return (
    <PageContainer>
      <ProTable
        size="small"
        search={false}
        dataSource={data.code === 1 ? [] : data.data}
        toolBarRender={() => blogTagToolBarRender()}
        columns={blogTagColumnsCreate(lang! as string)}
      />
    </PageContainer>
  );
}
