import * as ic from '@ant-design/icons';

import BlogCategoryModalForm from './blog-category-modal-form';
import { Button } from 'antd';

const { EditOutlined } = ic;

export function BlogCategoryModalCreate() {
  return (
    <BlogCategoryModalForm
      title="创建分类"
      trigger={
        <Button type="primary" icon={<EditOutlined />}>
          新建
        </Button>
      }
      onFinish={async (values: any, form: any) => {
        const data = {
          type: '',
          data: {
            ...values,
          },
        };

        form.resetFields();
        return true;
      }}
    />
  );
}
