import type { Prisma } from '@prisma/client';
import { SortOrder } from '@/types';
import type { TPage } from '@/types';
import prisma from '@/libs/prisma';

export interface ILoginLog {
  createLoginLog(data: Prisma.LoginlogCreateInput): any;
  loginLogCount(): any;
  getLoginLogList(data: TPage): any;
}

/**
 * create login log info
 * @param data  Prisma.LoginLogCreateInput
 * @returns
 */
export const createLoginLog = async (data: Prisma.LoginlogCreateInput) => {
  try {
    const res = await prisma.loginlog.create({
      data,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * 获取 Login Log 的数量
 * @returns Number
 */
export const loginLogCount = async () => {
  try {
    return await prisma.loginlog.count();
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * 获取分页获取登录信息的列表
 * @param param0 TPage
 * @returns
 */
export const getLoginLogList = async (data: TPage) => {
  const { page = 1, pageSize = 10, name = '' } = data;
  try {
    return await prisma.loginlog.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        id: SortOrder.DESCENDING,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * 获取分页获取登录信息的列表
 * @param param0 TPage
 * @returns
 */
export const getLoginLogLatestByUserId = async (userId: number) => {
  try {
    return await prisma.loginlog.findFirst({
      where: {
        userId,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
