'use client';

import {
  MenuFooterRender,
  ProLayoutDy,
  SettingDrawerWrap,
  WaterMarkDy,
  createActionRenderWrap,
  createAvatarProps,
  createMenuItemRender,
  createTokens,
} from './components';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useLocals } from '@/hooks';
import { useParams, usePathname } from 'next/navigation';

import { Footer } from '@/components/common';
import { SettingContext } from '@/context';
import { createProLayoutRoute } from '@/app/utils';
import { prolayoutConfig } from '@/config/prolayout';
import { resetStyles } from './styles';
import { setUserInfo } from '@/libs/features/user-info';

export function LayoutUI({ menu, userInfo, children }: any) {
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    dispatch(setUserInfo(userInfo));
  }, [dispatch, userInfo]);

  return (
    <WaterMarkDy content="Next Antd Admin" style={{ width: '100%' }}>
      <ProLayoutDy
        location={{
          pathname: pathname || _pathname,
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
        avatarProps={createAvatarProps(userInfo)}
        menuItemRender={createMenuItemRender(setPathname)}
      >
        {children}
        <SettingDrawerWrap theme={value.theme} setTheme={value.setTheme} />
      </ProLayoutDy>
    </WaterMarkDy>
  );
}

export const AdminLayoutUI = memo(LayoutUI);
