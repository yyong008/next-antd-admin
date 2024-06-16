'use client';

import { Button, Result } from 'antd';
import { PageContainer, ProCard } from '@ant-design/pro-components';

import { useLocals } from '@/hooks';

export function Route() {
  const { t } = useLocals();

  return (
    <PageContainer>
      <ProCard
        style={{
          height: '70vh',
          minHeight: 600,
        }}
      >
        <Result
          status="500"
          title="500"
          subTitle={t('server-error')}
          extra={<Button type="primary">{t('back-home')}</Button>}
        />
      </ProCard>
    </PageContainer>
  );
}
