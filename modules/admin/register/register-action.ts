'use server';

import { comparePassword, hashPassword } from '@/utils/bcrypt.util';
import { createLoginLog, findByUserName } from '@/services';
import { createSession, getSessionPayload } from '@/libs/session';

import { LoginSchema } from '@/schemas/login.schema';
import { createUserFromRegister } from '@/services/register';
import { redirect } from 'next/navigation';

export async function registerAction(data: {
  username: string;
  password: string;
  passwordRe: string;
  code: string;
}) {
  const validatedFields = LoginSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  if (data.password !== data.passwordRe) {
    return {
      errors: '两次密码不一致',
    };
  }

  const user: any = await findByUserName(data.username);
  if (user) {
    return {
      errors: '用户名已存在',
    };
  }

  try {
    // 验证码
    const payload: any = await getSessionPayload();
    if (data.code !== payload.captchaText) {
      return {
        errors: '输出正确的验证码',
      };
    }

    // 创建用户
    const password = hashPassword(data.password);
    await createUserFromRegister({
      username: data.username,
      password,
    });
  } catch (error) {
    return {
      errors: error,
    };
  }

  redirect('/zh-CN/admin/login');
}
