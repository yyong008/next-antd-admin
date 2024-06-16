'use client';

import { Row, Space } from 'antd';

import { ListHeaderSearch } from '@/components/common';
import { PageContainer } from '@ant-design/pro-components';
import ProjectsList from '@/modules/admin/demo/list/search/projects/components/list-search-projects';
import { ToolSelect } from '@/modules/admin/demo/list/search/list-search';

export function RouteUI({ data }: any) {
  return (
    <PageContainer
      title={false}
      content={[<ListHeaderSearch title="搜索列表（项目）" key="id" />]}
    >
      <Space direction="vertical" className="w-[100%]">
        <Row gutter={[10, 10]}>
          <ToolSelect />
        </Row>
        <Row
          gutter={[10, 10]}
          style={{ marginLeft: '-8px', marginRight: '-8px' }}
        >
          <ProjectsList cardList={data?.cardList} />
        </Row>
      </Space>
    </PageContainer>
  );
}
