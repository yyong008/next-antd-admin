'use client';

import { AdminLayoutUI, getLayoutData } from './components';
import { ReactNode, memo, useEffect, useState } from 'react';

function AdminLayout({ children }: { children: ReactNode }) {
  const [data, setData] = useState<any>({
    loading: true,
    menu: [],
    userInfo: {},
  });
  const getData = async () => {
    const menuData = await getLayoutData();
    setData(() => ({
      loading: false,
      menu: menuData.data.menu,
      userInfo: menuData.data.userInfo,
    }));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminLayoutUI menu={data.menu} userInfo={data.userInfo}>
      {children}
    </AdminLayoutUI>
  );
}

export const Route = memo(AdminLayout);
