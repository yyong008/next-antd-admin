import * as ic from '@ant-design/icons';

import { Avatar, Card, Col } from 'antd';

import { colProps } from '../col';
import { useState } from 'react';

const { SettingOutlined, EditOutlined, EllipsisOutlined } = ic;

export default function ColCardList() {
  const [data] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <>
      {data.map((_, i) => {
        return (
          <Col {...colProps} key={i}>
            <Card
              cover={false}
              hoverable
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Card.Meta
                avatar={<Avatar size="large" src="/images/react.png" />}
                title="Card title"
                description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
              />
            </Card>
          </Col>
        );
      })}
    </>
  );
}
