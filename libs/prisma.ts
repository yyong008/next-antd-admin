import { PrismaClient } from '../prisma/generated/client';

let prisma: PrismaClient;

declare global {
  var db: PrismaClient;
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.db) {
    global.db = new PrismaClient();
  }
  prisma = global.db;
}

export default prisma;
