import { ButtonLink, DeleteIt } from '@/components/common';

import Link from 'next/link';
import { Space } from 'antd';

export const newListColumnsCreate = (lang: string) => [
  {
    dataIndex: 'title',
    title: '新闻标题',
    renderText(text: any, record: any) {
      return <Link href={`/${lang}/news/${record.id}`}>{text}</Link>;
    },
  },
  {
    dataIndex: 'content',
    title: '新闻内容',
    render(_: any, record: any) {
      return <div>{record.content.slice(0, 20)}</div>;
    },
  },
  {
    dataIndex: 'author',
    title: '作者',
  },
  {
    dataIndex: 'source',
    title: '新闻来源',
  },
  {
    dataIndex: 'newsId',
    title: '新闻分类',
  },
  {
    dataIndex: 'viewCount',
    title: '查看次数',
  },
  {
    dataIndex: 'op',
    title: '操作',
    render(_: any, record: any) {
      return (
        <Space>
          <ButtonLink
            type="edit"
            to={`/${lang}/admin/news/edit/${record.id}`}
          />
          <DeleteIt fetcher={() => {}} record={record} title={''} />
        </Space>
      );
    },
  },
];
