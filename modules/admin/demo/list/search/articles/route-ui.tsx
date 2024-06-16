'use client';

import {
  SearchList,
  ToolSelect,
} from '@/modules/admin/demo/list/search/list-search';

import { ListHeaderSearch } from '@/components/common';
import { PageContainer } from '@ant-design/pro-components';
import { Row } from 'antd';

export function RouteUI() {
  return (
    <PageContainer
      title={false}
      content={[<ListHeaderSearch title="搜索列表（文章）" key="id" />]}
    >
      <Row gutter={[10, 10]}>
        <ToolSelect />
        <SearchList />
      </Row>
    </PageContainer>
  );
}
