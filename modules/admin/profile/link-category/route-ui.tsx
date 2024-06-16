'use client';

import { PageContainer, ProTable } from '@ant-design/pro-components';

import { DeleteIt } from '@/components/common';
import LinkCategoryModal from '@/modules/admin/profile/link-category/components/link-category-modal';
import { LinkTag } from './components/link-tag';
import { Space } from 'antd';

export function RouteUI({ data: dataSource }: any) {
  return (
    <PageContainer>
      <ProTable
        size="small"
        headerTitle="链接分类管理"
        search={false}
        toolBarRender={() => [
          <LinkCategoryModal
            key="link-category-modal-create"
            record={{}}
            fetcher={() => {}}
          />,
        ]}
        dataSource={dataSource as any[]}
        columns={[
          {
            dataIndex: 'name',
            title: '链接分类名',
            render(_, record) {
              return <LinkTag record={record} />;
            },
          },
          {
            dataIndex: 'description',
            title: '描述',
          },
          {
            dataIndex: 'op',
            title: '操作',
            render(_, record) {
              return (
                <Space>
                  <LinkCategoryModal
                    key="link-category-modal-modify"
                    record={record}
                    fetcher={() => {}}
                  />
                  <DeleteIt record={record} fetcher={() => {}} title="删除" />
                </Space>
              );
            },
          },
        ]}
      />
    </PageContainer>
  );
}
