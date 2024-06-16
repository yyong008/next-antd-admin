import { Button, Form, Popconfirm } from 'antd';

import { DeleteOutlined } from '@ant-design/icons';

type DeleteItProps = {
  fetcher: any;
  record: any;
  title?: string;
};

export function BlogCategoryDeleteIt({
  fetcher,
  record,
  title,
}: DeleteItProps) {
  return (
    <Form>
      <Popconfirm title={title || '确定要删除吗?'} onConfirm={() => {}}>
        <Button type="link" danger icon={<DeleteOutlined />} />
      </Popconfirm>
    </Form>
  );
}
