'use client';

import { PageContainer, ProTable } from '@ant-design/pro-components';
import {
  blogColumnsCreate,
  createBlogCategoryToolBarRender,
} from './components';
import { useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

import { message } from 'antd';

export function RouteUI({ data }: { data: any }) {
  const { dataSource, tag: tagInfo, category: categoryInfo } = data.data;
  const { lang } = useParams();
  const searchParams = useSearchParams();
  const fetcher = () => {};

  const info = useMemo(() => {
    let name = '';
    if (searchParams.get('category') && categoryInfo?.name)
      name = '分类: ' + categoryInfo?.name;
    if (searchParams.get('tag') && tagInfo?.name)
      name = '标签: ' + tagInfo?.name;

    return { name, categoryName: categoryInfo?.name, tagName: tagInfo?.name };
  }, [categoryInfo?.name, searchParams, tagInfo?.name]);

  useEffect(() => {
    if (data.code === 1) {
      message.error(data.message);
    }
  }, [data]);

  return (
    <PageContainer>
      <ProTable
        rowKey="id"
        size="small"
        search={false}
        dataSource={dataSource as any[]}
        headerTitle={info.name}
        toolBarRender={() => createBlogCategoryToolBarRender(lang! as string)}
        columns={blogColumnsCreate(lang! as string, fetcher, info) as any}
      />
    </PageContainer>
  );
}
