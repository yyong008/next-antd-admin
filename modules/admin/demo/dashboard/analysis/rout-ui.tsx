'use client';

import './styles/analysis.css';

import {
  AnalysisRowFour,
  AnalysisRowOne,
  AnalysisRowThree,
  AnalysisRowTwo,
} from './components';

import { PageContainer } from '@ant-design/pro-components';
import { Space } from 'antd';

export function RouteUI({ data }: any) {
  const {
    one: { salesData, activeData, visitCountData, paymentData },
    two: { monthSales, monthVisit, monthPartSaleData },
    three: { searchCountData, searchAvageCountData, dataSource, pies },
    four,
  } = data;

  return (
    <PageContainer breadcrumb={{}}>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <AnalysisRowOne
          salesData={salesData}
          visitCountData={visitCountData}
          paymentData={paymentData}
          activeData={activeData}
        />
        <AnalysisRowTwo
          monthSales={monthSales}
          monthVisit={monthVisit}
          monthPartSaleData={monthPartSaleData}
        />
        <AnalysisRowThree
          searchCountData={searchCountData}
          searchAvageCountData={searchAvageCountData}
          search={visitCountData}
          searchAvage={visitCountData}
          dataSource={dataSource}
          pies={pies}
        />
        <AnalysisRowFour {...four} />
      </Space>
    </PageContainer>
  );
}
