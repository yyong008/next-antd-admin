'use server';

import { NextRequest, NextResponse } from 'next/server';

import { deleteSession } from '@/libs/session';

export async function POST(request: NextRequest) {
  const url = new URL('/', request.url);

  try {
    await deleteSession();
    return NextResponse.redirect(url);
  } catch (error) {
    console.error(error);
  }
}
