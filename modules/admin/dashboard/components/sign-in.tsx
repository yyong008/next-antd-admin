'use client';

import { Button } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { signInAction } from '../actions';
import { useState } from 'react';

export function SignIn({ data }: any) {
  const [isLogin, setIsLogin] = useState(data.isLogin);
  return (
    <div>
      {isLogin ? <SignedButton /> : <ToSignButton setIsLogin={setIsLogin} />}
    </div>
  );
}

function ToSignButton({ setIsLogin }: any) {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      onClick={async () => {
        setLoading(true);
        const result = await signInAction();
        setIsLogin(true);
        setLoading(false);
      }}
      htmlType="submit"
      loading={loading}
    >
      签到
    </Button>
  );
}

function SignedButton() {
  return (
    <Button type="primary" icon={<CheckCircleFilled />}>
      已签到
    </Button>
  );
}
