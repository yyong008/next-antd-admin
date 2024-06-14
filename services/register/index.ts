import { NORMAL_USER } from '@/constants';
import type { Observable } from 'rxjs';
import type { TRegister } from '@/schemas/login.schema';
import { from } from 'rxjs';
import prisma from '@/libs/prisma';

export interface IRegister {
  createUserFromRegister(data: Exclude<TRegister, 'passwordRe'>): any;
  createUserFromRegister$(
    data: Exclude<TRegister, 'passwordRe'>,
  ): Observable<any>;
}

/**
 * 从注册接口创建用户
 * @param data
 * @returns
 */
export const createUserFromRegister = async (
  data: Exclude<TRegister, 'passwordRe'>,
) => {
  let user: any;
  const normal_roles = [NORMAL_USER];
  try {
    await prisma.$transaction(async tx => {
      // 创建用户
      user = await tx.user.create({
        data: {
          name: data.username,
          password: data.password,
        },
      });
      // 错误-回滚
      if (!user.id) {
        throw new Error(`create user fail`);
      }
      // 用户-角色关联
      await Promise.all(
        normal_roles?.map(async (roleId: number) => {
          await tx.userRole.create({
            data: {
              roles: { connect: { id: roleId } }, // 关联角色
              users: { connect: { id: user.id } }, // 关联用户
            },
          });
        }),
      );
      return user;
    });
  } catch (error) {
    console.error(error);
    return null;
  }
  return user;
};

/**
 * 从注册接口创建用户
 * @param data
 * @returns
 */
export const createUserFromRegister$ = async (
  data: Exclude<TRegister, 'passwordRe'>,
) => {
  let user: any;
  const roles = [3]; // 注册接口创建时默认的角色
  return from(
    prisma.$transaction(async tx => {
      // 创建用户
      user = await tx.user.create({
        data: {
          // avatar: data.avatar,
          name: data.username,
          password: data.password,
          // nickname: data.nickname,
          // email: data.email,
          // lang: data.lang,
          // theme: data.theme,
          // remark: data.remark,
          // department: {
          //   connect: {
          //     id: data.departmentId as number,
          //   },
          // },
          // phone: data.phone,
          // status: data.status,
        },
      });
      // 错误-回滚
      if (!user.id) {
        throw new Error(`create user fail`);
      }
      // 用户-角色关联
      await Promise.all(
        roles?.map(async (roleId: number) => {
          await tx.userRole.create({
            data: {
              roles: { connect: { id: roleId } }, // 关联角色
              users: { connect: { id: user.id } }, // 关联用户
            },
          });
        }),
      );
      return user;
    }),
  );
};
