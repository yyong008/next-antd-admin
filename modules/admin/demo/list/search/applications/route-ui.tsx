'use client';

import { Row, Space } from 'antd';

import AppCardList from '@/modules/admin/demo/list/search/applications/components/app-card-list';
import { ListHeaderSearch } from '@/components/common';
import { PageContainer } from '@ant-design/pro-components';
import { ToolSelect } from '@/modules/admin/demo/list/search/list-search';

export function RouteUI({ data }: any) {
  return (
    <PageContainer
      fixedHeader
      title={false}
      content={<ListHeaderSearch title="搜索列表（应用）" key="id" />}
    >
      <Space direction="vertical" className="w-[100%]">
        <Row gutter={[10, 10]}>
          <ToolSelect showOwner={false} />
        </Row>
        <Row
          gutter={[10, 10]}
          style={{ marginLeft: '-8px', marginRight: '-8px' }}
        >
          <AppCardList cardList={data?.cardList} />
        </Row>
      </Space>
    </PageContainer>
  );
}
