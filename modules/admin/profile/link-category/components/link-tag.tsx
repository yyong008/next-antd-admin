import Link from 'next/link';
import { Tag } from 'antd';
import { useParams } from 'next/navigation';

export function LinkTag({ record }: any) {
  const { lang } = useParams();
  return (
    <Link href={`/${lang}/admin/profile/link/category/${record?.id}`}>
      <Tag color="blue">{record?.name}</Tag>
    </Link>
  );
}
