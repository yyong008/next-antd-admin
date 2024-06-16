'use client';

import { useParams, useRouter } from 'next/navigation';

type IOptions = {
  page: number;
  pageSize: number;
};

export function useUserNav() {
  const router = useRouter();
  const { lang } = useParams();
  const navUser = (options: IOptions) =>
    router.push(
      `/${lang}/admin/system/user?page=${options.page}&pageSize=${options.pageSize}`,
    );
  return [navUser];
}
