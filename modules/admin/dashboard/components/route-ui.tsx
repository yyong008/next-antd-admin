'use client';

import { LoginIn, SignIn } from '.';
import { PageContainer, ProCard } from '@ant-design/pro-components';

import { useAppSelector } from '@/hooks/use-redux';

export function RouteUI({ data }: any) {
  return (
    <PageContainer>
      <ProCard>
        <ProCard>
          <SignInCardContent data={data} />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
}

function SignInCardContent({ data }: any) {
  const userInfo = useAppSelector(state => state.userInfo);
  return (
    <div className="flex justify-between">
      <div className="flex justify-between">
        <LoginIn data={data} userInfo={userInfo} />
        <SignIn data={data} />
      </div>
    </div>
  );
}
