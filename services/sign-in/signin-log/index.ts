import { from } from 'rxjs';
import { getTodayTime } from '@/app/utils/time.utils';
import prisma from '@/libs/prisma';

export const createUserSignInLog$ = (data: any) => {
  return from(prisma.userSignLog.create({ data }));
};

export const getUserTodayIsSignInById$ = (id: number) => {
  const { startTime, endTime } = getTodayTime();

  return from(
    prisma.userSignLog.findFirst({
      where: {
        userId: id,
        signTime: {
          gte: startTime,
          lte: endTime,
        },
      },
    }),
  );
};
