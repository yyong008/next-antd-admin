import { Button, Form } from 'antd';
import {
  ModalForm,
  ProFormDependency,
  ProFormRadio,
} from '@ant-design/pro-components';
import { useEffect, useState } from 'react';

import { EditOutlined } from '@ant-design/icons';
import { TypeDir } from './type-dir';
import { TypeMenu } from './type-menu';
import { TypePermission } from './type-permission';

type MenuModalProps = {
  trigger?: () => void;
  record?: any;
  fetcher?: any;
  menuNotPerm?: any[];
};

export default function MenuModal({
  trigger,
  record,
  fetcher,
  menuNotPerm,
}: MenuModalProps) {
  const [form] = Form.useForm();

  const [innerMenuNotPerm, setInnerMenuNotPerm] = useState<any>();

  useEffect(() => {
    const n = [
      {
        name: '根目录',
        key: 'root',
        id: -1,
        children: menuNotPerm,
      },
    ];

    setInnerMenuNotPerm([...n]);
  }, [menuNotPerm]);
  return (
    <ModalForm
      layout="horizontal"
      labelCol={{ span: 3 }}
      key={Date.now()}
      preserve={false}
      title={record?.id ? '修改菜单' : '创建菜单'}
      onOpenChange={c => {
        if (!c || !record.id) {
          return;
        }
        let parentId = null;
        if (record.id && record.parent_menu_id) {
          parentId = record.parent_menu_id;
        } else if (record.parent_menu_id === null) {
          parentId = -1;
        }
        form.setFieldsValue({
          ...record,
          parentId,
          type: Number(record.type),
        });
      }}
      trigger={
        trigger ??
        ((
          <Button
            type={!record.id ? 'primary' : 'link'}
            icon={<EditOutlined />}
          >
            {!record.id ? '新建' : ''}
          </Button>
        ) as any)
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => form.resetFields(),
      }}
      submitTimeout={2000}
      onFinish={async (values: any) => {
        const vals = { ...values };
        if (record.id) {
          vals.id = record.id;
        }
        fetcher.submit(vals, {
          method: record.id ? 'PUT' : 'POST', // 修改或新建
          encType: 'application/json',
        });
        form.resetFields();
        return true;
      }}
    >
      <ProFormRadio.Group
        name="type"
        label="菜单类型"
        radioType="button"
        fieldProps={{
          buttonStyle: 'solid',
        }}
        width={300}
        disabled={record.id}
        initialValue={!record.id ? 1 : record.type}
        options={[
          {
            label: '目录',
            value: 1,
          },
          {
            label: '菜单',
            value: 2,
          },
          {
            label: '权限',
            value: 3,
          },
        ]}
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      />

      <ProFormDependency key="typeMode" name={['type']} ignoreFormListField>
        {({ type }) => {
          if (type === 1) {
            return <TypeDir menuNotPerm={innerMenuNotPerm}></TypeDir>;
          }
          if (type === 2) {
            return <TypeMenu menuNotPerm={innerMenuNotPerm}></TypeMenu>;
          }
          if (type === 3) {
            return (
              <TypePermission menuNotPerm={innerMenuNotPerm}></TypePermission>
            );
          }
        }}
      </ProFormDependency>
    </ModalForm>
  );
}
