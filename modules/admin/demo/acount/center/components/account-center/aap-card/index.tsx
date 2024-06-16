// types

// components:vendor
import * as ic from '@ant-design/icons';

import { Avatar, Card, Col, Row, Tag, Tooltip } from 'antd';
import { ProCard, ProList } from '@ant-design/pro-components';
// core
import React, { useState } from 'react';
import { colPropsApp, colPropsProject } from '../col';

const {
  EditOutlined,
  EllipsisOutlined,
  LikeOutlined,
  MessageOutlined,
  SettingOutlined,
  StarOutlined,
  UserOutlined,
} = ic;

const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <span style={{ color: 'blue' }}>
    {React.createElement(icon, {
      style: { marginInlineEnd: 8, color: 'blue' },
    })}
    {text}
  </span>
);

type APPCardProps = {
  dataSource: any;
  personalDataSource: any;
  projectsDataSource: any;
};

export const AAPCard: React.FC<APPCardProps> = ({
  dataSource,
  personalDataSource,
  projectsDataSource,
}) => {
  const [activeTabKey2, setActiveTabKey2] = useState<string>('article');
  const tabList = [
    {
      key: 'article',
      tab: `文章（${dataSource.length}）`,
    },
    {
      key: 'app',
      tab: `应用（${personalDataSource.length}）`,
    },
    {
      key: 'project',
      tab: `项目（${projectsDataSource.length}）`,
    },
  ];

  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  const contentList: Record<string, React.ReactNode> = {
    article: (
      <ProList<{ title: string }>
        itemLayout="vertical"
        rowKey="id"
        dataSource={dataSource}
        metas={{
          title: {},
          description: {
            render: () => (
              <>
                <Tag color="magenta">麻辣火锅</Tag>
                <Tag color="volcano">剁椒鱼头</Tag>
                <Tag color="cyan">铁板烧</Tag>
              </>
            ),
          },
          actions: {
            render: () => [
              <IconText icon={StarOutlined} text="156" key="star-o" />,
              <IconText icon={LikeOutlined} text="156" key="like-o" />,
              <IconText icon={MessageOutlined} text="2" key="message" />,
            ],
          },
          extra: {
            render: () => <img width={272} alt="logo" src="/images/bear.png" />,
          },
          content: {
            render: () => {
              return (
                <div style={{ margin: '0px -32px 0px -32px' }}>
                  专注于 Web 标准和现代 Web 应用程序
                  UX，您只需构建更好的网站即可 Next 是一个全栈 Web
                  框架，可让您专注于用户界面并重新了解 Web
                  标准，以提供快速、流畅和弹性的用户体验。人们会喜欢使用你的东西。
                </div>
              );
            },
          },
        }}
      />
    ),
    app: (
      <ProCard>
        <Row gutter={[18, 18]}>
          {personalDataSource.map((_: any, index: number) => {
            return (
              <Col key={index} {...colPropsApp}>
                <Card
                  hoverable
                  cover={<img alt="example" src="/images/bear.png" />}
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Card.Meta
                    avatar={<Avatar src="/images/user.jpg" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
      </ProCard>
    ),
    project: (
      <ProCard>
        <Row gutter={[10, 10]}>
          {projectsDataSource.map((_: any, idx: number) => (
            <Col {...colPropsProject} key={idx}>
              <Card hoverable cover={<img alt="" src="/images/app.png" />}>
                <Card.Meta title="卡片标题" description="卡片内容" />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '10px',
                  }}
                >
                  <div>2 小时前</div>
                  <div>
                    <Avatar.Group>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{ backgroundColor: '#6899d0' }}
                          icon={<UserOutlined />}
                        />
                      </Tooltip>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{ backgroundColor: '#865e26' }}
                          icon={<UserOutlined />}
                        />
                      </Tooltip>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{ backgroundColor: '#87d068' }}
                          icon={<UserOutlined />}
                        />
                      </Tooltip>
                    </Avatar.Group>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        ,
      </ProCard>
    ),
  };

  return (
    <Card
      style={{ width: '100%' }}
      bodyStyle={{ padding: 0 }}
      tabList={tabList}
      activeTabKey={activeTabKey2}
      tabBarExtraContent={false}
      onTabChange={onTab2Change}
    >
      {contentList[activeTabKey2]}
    </Card>
  );
};
