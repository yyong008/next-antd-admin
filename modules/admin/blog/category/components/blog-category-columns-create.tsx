import * as ic from '@ant-design/icons';

import { BlogCategoryDeleteIt } from './blog-category-delete-it';
import BlogCategoryModalUpdate from './blog-category-modal-update';
import Link from 'next/link';
import { Space } from 'antd';
import { goBlogNav } from '@/hooks/router';

const { SwitcherOutlined } = ic;

export const blogCategoryColumnsCreate = (lang: string) => [
  {
    dataIndex: 'name',
    title: '分类名字',
    renderText(_: any, record: any) {
      return (
        <Link href={goBlogNav(lang!, { category: record.id })}>
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
    title: '标签内容',
  },
  {
    dataIndex: 'op',
    title: '操作',
    render(_: any, record: any) {
      return (
        <Space>
          <BlogCategoryModalUpdate fetcher={() => {}} record={record} />
          <BlogCategoryDeleteIt fetcher={() => {}} record={record} />
        </Space>
      );
    },
  },
];
