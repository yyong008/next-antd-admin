import { NextRequest } from 'next/server';
import { createUserSignInLog } from './service';
import { verifySession } from '@/libs/dal';

export async function GET(request: NextRequest) {
  const session = await verifySession();

  // Check if the user is authenticated
  if (!session || !session.userId) {
    // User is not authenticated
    return new Response(null, { status: 401 });
  }

  createUserSignInLog({
    userId: session.userId!,
    signType: 1,
    signTime: new Date(),
  });
}
