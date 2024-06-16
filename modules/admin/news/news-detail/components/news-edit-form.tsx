import {
  ProForm,
  ProFormDateTimePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

import { EditorRichFromItem } from './editor-rich-from-item';
import form from 'antd/es/form';

export const NewsEditorForm = ({ data }: any) => {
  return (
    <>
      <ProFormText
        label="新闻标题"
        name="title"
        rules={[
          {
            required: true,
            message: '请输入',
          },
        ]}
      />
      <ProFormText
        label="新闻作者"
        name="author"
        rules={[
          {
            required: true,
            message: '请输入',
          },
        ]}
      />
      <ProFormText
        label="新闻来源"
        name="source"
        rules={[
          {
            required: true,
            message: '请输入',
          },
        ]}
      />
      <ProFormDateTimePicker
        label="新闻发布时间"
        name="date"
        width={'100%' as any}
        rules={[
          {
            required: true,
            message: '请输入',
          },
        ]}
      />
      <ProFormSelect
        label="分类"
        name="newsId"
        request={async () => {
          const ncs = data.newsCategory;
          return ncs?.map((c: any) => {
            return {
              label: c.name,
              value: c.id,
            };
          }) as any;
        }}
        rules={[
          {
            required: true,
            message: '请输入',
          },
        ]}
      />
      <ProForm.Item
        label="编写新闻"
        name="content"
        rules={[
          {
            required: true,
            message: '请输入',
          },
        ]}
      >
        <EditorRichFromItem form={form} data={data} />
      </ProForm.Item>
    </>
  );
};
