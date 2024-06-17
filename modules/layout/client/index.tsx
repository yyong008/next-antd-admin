'use client';

import { LayoutUI } from './layout-ui';
import { ReactNode } from 'react';

export function ClientLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <LayoutUI>{children}</LayoutUI>;
}
