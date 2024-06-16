import prisma from '@/utils/prisma';

// 构建菜单树的函数
function buildMenuTree(
  menuData: any[],
  parentId = null,
  t: (v: string) => void,
  lang: string,
) {
  const menuTree: any[] = [];

  menuData.forEach(menu => {
    menu.name = t(menu.name);
    menu.key = t(menu.name);
    menu.hideInMenu = !!menu.isShow;

    if (menu.type === 3) return;

    if (menu.parent_menu_id === parentId) {
      const subMenus = buildMenuTree(menuData, menu.id, t, lang);
      if (subMenus.length) {
        menu.children = subMenus;
      }
      menuTree.push(menu);
    }
  });
  return menuTree;
}

export async function getTypeNotPermMenu(t: () => void, lang: string) {
  try {
    const menuData = await prisma.menu.findMany({
      where: {
        type: {
          not: 3,
        },
      },
    });

    const menuTree = buildMenuTree(menuData, null, t, lang);
    return menuTree;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getFlatMenuByUserId(
  userId: number,
  t: (v: string) => string,
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        UserRole: {
          include: {
            roles: {
              include: {
                MenuRole: {
                  include: {
                    menus: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    // 指定角色的菜单
    const flatRoleMenuData =
      user?.UserRole?.map(({ roles }) => roles)
        ?.map(role => role.MenuRole)
        ?.reduce((p, c) => p.concat(c), [])
        ?.map(m => m.menus)
        .map(m => {
          m.name = t(m.name);
          return m;
        })
        .filter(item => item.type !== 3) ?? [];
    return [...(new Set(flatRoleMenuData) as any)];
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getUserInfoById = (id: number) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      email: true,
      avatar: true,
      name: true,
      nickname: true,
      lang: true,
      theme: true,
      phone: true,
      remark: true,
      status: true,
      createdAt: true,
      updatedAt: true,
      department: {
        select: {
          name: true,
        },
      },
    },
  });
};
