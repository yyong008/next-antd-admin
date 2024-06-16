'use client';

import { PageContainer, ProTable } from '@ant-design/pro-components';

import { NewsCategoryModal } from './components/category-list/news-category-modal';
import { categoryListColumnsCreate } from './components';
import { useParams } from 'next/navigation';

export function RouteUI({ data, children }: any) {
  const fetcher = () => {};
  const { lang } = useParams();

  return (
    <PageContainer>
      <ProTable
        size="small"
        headerTitle="新闻分类"
        search={false}
        toolBarRender={() => [
          <NewsCategoryModal
            key="news-category-modal-create"
            record={{}}
            fetcher={fetcher}
          />,
        ]}
        dataSource={data}
        columns={categoryListColumnsCreate(lang! as string)}
      />
      {children}
    </PageContainer>
  );
}
