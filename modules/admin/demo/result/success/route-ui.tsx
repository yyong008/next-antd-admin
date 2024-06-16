'use client';

import { Button, Result } from 'antd';

import { useLocals } from '@/hooks';

export function RouteUI() {
  const { t } = useLocals();
  return (
    <Result
      status="success"
      title={t('submission-success')}
      subTitle={t('check-modify-information-success')}
      extra={[
        <Button type="primary" key="console">
          {t('go-console')}
        </Button>,
        <Button key="buy">{t('buy-again')}</Button>,
      ]}
    />
  );
}
