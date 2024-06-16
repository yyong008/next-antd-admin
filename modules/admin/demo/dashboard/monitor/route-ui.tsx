'use client';

import {
  MonitorRowOne,
  MonitorRowThree,
  MonitorRowTwo,
} from '@/modules/admin/demo/dashboard/monitor/components';
import { useEffect, useState } from 'react';

import { PageContainer } from '@ant-design/pro-components';
import { Space } from 'antd';

export function RouteUI({ activeMonitorData, gaugeData }: any) {
  const [gData, setGData] = useState<any>();

  useEffect(() => {
    fetch('/api/geojson').then(res => {
      if (res.ok) {
        res.json().then(data => {
          console.log(data);
          setGData(data);
        });
      }
    });
  }, []);
  return (
    <PageContainer breadcrumb={{}}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <MonitorRowOne
          geoJson={gData}
          activeMonitorData={activeMonitorData}
          gaugeData={gaugeData}
        />
        <MonitorRowTwo />
        <MonitorRowThree />
      </Space>
    </PageContainer>
  );
}
