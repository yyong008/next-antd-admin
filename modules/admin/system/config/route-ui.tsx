'use client';

import { PageContainer, ProCard, ProTable } from '@ant-design/pro-components';

import { createConfigColumns } from './components';

export function RouteUI() {
  return (
    <PageContainer>
      <ProCard>
        <ProTable
          search={false}
          dataSource={[]}
          columns={createConfigColumns()}
        />
      </ProCard>
    </PageContainer>
  );
}
