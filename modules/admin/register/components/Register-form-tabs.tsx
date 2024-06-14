'use client';

import { Tabs } from 'antd';

type LoginType = 'phone' | 'account';

export const RegisterTabs = ({
  dict,
  loginType = 'account',
  setLoginType,
}: any) => {
  return (
    <Tabs
      centered
      activeKey={loginType}
      onChange={activeKey => setLoginType(activeKey as LoginType)}
      items={[
        {
          key: 'account',
          label: dict?.['login-register']?.['account-login'],
        },
        {
          key: 'mobile',
          disabled: true,
          label: dict?.['login-register']?.['phone-login'],
        },
      ]}
    />
  );
};
