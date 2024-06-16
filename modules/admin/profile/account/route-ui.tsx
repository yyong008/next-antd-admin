'use client';

import { PageContainer, ProCard, ProForm } from '@ant-design/pro-components';

import { AccountFormItems } from './components';

export function RouteUI({ data: dataSource }: any) {
  return (
    <PageContainer>
      <ProCard>
        <ProForm
          initialValues={{
            ...dataSource,
            department: dataSource?.department?.name,
          }}
          readonly={true}
          layout="horizontal"
          labelCol={{ span: 1.7 }}
          submitter={false}
        >
          <AccountFormItems />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
}
