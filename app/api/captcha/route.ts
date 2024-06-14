import * as svgCaptcha from 'svg-captcha';

import { NextRequest } from 'next/server';
import { updateSession } from '@/libs/session';

export async function GET(request: NextRequest, context: any) {
  try {
    var captcha = svgCaptcha?.create();
    const noUser = 0;
    const newSession =
      (await updateSession(request, noUser, captcha?.text)) ?? '';

    return new Response(captcha.data, {
      headers: {
        'Content-Type': 'image/svg+xml',
        session: newSession,
      },
    });
  } catch (error) {
    console.error(error);
  }

  return new Response('Ok');
}
