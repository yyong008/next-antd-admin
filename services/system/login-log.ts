import type { Prisma } from '@prisma/client';
import { SortOrder } from '@/types';
import type { TPage } from '@/types';
import prisma from '@/libs/prisma';

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

export const loginLogCount = async () => {
  try {
    return await prisma.loginlog.count();
  } catch (error) {
    console.error(error);
    return null;
  }
};

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

export const getLoginLogLatestByUserId = async (userId: number) => {
  try {
    return await prisma.loginlog.findFirst({
      where: {
        userId,
      },
      orderBy: {
        loginAt: SortOrder.DESCENDING,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
