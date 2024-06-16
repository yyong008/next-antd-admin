'use client';

import { AppProgressBar } from 'next-nprogress-bar';

export function ProgressBar() {
  return (
    <AppProgressBar
      height="4px"
      color="#1677ff"
      options={{ showSpinner: true }}
      shallowRouting
    />
  );
}
