import { useParams, usePathname } from 'next/navigation';

import Link from 'next/link';
import { useCallback } from 'react';

export function NavLink({ href, children }: any) {
  const { lang } = useParams();
  const cPathname = usePathname();
  console.log(`/${lang}/${href}`, cPathname);

  const linkClass = useCallback(
    (pathname: string) => {
      return pathname === cPathname
        ? 'mr-[20px] bg-blue-300 px-[10px] py-[10px] rounded-[10px] hover:text-gray-900 hover:shadow-xl  border-gray-50 text-black '
        : 'mr-[20px] hover:bg-blue-300 px-[10px] py-[10px] rounded-[10px] hover:text-gray-900 hover:shadow-xl  border-gray-50 text-black';
    },
    [cPathname],
  );
  if (href === '/') {
    return (
      <Link href={`/${lang}/`} className={`link ${linkClass(`/${lang}`)}`}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={`/${lang}/${href}`}
      className={`link ${linkClass(`/${lang}${href}`)}`}
    >
      {children}
    </Link>
  );
}
