'use client';

import { useParams, useRouter } from 'next/navigation';

type IOptions = {
  page: number;
  pageSize: number;
};

export function useStorageNav() {
  const router = useRouter();
  const { lang } = useParams();
  const navStorage = (options: IOptions) =>
    router.push(
      `/${lang}/admin/tools/storage?page=${options.page}&pageSize=${options.pageSize}`,
    );
  return [navStorage];
}
