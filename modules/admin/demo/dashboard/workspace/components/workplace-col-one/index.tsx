import { Card, Col, Row, Space } from 'antd';

import DynamicList from './dynamic-list';
import Link from 'next/link';
import WProject from './w-project';
import { colProps } from '../col';

export default function WorkplaceColOne({ data }: any) {
  return (
    <Col {...colProps}>
      <Space direction="vertical">
        <Card
          title="进行中的项目"
          extra={<Link href={'/dashboard/analysis'}>全部项目</Link>}
          bodyStyle={{ padding: 0 }}
        >
          <Row>
            {data.wProjects.map((p: any, index: number) => (
              <Card.Grid key={index}>
                <WProject p={p} />
              </Card.Grid>
            ))}
          </Row>
        </Card>
        <Card title="动态">
          <DynamicList data={data.dList} />
        </Card>
      </Space>
    </Col>
  );
}
