'use client';

import NProgress from 'nprogress';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useNProgress() {
  const router = useRouter();

  useEffect(() => {
    if (isReady) {
      NProgress.done();
    } else {
      NProgress.start();
    }
  }, [isReady]);
}
