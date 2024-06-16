'use client';

import { DeptModalCreate, deptColumnsCreate } from './components';
import { PageContainer, ProTable } from '@ant-design/pro-components';

export function RouteUI({ dataSource }: any) {
  return (
    <PageContainer>
      <ProTable
        size="small"
        rowKey="name"
        headerTitle="部门管理"
        search={false}
        pagination={false}
        toolBarRender={() => [<DeptModalCreate key="dept-modal-create" />]}
        dataSource={dataSource as any[]}
        columns={deptColumnsCreate()}
      />
    </PageContainer>
  );
}
