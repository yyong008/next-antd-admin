import dynamic from 'next/dynamic';

export const ProLayoutDy = dynamic(
  () => import('@ant-design/pro-components').then(com => com.ProLayout),
  { ssr: false },
);
