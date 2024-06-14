'use client';

import { App, theme } from 'antd';
import { LoginForm, ProConfigProvider } from '@ant-design/pro-components';
import {
  OtherRegisterItems,
  RegisterFormAccount,
  RegisterFormAction,
  RegisterFormPhone,
  RegisterTabs,
} from '.';
import { startTransition, useState } from 'react';

import { RigisterCaptachat } from './register-captchat';
import { genHashedPassword } from '@/app/utils';
import { registerAction } from '../register-action';

type LoginType = 'phone' | 'account';

export const RouteUI = ({ dict, url }: any) => {
  const { token } = theme.useToken();
  const { message } = App.useApp();
  const [loginType, setLoginType] = useState<LoginType>('account');
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: any) => {
    setLoading(true);
    startTransition(async () => {
      const result = await registerAction({
        ...values,
        password: genHashedPassword(values.password),
        passwordRe: genHashedPassword(values.passwordRe),
      });
      setLoading(false);
      if (result && result.errors) {
        message.error(result.errors.toString());
        return;
      }
    });
  };
  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: token.colorBgContainer, width: '100vw' }}>
        <LoginForm
          logo="/next.svg"
          title="注册"
          subTitle="A admin with next.js and antd"
          actions={<RegisterFormAction />}
          onFinish={onFinish}
          loading={loading}
        >
          <RegisterTabs
            dict={dict}
            loginType={loginType}
            setLoginType={setLoginType}
          />
          {loginType === 'account' && <RegisterFormAccount />}
          {loginType === 'phone' && <RegisterFormPhone />}
          <RigisterCaptachat />
          <OtherRegisterItems />
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};
