'use client';

import { PageContainer, ProTable } from '@ant-design/pro-components';

import DictModal from './components/dict/dict-model-create';
import { dictColumnsCreate } from './components/dict-columns-create';
import { useParams } from 'next/navigation';

export function RouteUI({ data }: { data: any[] }) {
  const { lang } = useParams();

  return (
    <PageContainer>
      <ProTable
        size="small"
        search={false}
        headerTitle="字典项目"
        toolBarRender={() => [
          <DictModal record={{}} key="create-dict-modal" />,
        ]}
        dataSource={data ?? []}
        columns={dictColumnsCreate(lang as string)}
      />
    </PageContainer>
  );
}
