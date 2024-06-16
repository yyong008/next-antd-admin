import * as ic from '@ant-design/icons';

import { Button, Form } from 'antd';
import {
  ModalForm,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';

const { EditOutlined } = ic;

export default function LinkCategoryModal({ trigger, record, fetcher }: any) {
  const [form] = Form.useForm();
  return (
    <ModalForm
      key={Date.now()}
      preserve={false}
      title={record?.id ? '修改Link分类' : '创建Link分类'}
      onOpenChange={c => {
        if (!c || !record.id) {
          return;
        }
        form.setFieldsValue({
          ...record,
        });
      }}
      trigger={
        trigger ?? (
          <Button
            type={!record.id ? 'primary' : 'link'}
            icon={<EditOutlined />}
          >
            {!record.id ? '新建' : ''}
          </Button>
        )
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => form.resetFields(),
      }}
      submitTimeout={2000}
      onFinish={async (values: any) => {
        fetcher.submit(values, {
          method: record.id ? 'PUT' : 'POST', // 修改或新建
          encType: 'application/json',
        });
        form.resetFields();
        return true;
      }}
    >
      <ProFormText
        name="name"
        label="标签名"
        placeholder="请输入"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      />
      <ProFormTextArea
        name="description"
        label="描述"
        placeholder="请输入"
        rules={[
          {
            required: false,
            message: '请输入用户名',
          },
        ]}
      />
    </ModalForm>
  );
}
