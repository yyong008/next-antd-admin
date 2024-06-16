'use client';

import { FeedbackModal, feedbackColumnsCreate } from './components';
import { PageContainer, ProTable } from '@ant-design/pro-components';

import { useFeedbackNav } from '@/hooks/router';
import { useParams } from 'next/navigation';

export function RouteUI({ data }: any) {
  const { total = 0, list = [] } = data;
  const params = useParams();
  const [navFeedback] = useFeedbackNav();
  const fetcher = () => {};

  return (
    <PageContainer>
      <ProTable
        headerTitle="反馈内容"
        size="small"
        search={false}
        dataSource={list ?? []}
        columns={feedbackColumnsCreate()}
        toolBarRender={() => [
          <FeedbackModal
            key="changelog-modal-create"
            record={{}}
            fetcher={fetcher}
          />,
        ]}
        pagination={{
          total,
          pageSize: Number(params.pageSize ?? 10),
          onChange(page, pageSize) {
            navFeedback({ page, pageSize });
          },
        }}
      />
    </PageContainer>
  );
}
