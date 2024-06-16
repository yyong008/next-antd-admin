'use client';

import { AntdIcon, DeleteIt, StatusType } from '@/components/common';
import { PageContainer, ProTable } from '@ant-design/pro-components';

import CreateRoleModal from '@/modules/admin/system/role/create-role-model';
import Link from 'next/link';
import { Space } from 'antd';
import { useLocals } from '@/hooks';
import { useParams } from 'next/navigation';
import { useRef } from 'react';

export function RouteUI({ data: { dataSource, menuRoles, flatMenu } }: any) {
  const { lang } = useParams();

  const actionRef = useRef();
  const { t } = useLocals();
  const fetcher = () => {}; // TODO
  const menus = genMenuTreeForRole(flatMenu, t, null);

  const columns = [
    {
      title: '角色名',
      dataIndex: 'name',
    },
    {
      title: '角色值',
      dataIndex: 'value',
    },
    {
      title: '角色描述',
      dataIndex: 'description',
    },
    {
      dataIndex: 'status',
      title: '状态',
      width: 100,
      ellipsis: true,
      render(_: any, record: any) {
        return <StatusType status={record.status} />;
      },
    },
    {
      title: '查看该权限用户',
      width: 200,
      ellipsis: true,
      render(_: any, record: any) {
        return (
          <Link href={`/${lang}/admin/system/user?role=${record.id}`}>
            查看
          </Link>
        );
      },
    },
    {
      title: '操作',
      render(_: any, record: any) {
        return (
          <Space>
            <CreateRoleModal
              fetcher={fetcher}
              record={record}
              key="create-role-modal"
              menu={menus}
              menuRoles={menuRoles}
            />
            <DeleteIt
              title="确定要删除次角色吗？"
              fetcher={fetcher}
              record={record}
            />
          </Space>
        );
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable
        size="small"
        actionRef={actionRef}
        rowKey="id"
        search={false}
        loading={!dataSource}
        dataSource={dataSource}
        columns={columns}
        toolBarRender={() => [
          <CreateRoleModal
            key="create-role-modal"
            record={{}}
            menu={menus}
            menuRoles={menuRoles}
            fetcher={fetcher}
          />,
        ]}
      />
    </PageContainer>
  );
}

function genMenuTreeForRole(
  items: any[],
  t: (v: string) => string,
  parentId?: number | null,
): any[] {
  return items
    .filter(item => item.parent_menu_id === parentId)
    .map(item => ({
      id: item.id,
      orderNo: item.orderNo,
      key: item.id,
      value: item.id,
      title: item.icon ? (
        <Space>
          <AntdIcon name={item.icon} />
          {t(item.name)}
        </Space>
      ) : (
        t(item.name)
      ),
      children: genMenuTreeForRole(items, t, item.id), // 递归构建子树
    }))
    .sort((a, b) => a.orderNo - b.orderNo);
}
