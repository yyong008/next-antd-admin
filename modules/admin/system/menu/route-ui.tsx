'use client';

import { PageContainer } from '@ant-design/pro-components';
import SystemMenu from '@/modules/admin/system/menu/components/menu';

export function RouteUI({ menuRaw, menuNotPerm }: any) {
  return (
    <PageContainer>
      <SystemMenu
        menuRaw={menuRaw}
        fetcher={() => {}}
        menuNotPerm={menuNotPerm!}
      />
    </PageContainer>
  );
}
