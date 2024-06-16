import { Button, Form } from 'antd';

import { DeptModalForm } from './dept-model-form';
import { EditOutlined } from '@ant-design/icons';
import { ModalForm } from '@ant-design/pro-components';

// import { actionDeptCreate } from '../actions';

export function DeptModalCreate() {
  const [form] = Form.useForm();
  return (
    <ModalForm
      key={Date.now()}
      preserve={false}
      title="创建用户"
      trigger={<Button type="primary" icon={<EditOutlined />}></Button>}
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => form.resetFields(),
      }}
      submitTimeout={2000}
      onFinish={async (values: any) => {
        // await actionDeptCreate(values)
        form.resetFields();
        return true;
      }}
    >
      <DeptModalForm />
    </ModalForm>
  );
}
