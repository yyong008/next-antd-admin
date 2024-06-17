import dynamic from 'next/dynamic';

export const WaterMarkDy = dynamic(
  () => import('@ant-design/pro-components').then(com => com.WaterMark),
  { ssr: false },
);
