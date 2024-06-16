import Link from 'next/link';
import { Tag } from 'antd';

export function TagLink({ lang, record }: any) {
  return (
    <Link href={`/${lang}/admin/system/dict-item/${record.id}`}>
      <Tag color="yellow">{record.code}</Tag>
    </Link>
  );
}
