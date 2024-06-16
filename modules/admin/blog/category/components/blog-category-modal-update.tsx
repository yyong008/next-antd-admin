import * as ic from '@ant-design/icons';

import { Button, Form } from 'antd';

import BlogCategoryModalForm from './blog-category-modal-form';
import { useParams } from 'next/navigation';

const { EditOutlined } = ic;

export default function BlogCategoryModalUpdate({ record, fetcher }: any) {
  const [form] = Form.useForm();
  const { id } = useParams();

  return (
    <BlogCategoryModalForm
      title="修改分类"
      onOpenChange={(c: any) => {
        form.setFieldsValue({
          ...record,
        });
      }}
      trigger={<Button type={'link'} icon={<EditOutlined />} />}
      onFinish={async (values: any, form: any) => {
        const vals = {
          ...values,
        };
        vals.categoryId = Number(id);
        vals.id = record.id;

        const data = {
          type: '',
          data: {
            ...vals,
          },
        };

        fetcher.submit(data, {
          method: 'PUT',
          encType: 'application/json',
        });
        form.resetFields();
        return true;
      }}
    />
  );
}
