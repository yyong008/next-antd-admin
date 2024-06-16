'use client';

import { PageContainer, ProTable } from '@ant-design/pro-components';

import { ButtonLink } from '@/components/common';
import { defaultLang } from '@/config/lang';
import { newListColumnsCreate } from './components';
import { useParams } from 'next/navigation';

export function RouteUI({ data: dataSource }: any) {
  const { lang = defaultLang } = useParams();
  return (
    <PageContainer>
      <ProTable
        headerTitle="新闻"
        size="small"
        search={false}
        dataSource={dataSource as any[]}
        toolBarRender={() => [
          <ButtonLink
            key="create-news-modal"
            type="new"
            content="添加新闻"
            to={`/${lang}/admin/news/edit`}
          />,
        ]}
        columns={newListColumnsCreate(lang as string)}
      />
    </PageContainer>
  );
}
