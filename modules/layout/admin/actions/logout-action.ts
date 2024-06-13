'use server';

import { deleteSession } from '@/libs/session';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export const logoutAction = async () => {
  try {
    await deleteSession();
    return {
      code: 0,
      message: 'ok',
    };
  } catch (error) {
    console.error('redirect error', error);
    return {
      code: 1,
      message: error,
    };
  }
};
