'use client';

import { ProFormCheckbox } from '@ant-design/pro-components';

export const OtherLoginItems = () => {
  return (
    <div
      style={{
        marginBlockEnd: 24,
      }}
    >
      <ProFormCheckbox noStyle name="autoLogin">
        自动登录
      </ProFormCheckbox>
      <a
        style={{
          float: 'right',
        }}
      >
        忘记密码
      </a>
    </div>
  );
};
