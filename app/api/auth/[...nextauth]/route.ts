import NextAuth, { NextAuthOptions } from 'next-auth';

import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  // debug: process.env.NODE_ENV === "development",
  providers: [
    GithubProvider({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
      httpOptions: {
        timeout: 50000,
      },
    }),
  ],
};

const handlers = NextAuth(authOptions);

export const GET = handlers;
export const POST = handlers;
