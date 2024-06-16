'use client';

import { PageContainer, ProCard } from '@ant-design/pro-components';

import { BlogEditForm } from './components';
import { Form } from 'antd';
import { useParams } from 'next/navigation';

export function RouteUI({ data }: { data: any }) {
  const [form] = Form.useForm();
  const { id } = useParams();

  return (
    <PageContainer>
      <ProCard>
        <BlogEditForm
          data={data}
          onFinish={async (v: any) => {
            const vals = v;
            if (id) vals.id = Number(id);

            form.resetFields();
            return true;
          }}
        />
      </ProCard>
    </PageContainer>
  );
}
