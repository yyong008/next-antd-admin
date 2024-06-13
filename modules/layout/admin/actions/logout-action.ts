'use server';

import { deleteSession } from '@/libs/session';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export const logoutAction = async () => {
  try {
    await deleteSession();
  } catch (error) {
    console.error('redirect error', error);
  }
  redirect('/zh-CN/admin/login');
};
