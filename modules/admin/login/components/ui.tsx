'use client';

import { AccountLogin, ActionIcons, MobileLogin } from '@/components/login';
import { App, Button, ConfigProvider, Tabs } from 'antd';
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCheckbox,
} from '@ant-design/pro-components';
import { useParams, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

import Link from 'next/link';
import { genHashedPassword } from '@/app/utils';
import { loginAction } from '../action';

export function RouteUI({ dict }: any) {
  const { message } = App.useApp();
  const [type, setType] = useState<string>('account');
  const { lang = 'zh-CN' } = useParams();

  const router = useRouter();
  let [isPending, startTransition] = useTransition();

  return (
    <ProConfigProvider dark>
      <ConfigProvider>
        <div className="flex flex-col w-[100vw] h-[100vh]">
          <LoginFormPage
            backgroundVideoUrl="https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_30fps.mp4"
            className="flex-1"
            containerStyle={{
              backgroundColor: 'rgba(0, 0, 0,0.65)',
              backdropFilter: 'blur(4px)',
            }}
            activityConfig={{
              style: {
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                // color: token.colorTextHeading,
                borderRadius: 8,
                backgroundColor: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(4px)',
              },
              title: '去主页',
              // subTitle: "不一样",
              action: (
                <Link href={`/${lang}`}>
                  <Button
                    size="large"
                    style={{
                      borderRadius: 20,
                      // background: token.colorBgElevated,
                      // color: token.colorPrimary,
                      width: 120,
                    }}
                  >
                    去看看
                  </Button>
                </Link>
              ),
            }}
            logo={
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt="logo"
                src="/next.svg"
                style={{ borderRadius: '10px' }}
              />
            }
            title={dict?.['login-register']?.['title']}
            subTitle={dict?.['login-register']?.['desc']}
            initialValues={{
              autoLogin: true,
              username: 'super admin',
              password: '123456',
            }}
            actions={[
              <div
                className="flex items-center text-gray-100 mt-[20px]"
                key="login-other"
              >
                <div>{dict?.['login-register']?.['other-login']}</div>
                <ActionIcons key="icons" />
              </div>,
            ]}
            onFinish={async (values: any) => {
              startTransition(async () => {
                const a = await loginAction({
                  ...values,
                  password: genHashedPassword(values.password),
                });
                if (a.errors) {
                  message.error(a.errors.toString());
                  return;
                }
                if (a.message === 'ok') {
                  message.success('登录成功');
                  router.push(`/zh-CN/admin/dashboard`);
                  return;
                }
              });
            }}
            submitter={{
              searchConfig: {
                submitText: dict?.['login-register']?.['submit'],
              },
              submitButtonProps: {
                loading: isPending,
              },
            }}
          >
            <Tabs
              activeKey={type}
              onChange={setType}
              centered
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
            {type === 'account' && <AccountLogin />}
            {type === 'mobile' && <MobileLogin />}
            <div style={{ margin: '10px 0px' }}>
              <ProFormCheckbox name="autoLogin">
                {dict?.['login-register']?.['remeber']}
              </ProFormCheckbox>
            </div>
          </LoginFormPage>
        </div>
      </ConfigProvider>
    </ProConfigProvider>
  );
}
