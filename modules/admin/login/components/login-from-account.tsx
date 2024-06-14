'use client';

import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { ProFormText } from '@ant-design/pro-components';
import { theme } from 'antd';

const getStatus = (value: string | undefined) => {
  if (value && value.length > 12) {
    return 'ok';
  }
  if (value && value.length > 6) {
    return 'pass';
  }
  return 'poor';
};

const Tip = ({ status }: any) => {
  const { token } = theme.useToken();
  if (status === 'pass') {
    return <div style={{ color: token.colorWarning }}>强度：中</div>;
  }
  if (status === 'ok') {
    return <div style={{ color: token.colorSuccess }}>强度：强</div>;
  }
  return <div style={{ color: token.colorError }}>强度：弱</div>;
};

const passworErrorTipStr =
  'Password should contain numbers, letters and special characters, at least 8 characters long.';

export const LoginFormAccount = () => {
  return (
    <>
      <ProFormText
        name="username"
        fieldProps={{
          size: 'large',
          prefix: <UserOutlined className={'prefixIcon'} />,
        }}
        placeholder={'用户名: admin or user'}
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined className={'prefixIcon'} />,
          strengthText: passworErrorTipStr,
          statusRender: value => {
            const status = getStatus(value);

            return <Tip status={status} />;
          },
        }}
        placeholder={'密码: 123456'}
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      />
    </>
  );
};
