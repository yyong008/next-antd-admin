'use client';

import dynamic from 'next/dynamic';

const DynamicSettingDrawerNoSSR = dynamic(
  async () => (await import('@ant-design/pro-components')).SettingDrawer,
  { ssr: false },
);

export const SettingDrawerWrap = ({ theme, setTheme }: any) => {
  return (
    <DynamicSettingDrawerNoSSR
      getContainer={() => document.body}
      enableDarkTheme
      onSettingChange={(settings: any) => {
        setTheme(settings);
      }}
      settings={{ ...theme }}
    />
  );
};
