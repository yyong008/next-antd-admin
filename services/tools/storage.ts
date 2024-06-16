import type { Observable } from 'rxjs';

import { SortOrder } from '@/types';
import type { TPage } from '@/types';
import { from } from 'rxjs';
import prisma from '@/libs/prisma';

/**
 * create storage info
 * @param data
 * @returns
 */
export const createStorage = async (data: any) => {
  try {
    const res = await prisma.storage.create({
      data,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * create storage info
 * @param data
 * @returns
 */
export const createStorage$ = (data: any) => {
  return from(
    prisma.storage.create({
      data,
    }),
  );
};

/**
 * delete storage
 * @param ids
 * @returns
 */
export const deleteStorageByIds$ = (ids: number[]) => {
  return from(
    prisma.storage.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    }),
  );
};

/**
 * 获取 storage 的数量
 * @returns Number
 */
export const storageCount$ = () => {
  return from(prisma.storage.count());
};

/**
 * 获取分页获取登录信息的列表
 * @param param0 TPage
 * @returns
 */
export const getStorageList = async (data: TPage) => {
  const { page = 1, pageSize = 10, name = '' } = data;
  try {
    return await prisma.storage.findMany({
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
export const getStorageList$ = (data: TPage) => {
  const { page = 1, pageSize = 10, name = '' } = data;
  return from(
    prisma.storage.findMany({
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
    }),
  );
};
