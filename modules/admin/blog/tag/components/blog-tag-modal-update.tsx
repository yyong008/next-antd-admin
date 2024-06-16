import { BlogTagModalForm } from './blog-tag-modal-form';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useParams } from 'next/navigation';

export function BlogTagModalUpdate({ record }: any) {
  const { id } = useParams();

  return (
    <BlogTagModalForm
      title="修改标签"
      onOpenChange={(c: any, form: any) => {
        if (!c || !record.id) {
          return;
        }
        form.setFieldsValue({
          ...record,
        });
      }}
      trigger={
        <Button type="link" icon={<EditOutlined />}>
          修改
        </Button>
      }
      onFinish={async (values: any, form: any) => {
        const vals = {
          ...values,
        };

        vals.categoryId = Number(id);
        vals.id = record.id;

        form.resetFields();
        return true;
      }}
    />
  );
}
