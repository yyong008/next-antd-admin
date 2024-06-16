'use client';

import { LinkModal, LinkSvg } from './components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Space, Tag } from 'antd';

import Link from 'next/link';

export function RouteUI({ data: dataSource }: any) {
  const fetcher = () => {};

  return (
    <PageContainer>
      <ProTable
        size="small"
        search={false}
        dataSource={dataSource as any[]}
        toolBarRender={() => [
          <LinkModal record={{}} fetcher={fetcher} key="create-link-modal" />,
        ]}
        columns={[
          {
            dataIndex: 'name',
            title: '链接名',
          },
          {
            dataIndex: 'url',
            title: '链接地址',
            renderText(text, record, index, action) {
              return (
                <Link href={record.url} target="_blank">
                  <Tag className="inline-flex" color="cyan">
                    {record.url}
                    <LinkSvg className="border-yellow-200 w-[16px]" />
                  </Tag>
                </Link>
              );
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
                  <LinkModal
                    record={record}
                    fetcher={fetcher}
                    key="modify-link-modal"
                  />
                </Space>
              );
            },
          },
        ]}
      />
    </PageContainer>
  );
}
