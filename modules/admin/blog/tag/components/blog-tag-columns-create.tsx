import * as ic from '@ant-design/icons';

import { BlogTagDeleteIt } from './blog-tag-delete-it';
import { BlogTagModalUpdate } from './blog-tag-modal-update';
import Link from 'next/link';
import { Space } from 'antd';
import { goBlogNav } from '@/hooks/router';

const { SwitcherOutlined } = ic;

export const blogTagColumnsCreate = (lang: string) => [
  {
    dataIndex: 'name',
    title: '标签名字',
    renderText(_: any, record: any) {
      return (
        <Link href={goBlogNav(lang!, { tag: record.id })}>
          <Space>
            <SwitcherOutlined />
            <span>{record.name}</span>
          </Space>
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
    render(_: any, record: any) {
      return (
        <Space>
          <BlogTagModalUpdate />
          <BlogTagDeleteIt fetcher={() => {}} record={record} title={''} />
        </Space>
      );
    },
  },
];
