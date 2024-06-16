'use client';

import { PageContainer, ProTable } from '@ant-design/pro-components';
import {
  StorageModal,
  paginationCreate,
  storageColumnsCreate,
} from './components';

import { usePagination } from '@/hooks/use-pagination';
import { useStorageNav } from '@/hooks/router';

export function RouteUI({ data }: any) {
  const { pageSize, current } = usePagination();
  const [navStorage] = useStorageNav();

  return (
    <PageContainer>
      <ProTable
        size="small"
        search={false}
        headerTitle="文件上传"
        rowKey="id"
        showSorterTooltip
        dataSource={data.dataSource as any[]}
        toolBarRender={() => [<StorageModal key="storage" />]}
        columns={storageColumnsCreate() as any}
        pagination={paginationCreate(data.total, pageSize, current, navStorage)}
      />
    </PageContainer>
  );
}
