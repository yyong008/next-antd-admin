'use client';

import { App, theme } from 'antd';
import { LoginForm, ProConfigProvider } from '@ant-design/pro-components';
import {
  LoginFormAccount,
  LoginFormAction,
  LoginFormPhone,
  LoginTabs,
  OtherLoginItems,
} from '.';
import { startTransition, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { genHashedPassword } from '@/app/utils';
import { loginAction } from '../login-action';

type LoginType = 'phone' | 'account';

export const RouteUI = ({ dict }: any) => {
  const { lang } = useParams();
  const { token } = theme.useToken();
  const { message } = App.useApp();
  const [loginType, setLoginType] = useState<LoginType>('account');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onFinish = async (values: any) => {
    setLoading(true);
    startTransition(async () => {
      const result = await loginAction({
        ...values,
        password: genHashedPassword(values.password),
      });
      setLoading(false);
      if (result && result.errors) {
        message.error(result.errors.toString());
        return;
      } else {
        message.success('Success, Welcome!');
        return router.push(`/${lang}/admin/dashboard`);
      }
    });
  };
  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: token.colorBgContainer, width: '100vw' }}>
        <LoginForm
          logo="/next.svg"
          title="登录"
          subTitle="A admin with next.js and antd"
          actions={<LoginFormAction />}
          onFinish={onFinish}
          loading={loading}
        >
          <LoginTabs
            dict={dict}
            loginType={loginType}
            setLoginType={setLoginType}
          />
          {loginType === 'account' && <LoginFormAccount />}
          {loginType === 'phone' && <LoginFormPhone />}
          <OtherLoginItems />
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};
