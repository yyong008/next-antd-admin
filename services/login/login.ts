import { catchError, from, of } from 'rxjs';

import type { Observable } from 'rxjs';
import prisma from '@/libs/prisma';

export interface ILogin {
  findByUserName(name: string): any;
  findByUserName$(name: string): Observable<any>;
}

/**
 * 根据用户名查找用户
 * @param name
 * @returns
 */
export const findByUserName = async (name: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        name,
      },
      select: {
        id: true,
        name: true,
        password: true,
        status: true,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * 根据用户名获取用户信息
 * @param name 用户名
 * @returns
 */
export const findByUserName$ = (name: string) => {
  return from(
    prisma.user.findFirst({
      where: { name }, // name is no unique
      select: {
        id: true,
        name: true,
        password: true,
        status: true,
      },
    }),
  ).pipe(
    catchError(error => {
      console.error(error);
      return of(null);
    }),
  );
};
