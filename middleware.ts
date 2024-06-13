import { NextRequest, NextResponse } from 'next/server';

import { verifySession } from '@/libs/dal';

export async function middleware(request: NextRequest) {
  const data = await verifySession();

  if (data.isAuth) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL(`/zh-CN/admin/login`, request.nextUrl));
}

export const config = {
  matcher: [
    '/:lang/admin/((?!login|register|undefined).*)',
    '/api/admin/((?!login|register|undefined).*)',
  ],
};
