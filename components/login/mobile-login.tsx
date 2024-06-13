import { LockOutlined, MobileOutlined } from '@ant-design/icons';
import { ProFormCaptcha, ProFormText } from '@ant-design/pro-components';

import { App } from 'antd';
import { useLocals } from '@/hooks';

export function MobileLogin() {
  const { t } = useLocals();
  const { message } = App.useApp();

  return (
    <>
      <ProFormText
        fieldProps={{
          size: 'large',
          prefix: <MobileOutlined />,
        }}
        name="phone"
        placeholder={t('login-register.placeholder.phone')!}
        rules={[
          {
            required: true,
            message: t('login-register.message.phone-message')!,
          },
          {
            pattern: /^1\d{10}$/,
            message: t('login-register.message.phone-format-message')!,
          },
        ]}
      />
      <ProFormCaptcha
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined />,
        }}
        captchaProps={{
          size: 'large',
        }}
        placeholder={t('login-register.message.code')!}
        captchaTextRender={(timing: boolean, count: number) => {
          if (timing) {
            return `${count} ${t('login-register.code.get-verification-code')}`;
          }
          return t('login-register.code.get-verification-code');
        }}
        name="captcha"
        rules={[
          {
            required: true,
            message: t('login-register.code.verification-code-message')!,
          },
        ]}
        onGetCaptcha={async () => {
          message.success(t('get-captcha-success')!);
        }}
      />
    </>
  );
}
