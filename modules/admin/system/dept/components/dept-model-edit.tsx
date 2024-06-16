import { Button, Form } from 'antd';

import { DeptModalForm } from './dept-model-form';
import { EditOutlined } from '@ant-design/icons';
import { ModalForm } from '@ant-design/pro-components';

export function DeptModalEdit({ record }: any) {
  const [form] = Form.useForm();
  return (
    <ModalForm
      key={Date.now()}
      preserve={false}
      title="修改科室"
      onOpenChange={c => {
        if (!c || !record.id) {
          return;
        }
        form.setFieldsValue({
          ...record,
        });
      }}
      trigger={<Button type={'link'} icon={<EditOutlined />} />}
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => form.resetFields(),
      }}
      submitTimeout={2000}
      onFinish={async (values: any) => {
        const vals = { ...values };
        vals.id = record.id;
        // const result = await actionDeptEdit(vals);
        form.resetFields();
        return true;
      }}
    >
      <DeptModalForm />
    </ModalForm>
  );
}
