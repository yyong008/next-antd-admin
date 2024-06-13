import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { ProFormText } from '@ant-design/pro-components';
import { useLocals } from '@/hooks';

type AccountLoginProps = {
  isRegister?: boolean;
};

export function AccountLogin(props: AccountLoginProps) {
  const { t } = useLocals();
  return (
    <>
      <ProFormText
        name="username"
        fieldProps={{
          size: 'large',
          prefix: <UserOutlined />,
        }}
        placeholder={t('login-register.placeholder.username') as string}
        rules={[
          {
            required: true,
            message: t('login-register.message.username-message')!,
          },
        ]}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined />,
        }}
        placeholder={t('login-register.placeholder.password') as string}
        rules={[
          {
            required: true,
            message: t('login-register.message.password-message') as string,
          },
        ]}
      />
      {props.isRegister ? (
        <ProFormText.Password
          name="passwordRe"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          placeholder={t('login-register.placeholder.password-re') as string}
          rules={[
            {
              required: true,
              message: t(
                'login-register.message.password-message-re',
              ) as string,
            },
          ]}
        />
      ) : (
        <></>
      )}
    </>
  );
}
