import { Card, Popover, Steps } from 'antd';

import type { StepsProps } from 'antd';

const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const description = 'You can hover on the dot.';

const CardStep: React.FC = () => (
  <Card title="流程进度" style={{ height: 200 }}>
    <Steps
      current={1}
      progressDot={customDot}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
  </Card>
);

export default CardStep;
