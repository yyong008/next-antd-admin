'use client';

import { Descriptions } from 'antd';
import { ProCard } from '@ant-design/pro-components';

export const ProjectAbout = () => {
  const { pkg } = __APP_INFO__;
  const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };

  const getMajorVersion = (depName: DepType) => {
    return allDeps[depName]?.match(/\d+/)?.[0] || '';
  };

  type DepType = keyof typeof allDeps;

  const description = `
    ${pkg.name}是基于 next${getMajorVersion('next')}.x、
    Antd${getMajorVersion('antd')}.x 、
    TailwindCSS${getMajorVersion('tailwindcss')}.x 、
    prisma${getMajorVersion('prisma')}.x 、
    @prisma/client${getMajorVersion('@prisma/client')}.x 、
    TypeScript${getMajorVersion('typescript')}.x 开发，
    内置了动态路由、权限验证、菜单、数据库全栈管理工具
  `;
  return (
    <ProCard
      style={{
        backgroundColor: 'rgba(0, 0, 0,0.05)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <Descriptions title="关于">
        <Descriptions.Item>{description}</Descriptions.Item>
      </Descriptions>
    </ProCard>
  );
};
