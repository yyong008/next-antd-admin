'use client';

import { PageContainer, ProCard, ProTable } from '@ant-design/pro-components';

import ChangeLogModal from './components/changelog-modal';
import { changelogColumns } from './components';
import { useFeedbackNav } from '@/hooks/router';
import { useParams } from 'next/navigation';

export function RouteUI({ data }: { data: any }) {
  const { total = 0, list = [] } = data;
  const params = useParams();
  const [navFeedback] = useFeedbackNav();

  return (
    <PageContainer>
      <ProCard>
        <ProTable
          headerTitle="更新日志"
          size="small"
          search={false}
          dataSource={list ?? []}
          columns={changelogColumns()}
          toolBarRender={() => [
            <ChangeLogModal key="changelog-modal-create" record={{}} />,
          ]}
          pagination={{
            total,
            pageSize: Number(params.pageSize ?? 10),
            onChange(page, pageSize) {
              navFeedback({ page, pageSize });
            },
          }}
        />
      </ProCard>
    </PageContainer>
  );
}
