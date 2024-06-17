'use client';

import { AppProgressBar } from 'next-nprogress-bar';
import { useAntdThemeToken } from '@/hooks';

export function ProgressBar() {
  const token = useAntdThemeToken();
  return (
    <AppProgressBar
      height="4px"
      color={token.colorPrimary}
      options={{ showSpinner: true }}
      shallowRouting
    />
  );
}
