'use client';

import { LockOutlined, MobileOutlined } from '@ant-design/icons';
import { ProFormCaptcha, ProFormText } from '@ant-design/pro-components';

import { App } from 'antd';

export const LoginFormPhone = ({ dict }: any) => {
  const { message } = App.useApp();

  return (
    <>
      <ProFormText
        fieldProps={{
          size: 'large',
          prefix: <MobileOutlined className={'prefixIcon'} />,
        }}
        name="mobile"
        placeholder={'手机号'}
        rules={[
          {
            required: true,
            message: '请输入手机号！',
          },
          {
            pattern: /^1\d{10}$/,
            message: '手机号格式错误！',
          },
        ]}
      />
      <ProFormCaptcha
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined className={'prefixIcon'} />,
        }}
        captchaProps={{
          size: 'large',
        }}
        placeholder={'请输入验证码'}
        captchaTextRender={(timing, count) => {
          if (timing) {
            return `${count} ${'获取验证码'}`;
          }
          return '获取验证码';
        }}
        name="captcha"
        rules={[
          {
            required: true,
            message: '请输入验证码！',
          },
        ]}
        onGetCaptcha={async () => {
          message.success('获取验证码成功！验证码为：1234');
        }}
      />
    </>
  );
};
