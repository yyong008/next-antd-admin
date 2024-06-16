'use client';

import { Card, Col, Descriptions, Row, Spin, Tag, message } from 'antd';
import { interval, timer } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { useEffect, useState } from 'react';

import { Cpu } from './components/cpu';
import { Disk } from './components/disk';
import { Mem } from './components/mem';
import { OsRuntime } from './components/os-runtime';
import { PageContainer } from '@ant-design/pro-components';
import { ajax } from 'rxjs/ajax';

export function RouteUI({ data: dataSource }: any) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    nodeRuntime: {},
    osRuntime: {},
    diskInfo: {},
    memInfo: {},
    cupInfo: {},
    currentLoadInfo: {},
  });

  const {
    nodeRuntime,
    osRuntime,
    diskInfo,
    memInfo,
    cupInfo,
    currentLoadInfo,
  } = data;

  useEffect(() => {
    setData(dataSource);
  }, [dataSource]);

  useEffect(() => {
    const pollingInterval = 60000;
    const inter$ = timer(0, pollingInterval)
      .pipe(startWith(0))
      .pipe(
        tap(() => {
          setLoading(true);
        }),
      )
      .pipe(switchMap(() => ajax.getJSON('/api/system/monitor/serve')))
      .subscribe({
        next(v: any) {
          setData(v.data);
          setLoading(false);
        },
        error(e) {
          console.error(e);
          message.error(e?.message);
          setLoading(false);
        },
      });

    return () => {
      inter$?.unsubscribe();
    };
  }, []);

  return (
    <Spin spinning={loading}>
      <PageContainer loading={data.cupInfo}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <OsRuntime data={{ nodeRuntime, osRuntime }} />
          </Col>
          <Col span={12}>
            <Disk data={{ diskInfo }} />
          </Col>
          <Col span={12}>
            <Cpu data={{ cupInfo, currentLoadInfo }} />
          </Col>
          <Col span={12}>
            <Mem data={{ memInfo }} />
          </Col>
        </Row>
      </PageContainer>
    </Spin>
  );
}
