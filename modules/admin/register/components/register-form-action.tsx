'use client';

import {
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { Space, theme } from 'antd';

import { CSSProperties } from 'react';
import { setAlpha } from '@ant-design/pro-components';

export const RegisterFormAction = () => {
  const { token } = theme.useToken();

  const iconStyles: CSSProperties = {
    marginInlineStart: '16px',
    color: setAlpha(token.colorTextBase, 0.2),
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  };
  return (
    <Space>
      其他登录方式
      <AlipayCircleOutlined style={iconStyles} />
      <TaobaoCircleOutlined style={iconStyles} />
      <WeiboCircleOutlined style={iconStyles} />
    </Space>
  );
};
