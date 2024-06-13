'use server';

import { createLoginLog, findByUserName } from '@/services';

import { LoginSchema } from '@/schemas/login.schema';
import { comparePassword } from '@/utils/bcrypt.util';
import { createSession } from '@/libs/session';
import { getLoginInfo } from '@/utils/ip.util';

export async function loginAction(data: {
  username: string;
  password: string;
}) {
  const validatedFields = LoginSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const user: any = await findByUserName(data.username);

  if (!user) {
    return {
      errors: '请输入正确的用户或密码',
    };
  }
  if (user!.status === 1) {
    return {
      errors: '用户被禁用',
    };
  }

  if (!comparePassword(data.password, user.password)) {
    return {
      errors: '请输入正确的用户或密码2',
    };
  }

  try {
    const loginInfo = await getLoginInfo();
    const logininLog = await createLoginLog({
      ...loginInfo,
      name: user.name,
      userId: user!.id,
    });
    await createSession(user.id);

    return {
      message: 'ok',
    };
  } catch (error) {
    return {
      errors: error,
    };
  }
}
