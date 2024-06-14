'use client';

import {
  ProjectAbout,
  ProjectDevelopmentDep,
  ProjectInfo,
  ProjectProductionDep,
} from '.';

import { ProConfigProvider } from '@ant-design/pro-components';
import { Space } from 'antd';

export function RouteUI({ publicRuntimeConfig }: any) {
  return (
    <div className="flex flex-col py-[140px] w-[60vw] min-h-[80vh]">
      <ProConfigProvider>
        <Space direction="vertical">
          <ProjectAbout />
          <ProjectInfo />
          <ProjectProductionDep />
          <ProjectDevelopmentDep />
        </Space>
      </ProConfigProvider>
    </div>
  );
}
