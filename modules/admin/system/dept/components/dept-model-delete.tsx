import * as _icon from '@ant-design/icons';

import { Button, Form, Popconfirm } from 'antd';

// import { actionDeptCreate } from '../actions';

const { DeleteOutlined } = _icon;

type DeleteItProps = {
  fetcher: any;
  record: any;
  title: string;
};

export function DeleteIt({ fetcher, record, title }: DeleteItProps) {
  return (
    <Form>
      <Popconfirm
        title={title || '确定要删除吗?'}
        onConfirm={async () => {
          // await actionDeptCreate(record.id);
        }}
      >
        <Button type="link" danger icon={<DeleteOutlined />} />
      </Popconfirm>
    </Form>
  );
}
