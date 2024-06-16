'use client';

import 'reactflow/dist/style.css';

import { PageContainer, ProCard } from '@ant-design/pro-components';

import { ReactFlowDemo } from './components';

export function RouteUI({ nodes, edges }: any) {
  return (
    <PageContainer>
      <ProCard
        style={{
          height: 600,
          width: '100%',
        }}
      >
        <ReactFlowDemo />
      </ProCard>
    </PageContainer>
  );
}
