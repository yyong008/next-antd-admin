'use client';

import { Button, Space } from 'antd';
import { DeleteIt, StatusType } from '@/components/common';
import { PageContainer, ProTable } from '@ant-design/pro-components';

import DictItemModal from '@/modules/admin/system/dict/components/dict/create-dict-item-model';
import { formatDate } from '@/app/utils';
import { useRouter } from 'next/navigation';

export function RouteUI({ data }: any) {
  const router = useRouter();
  return (
    <PageContainer>
      <ProTable
        size="small"
        search={false}
        headerTitle="字典项目"
        toolBarRender={() => [
          <DictItemModal key="create-dict-modal" record={{}} />,
          <Button
            key="2"
            onClick={() => {
              router.back();
            }}
          >
            返回
          </Button>,
        ]}
        dataSource={data as any[]}
        columns={[
          {
            dataIndex: 'key',
            title: '字典键',
          },
          {
            dataIndex: 'value',
            title: '字典值',
          },
          {
            dataIndex: 'description',
            title: '描述',
          },
          {
            dataIndex: 'remark',
            title: '标记',
          },
          {
            dataIndex: 'status',
            title: '状态',
            renderText(_, record) {
              return <StatusType status={record.status} />;
            },
          },
          {
            dataIndex: 'createdAt',
            title: '创建时间',
            render(_, record) {
              return (
                <div>
                  {record.createdAt ? formatDate(record.createdAt) : '-'}
                </div>
              );
            },
          },
          {
            dataIndex: 'updatedAt',
            title: '更新时间',
            render(_, record) {
              return (
                <div>
                  {record.updatedAt ? formatDate(record.updatedAt) : '-'}
                </div>
              );
            },
          },
          {
            dataIndex: 'op',
            title: '操作',
            render(_, record) {
              return (
                <Space>
                  <DictItemModal key="create-dict-modal" record={record} />
                  <DeleteIt
                    title="确定要删除此部门吗?"
                    fetcher={() => {}}
                    record={record}
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
