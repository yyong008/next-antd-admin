'use client';

import { useParams, useRouter } from 'next/navigation';

type IOptions = {
  page?: number;
  pageSize?: number;
  name?: string;
};

export function goFeedbackNav(lang: string, options: IOptions) {
  const name = options.name ? `&name=${options.name}` : '';
  return `/${lang}/admin/docs/feedback?page=${options?.page ?? 1}&pageSize=${options?.pageSize ?? 10}${name}`;
}

export function useFeedbackNav() {
  const router = useRouter();
  const { lang } = useParams();

  const navFeedback = (options: IOptions) => {
    return router.push(goFeedbackNav(lang! as string, options));
  };
  return [navFeedback];
}
