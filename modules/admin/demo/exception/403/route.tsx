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
          status="403"
          title="403"
          subTitle={t('not-authorized')}
          extra={<Button type="primary">{t('back-home')}</Button>}
        />
      </ProCard>
    </PageContainer>
  );
}
