'use client';

import { PageContainer, ProCard, ProForm } from '@ant-design/pro-components';

import { NewsEditorForm } from './components/news-edit-form';
import { useParams } from 'next/navigation';

export function RouteUI({ data }: any) {
  const { id } = useParams();

  return (
    <PageContainer>
      <ProCard>
        <ProForm
          initialValues={{ ...data.news, date: data.news?.publishedAt }}
          onFinish={async v => {
            const vals = v;
            vals.id = id;
            return true;
          }}
        >
          <NewsEditorForm data={[]} />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
}
