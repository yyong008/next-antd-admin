'use client';

import { List, Space } from 'antd';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useEffect, useRef } from 'react';

import QRCode from 'qrcode';
import QrCodeList from '@/modules/admin/demo/lib/qrcode/components/qr-code-list';

const ReactQrCode = ({ url }: any) => {
  const cRef = useRef<any>();

  const drawQrCode = async () => {
    let canvas = document.createElement('canvas');

    await QRCode.toCanvas(canvas, url, { width: 132 }).catch(err => {
      console.error(err);
    });
    cRef.current.appendChild(canvas);
  };

  useEffect(() => {
    drawQrCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={cRef}></div>;
};

export function RouteUI({ data: list }: any) {
  return (
    <PageContainer>
      <ProCard>
        <div className="qr-mount">
          <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
          >
            <QrCodeList list={list} />
            <List
              bordered
              dataSource={list}
              renderItem={(item: any) => {
                return (
                  <List.Item>
                    <List.Item.Meta title={item.name} description={item.url} />
                    <ReactQrCode url={item.url} />
                  </List.Item>
                );
              }}
            />
          </Space>
        </div>
      </ProCard>
    </PageContainer>
  );
}
