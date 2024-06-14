import 'server-only';

import { SignJWT, jwtVerify } from 'jose';

import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.error('Failed to verify session', error);
    return null;
  }
}

export async function createSession(userId?: number, captchaText?: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const payload: any = {
    expiresAt,
  };
  if (userId) {
    payload.userId = userId;
  }
  if (captchaText) {
    payload.captchaText = captchaText;
  }
  const session = await encrypt(payload);

  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function getSessionPayload() {
  const session = cookies().get('session')?.value;
  if (!session) {
    return null;
  }
  let payload = await decrypt(session);
  return payload;
}

export async function updateSession(
  request: NextRequest,
  userId?: number,
  captchaText?: string,
) {
  let session = request.cookies.get('session')?.value;
  let payload: any = {};

  if (!session || !payload) {
    return null;
  }

  if (!payload) {
    payload = {};
  }

  if (payload && userId) {
    payload.userId = userId;
  }

  if (payload && captchaText) {
    payload.captchaText = captchaText;
  }

  const newSession = await encrypt(payload);

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookies().set('session', newSession, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: 'lax',
    path: '/',
  });

  return newSession;
}

export async function deleteSession() {
  await cookies().delete('session');
}
