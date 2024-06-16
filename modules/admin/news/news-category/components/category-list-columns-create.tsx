import { Space, Tag } from 'antd';

import { DeleteIt } from '@/components/common';
import Link from 'next/link';
import { NewsCategoryModal } from './category-list/news-category-modal';

export const categoryListColumnsCreate = (lang: string) => [
  {
    dataIndex: 'name',
    title: '新闻分类名',
    render(_: any, record: any) {
      return (
        <Link href={`/${lang}/admin/news/category/${record.id}`}>
          <Tag color="blue">{record.name}</Tag>
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
          <NewsCategoryModal
            key="news-category-modal-modify"
            record={record}
            fetcher={() => {}}
          />
          <DeleteIt record={record} fetcher={() => {}} title="删除" />
        </Space>
      );
    },
  },
];
