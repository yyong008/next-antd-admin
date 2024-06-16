'use client';

import { PageContainer, ProTable } from '@ant-design/pro-components';

import { createLogColumnsCreate } from './components';
import { useLoginLogNav } from '@/hooks/router';

export function RouteUI({ data, count }: any) {
  const [navLoginLog] = useLoginLogNav();

  return (
    <PageContainer>
      <ProTable
        size="small"
        search={false}
        headerTitle="登录记录"
        rowKey="id"
        showSorterTooltip
        dataSource={data}
        columns={createLogColumnsCreate()}
        pagination={{
          total: count,
          pageSize: 10,
          onChange(page, pageSize) {
            navLoginLog({
              page,
              pageSize,
            });
          },
        }}
      />
    </PageContainer>
  );
}
