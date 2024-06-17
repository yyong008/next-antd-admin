'use client';

import { NavContainer, NavLinkContents } from './components';

export function LayoutUI({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavContainer>
      <NavLinkContents />
      {children}
    </NavContainer>
  );
}
