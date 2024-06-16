'use client';

import { PageContainer, ProCard } from '@ant-design/pro-components';

import { ReactFlowDemo } from './components';

export function RouteUI() {
  return (
    <PageContainer>
      <ProCard className="h-[600px]">
        <ReactFlowDemo />
      </ProCard>
    </PageContainer>
  );
}
