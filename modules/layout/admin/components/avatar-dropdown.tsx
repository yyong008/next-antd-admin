'use client';

import { App, Dropdown, Form, message } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useParams, useRouter } from 'next/navigation';

import React from 'react';
import { logoutAction } from '../actions/logout-action';
import { useLocals } from '@/hooks';

type AvatarDropDownProps = {
  dom: any;
};

export const AvatarDropDown: React.FC<AvatarDropDownProps> = ({ dom }) => {
  const { message } = App.useApp();
  const router = useRouter();
  const { t } = useLocals();
  const { lang } = useParams();

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: 'profile-center',
            icon: <UserOutlined />,
            label: t('personal-center'),
            onClick: () => {
              router.push(`/${lang}/admin/profile/account`);
            },
          },
          {
            type: 'divider',
          },
          {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: <>{t('logout')}</>,
            async onClick(e) {
              await logoutAction();
            },
          },
        ],
      }}
    >
      {dom}
    </Dropdown>
  );
};
