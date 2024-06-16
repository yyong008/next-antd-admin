'use client';

import './styles/workplace.css';

import {
  ContainerContent,
  WorkplaceColOne,
  WorkplaceColTwo,
} from '@/modules/admin/demo/dashboard/workspace/components';

import { PageContainer } from '@ant-design/pro-components';
import { Row } from 'antd';

export function RouteUI({ data }: any) {
  return (
    <PageContainer breadcrumb={{}} content={<ContainerContent data={data} />}>
      <Row gutter={[8, 8]}>
        <WorkplaceColOne data={data} />
        <WorkplaceColTwo data={data} />
      </Row>
    </PageContainer>
  );
}
