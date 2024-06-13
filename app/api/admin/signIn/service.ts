import * as serverUtils from '@/app/utils/time.utils';

import prisma from '@/libs/prisma';

const createUserSignInLog = (data: any) => {
  return prisma.userSignLog.create({ data });
};

const getUserTodayIsSignInById = (id: number) => {
  const { startTime, endTime } = serverUtils.getTodayTime();

  return prisma.userSignLog.findFirst({
    where: {
      userId: id,
      signTime: {
        gte: startTime,
        lte: endTime,
      },
    },
  });
};

export { createUserSignInLog, getUserTodayIsSignInById };
