'use client';

import { PageContainer, ProCard } from '@ant-design/pro-components';
import {
  RefundRequest,
  ReturnItemsList,
  ReturnProgress,
  UserInfo,
} from '@/modules/admin/demo/profile/basic/components';

import { Divider } from 'antd';

export function RouteUI({ data }: any) {
  return (
    <PageContainer>
      <ProCard>
        <RefundRequest />
        <Divider />
        <UserInfo />
        <Divider />
        <ReturnItemsList dataSource={data} />
        <Divider />
        <ReturnProgress dataSource={data} />
      </ProCard>
    </PageContainer>
  );
}
