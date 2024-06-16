'use client';

import { useParams, useRouter } from 'next/navigation';

type IOptions = {
  page: number;
  pageSize: number;
};

export function useLoginLogNav() {
  const router = useRouter();
  const { lang } = useParams();
  const navLoginLog = (options: IOptions) =>
    router.push(
      `/${lang}/admin/system/monitor/login-log?page=${options.page}&pageSize=${options.pageSize}`,
    );
  return [navLoginLog];
}
