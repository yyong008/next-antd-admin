'use client';

import { AppProgressBar } from 'next-nprogress-bar';

export function ProgressBar() {
  return (
    <AppProgressBar
      height="4px"
      color="#fffd00"
      options={{ showSpinner: true }}
      shallowRouting
    />
  );
}
