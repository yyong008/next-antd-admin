import { DeleteIt } from '@/components/common';
import { DeptModalCreate } from './dept-model-create';
import { DeptModalEdit } from './dept-model-edit';
import { Space } from 'antd';
import { formatDate } from '@/app/utils';

export const deptColumnsCreate = () => [
  {
    dataIndex: 'name',
    title: '用户名',
  },
  {
    dataIndex: 'description',
    title: '描述',
  },
  {
    dataIndex: 'parent_department_id',
    title: '父 ID',
  },
  {
    dataIndex: 'sorter',
    title: '序号',
  },
  {
    dataIndex: 'createdAt',
    title: '创建时间',
    render(_: any, record: any) {
      return <div>{record.createdAt ? formatDate(record.createdAt) : '-'}</div>;
    },
  },
  {
    dataIndex: 'updatedAt',
    title: '更新时间',
    render(_: any, record: any) {
      return <div>{record.updatedAt ? formatDate(record.updatedAt) : '-'}</div>;
    },
  },
  {
    dataIndex: 'op',
    title: '操作',
    render(_: any, record: any) {
      return (
        <Space>
          <DeptModalEdit record={record} key="dept-modal" />
          <DeleteIt
            title="确定要删除此部门吗?"
            fetcher={() => {}}
            record={record}
          />
        </Space>
      );
    },
  },
];
