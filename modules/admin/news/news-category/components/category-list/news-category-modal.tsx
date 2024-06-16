import * as ic from '@ant-design/icons';

import { Button, Form } from 'antd';
import {
  ModalForm,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';

import { useAntdThemeToken } from '@/hooks';

const { EditOutlined } = ic;

export function NewsCategoryModal({ trigger, record, fetcher }: any) {
  const [form] = Form.useForm();
  const token = useAntdThemeToken();
  const iconStyles = record.id ? { style: { color: token.colorPrimary } } : {};

  return (
    <ModalForm
      key={Date.now()}
      preserve={false}
      title={record?.id ? '修改 News 分类' : '创建 News 分类'}
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
            icon={<EditOutlined {...iconStyles} />}
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
            message: '请输入',
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
            message: '请输入',
          },
        ]}
      />
    </ModalForm>
  );
}
