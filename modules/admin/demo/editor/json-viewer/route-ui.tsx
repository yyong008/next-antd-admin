'use client';

import 'react-json-view-lite/dist/index.css';

import { PageContainer, ProCard } from '@ant-design/pro-components';

import { JsonView } from 'react-json-view-lite';

export function RouteUI({ data }: any) {
  return (
    <PageContainer>
      <ProCard>
        <JsonView data={data} />
      </ProCard>
    </PageContainer>
  );
}
