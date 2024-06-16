'use client';

import {
  CardLastPhoneList,
  CardStep,
  CardUserInfo,
  ThreeCardLoggerTable,
} from '@/modules/admin/demo/profile/advance/components';
import { PageContainer, ProCard } from '@ant-design/pro-components';

import { Space } from 'antd';

export function RouteUI({ data }: any) {
  return (
    <PageContainer>
      <ProCard>
        <Space direction="vertical" style={{ width: '100%' }}>
          <CardStep />
          <CardUserInfo />
          <CardLastPhoneList />
          <ThreeCardLoggerTable data={data} />
        </Space>
      </ProCard>
    </PageContainer>
  );
}
