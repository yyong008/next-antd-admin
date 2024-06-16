import { DeleteIt, FormatTime } from '@/components/common';

import ChangeLogModal from './changelog-modal';
import { Space } from 'antd';
import Tag from 'antd/lib/tag';

const typeMap = {
  1: {
    color: 'blue',
    text: '重大更新',
  },
  2: {
    color: 'green',
    text: '功能更新',
  },
  3: {
    color: 'volcano',
    text: 'Bug 修复',
  },
};

export const changelogColumns = () => [
  {
    dataIndex: 'publish_version',
    title: '版本',
  },
  {
    dataIndex: 'publish_name',
    title: '发布者',
  },
  {
    dataIndex: 'type',
    title: '更新类型',
    render: (_: any, record: { type: 1 | 2 | 3 }) => (
      <Tag color={typeMap?.[record.type].color}>
        {typeMap?.[record.type].text}
      </Tag>
    ),
  },
  {
    dataIndex: 'content',
    title: '发布内容',
    ellipsis: true,
  },
  {
    dataIndex: 'url',
    title: '跳转链接',
    ellipsis: true,
    render(_: any, record: any) {
      return <a href={record.url}>{record.url}</a>;
    },
  },
  {
    dataIndex: 'publish_time',
    title: '发布时间',
    render(_: any, record: any) {
      return <FormatTime timeStr={record.publish_time} />;
    },
  },
  {
    dataIndex: 'createdAt',
    title: '创建时间',
    render(_: any, record: any) {
      return <FormatTime timeStr={record.createdAt} />;
    },
  },
  {
    dataIndex: 'updatedAt',
    title: '更新时间',
    render(_: any, record: any) {
      return <FormatTime timeStr={record.updatedAt} />;
    },
  },
  {
    dataIndex: 'op',
    title: '操作',
    render(_: any, record: any) {
      return (
        <Space>
          <ChangeLogModal key="changelog-modal-modify" record={record} />
          <DeleteIt fetcher={() => {}} record={record} title={''} />
        </Space>
      );
    },
  },
];
