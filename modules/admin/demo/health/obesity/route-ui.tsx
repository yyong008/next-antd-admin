'use client';

import { Alert, Card, List, Space } from 'antd';
import { PageContainer, ProCard } from '@ant-design/pro-components';

import { antdGrid } from '@/config/antd-grid';

export function RouteUI({ data, op_data }: any) {
  return (
    <PageContainer>
      <ProCard>
        <Space direction="vertical">
          <Alert
            description="作为程序员，长时间进行电脑工作和缺乏身体活动可能增加患肥胖症的风险。以下是一些与肥胖相关的常见问题："
            type="warning"
            showIcon
          />
          <List
            grid={antdGrid}
            dataSource={data}
            renderItem={(item: any) => (
              <List.Item>
                <Card title={item.title} style={{ minHeight: '200px' }}>
                  {item.content}
                </Card>
              </List.Item>
            )}
          />
          <Alert
            description="为了预防和管理肥胖问题，程序员可以采取以下措施："
            type="warning"
            showIcon
          />
          <List
            grid={antdGrid}
            dataSource={op_data}
            renderItem={(item: any) => (
              <List.Item>
                <Card title={false} style={{ minHeight: '130px' }}>
                  {item.content}
                </Card>
              </List.Item>
            )}
          />
        </Space>
      </ProCard>
    </PageContainer>
  );
}
