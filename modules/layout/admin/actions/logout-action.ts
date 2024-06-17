'use server';

import { deleteSession } from '@/libs/session';

export const logoutAction = async () => {
  try {
    await deleteSession();
  } catch (error) {
    console.error('redirect error', error);
    return {
      errors: error,
    };
  }
};
