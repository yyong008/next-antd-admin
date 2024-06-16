import {
  ModalForm,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';

import { Form } from 'antd';

export function BlogTagModalForm({
  trigger,
  title,
  onOpenChange,
  onFinish,
}: any) {
  const [form] = Form.useForm();

  return (
    <ModalForm
      key={Date.now()}
      preserve={false}
      title={title}
      onOpenChange={c => {
        onOpenChange(c, form);
      }}
      trigger={trigger}
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => form.resetFields(),
      }}
      submitTimeout={2000}
      onFinish={values => onFinish(values, form)}
    >
      <ProFormText
        name="name"
        label="标签名"
        placeholder="请输入"
        rules={[
          {
            required: true,
            message: '请输入',
          },
        ]}
      />
      <ProFormTextArea
        name="description"
        label="标签描述"
        placeholder="请输入"
        rules={[
          {
            required: false,
            message: '请输入',
          },
        ]}
      />
    </ModalForm>
  );
}
