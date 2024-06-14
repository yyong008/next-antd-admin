'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export function BlogItem(props: any) {
  const { data } = props;
  const { lang } = useParams();
  return (
    <div>
      <Link
        className="hover:text-yellow-500"
        href={`/${lang}/blog/${props.data.id}`}
      >
        <h1 className="flex text-[16px] my-[10px] before:block before:content-['·'] before:text-yellow-600 before:mr-[4px]">
          {data.title}
        </h1>
      </Link>
    </div>
  );
}
