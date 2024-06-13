import 'server-only';

import { cookies } from 'next/headers';
import { decrypt } from './session';
import prisma from './prisma';

export const verifySession = async () => {
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  if (!session || !session?.userId) {
    return { isAuth: false, userId: null };
  }

  return { isAuth: true, userId: session.userId };
};

export const verifySessionGithub = async () => {
  const cookie = cookies().get('next-auth.session-token')?.value;
  const session = await decrypt(cookie);

  return session;
};

export const getUser = async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = prisma.user.findUnique({
      where: {
        id: session.userId as number,
      },
    });

    const user = data;

    return user;
  } catch (error) {
    console.error('Failed to fetch user');
    return null;
  }
};

export const getUserId = async () => {
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  if (!session || !session?.userId) {
    return null;
  }

  return session.userId;
};
