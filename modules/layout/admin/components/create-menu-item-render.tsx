import { MenuItemLink, MenuItemOutLink } from '@/components/common';

export const createMenuItemRender = (setPathname: any) => {
  // eslint-disable-next-line react/display-name
  return (item: any, dom: any) => {
    if (item.isLink) {
      return <MenuItemOutLink path={item.path!} dom={dom} />;
    }

    return (
      <MenuItemLink path={item.path!} dom={dom} setPathname={setPathname} />
    );
  };
};
