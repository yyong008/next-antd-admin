'use client';

import { useParams, useRouter } from 'next/navigation';

type IOptions = {
  page?: number;
  pageSize?: number;
  name?: string;
};

export function goMailNav(lang: string, options: IOptions) {
  const name = options.name ? `&name=${options.name}` : '';
  return `/${lang}/admin/mail/list?page=${options?.page ?? 1}&pageSize=${options?.pageSize ?? 10}${name}`;
}

export function useMailNav() {
  const router = useRouter();
  const { lang } = useParams();

  const navMail = (options: IOptions) => {
    return router.push(goMailNav(lang! as string, options));
  };
  return [navMail];
}
