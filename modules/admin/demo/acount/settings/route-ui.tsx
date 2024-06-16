'use client';

import { PageContainer, ProCard } from '@ant-design/pro-components';

import { Tabs } from 'antd';
import { items } from './components';

export function RouteUI({ data, provinces, cities }: any) {
  return (
    <PageContainer
      title={null}
      style={{
        background: 'transparent',
      }}
    >
      <ProCard>
        <Tabs tabPosition={'left'} items={items(provinces, data, cities)} />
      </ProCard>
    </PageContainer>
  );
}
