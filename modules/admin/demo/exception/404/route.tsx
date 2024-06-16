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
          status="404"
          title="404"
          subTitle={t('visit-not-exist')}
          extra={<Button type="primary">{t('back-home')}</Button>}
        />
      </ProCard>
    </PageContainer>
  );
}
