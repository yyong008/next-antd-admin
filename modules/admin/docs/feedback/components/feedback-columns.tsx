import { FormatTime } from '@/components/common';
import { Image } from 'antd';

export const feedbackColumnsCreate = () => [
  {
    dataIndex: 'id',
    title: '反馈编号',
  },
  {
    dataIndex: 'content',
    title: '反馈内容',
  },
  {
    dataIndex: 'url',
    title: '反馈图片',
    render(_: any, record: any) {
      return (
        <div className="w-[100px]">
          <Image src={record.url} alt=""></Image>
        </div>
      );
    },
  },
  {
    dataIndex: 'createdAt',
    title: '反馈时间',
    render(_: any, record: any) {
      return <FormatTime timeStr={record.createdAt} />;
    },
  },
];
