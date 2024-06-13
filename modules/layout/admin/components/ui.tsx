'use client';

import {
  AvatarDropDown,
  MenuFooterRender,
  SettingDrawerWrap,
  createActionRenderWrap,
  createTokens,
} from './';
import { Footer, MenuItemLink, MenuItemOutLink } from '@/components/common';
import { ProLayout, WaterMark } from '@ant-design/pro-components';
import { useContext, useMemo, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';

import { SettingContext } from '@/context';
import { createProLayoutRoute } from '@/app/utils';
import { prolayoutConfig } from '@/config/prolayout';
import { useLocals } from '@/hooks';

const resetStyles = {
  padding: '0px',
  margin: '0px',
  height: '100vh',
};

export function AdminLayoutUI({ menu, userInfo, children }: any) {
  const { lang } = useParams();
  const _pathname = usePathname();
  const value = useContext(SettingContext);
  const [pathname, setPathname] = useState(_pathname);
  const token = useMemo(() => createTokens(value), [value]);
  const { t } = useLocals();
  const route = useMemo(
    () => createProLayoutRoute(lang as string, menu, t),
    [lang, menu, t],
  );
  return (
    <WaterMark content="remix antd admin">
      <ProLayout
        location={{
          pathname,
        }}
        route={route}
        token={token}
        loading={userInfo && userInfo.username <= 0}
        {...value.theme}
        logo={prolayoutConfig.logo}
        menu={prolayoutConfig.menu}
        style={resetStyles}
        title={prolayoutConfig.title}
        ErrorBoundary={false}
        pageTitleRender={false}
        contentStyle={resetStyles}
        layout={prolayoutConfig.layout as any}
        footerRender={() => <Footer />}
        suppressSiderWhenMenuEmpty={true}
        menuFooterRender={MenuFooterRender}
        actionsRender={createActionRenderWrap({ value })}
        avatarProps={{
          src: userInfo?.avatar || prolayoutConfig.avatar.src,
          size: prolayoutConfig.avatar.size as any,
          title: userInfo?.name,
          render: (_, dom) => {
            return <AvatarDropDown dom={dom} />;
          },
        }}
        menuItemRender={(item, dom) => {
          if (item.isLink) {
            return <MenuItemOutLink path={item.path!} dom={dom} />;
          }

          return (
            <MenuItemLink
              path={item.path!}
              dom={dom}
              setPathname={setPathname}
            />
          );
        }}
      >
        {children}
        <SettingDrawerWrap theme={value.theme} setTheme={value.setTheme} />
      </ProLayout>
    </WaterMark>
  );
}
