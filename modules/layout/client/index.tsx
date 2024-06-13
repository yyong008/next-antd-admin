'use client';

import { useParams, usePathname } from 'next/navigation';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useCallback } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { lang = 'zh-CN' } = useParams();
  const cPathname = usePathname();

  const linkClass = useCallback(
    (pathname: string) => {
      return pathname === cPathname
        ? 'mr-[20px] bg-yellow-300 px-[10px] py-[10px] rounded-[10px] hover:text-gray-900 hover:shadow-xl  border-gray-50 text-black '
        : 'mr-[20px] hover:bg-yellow-300 px-[10px] py-[10px] rounded-[10px] hover:text-gray-900 hover:shadow-xl  border-gray-50 text-black';
    },
    [cPathname],
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center relative bg-indigo-100 min-h-[100vh]">
          <div
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/20574181/pexels-photo-20574181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            }}
            className="absolute flex justify-between items-center mt-[20px] mx-0 my-auto w-[70vw] px-[100px] h-[60px] bg-indigo-300 rounded-[20px] shadow-indigo-500 shadow-lg"
          >
            <div>
              <Link
                className={`link ${linkClass(`/${lang}`)}`}
                href={`/${lang}/`}
              >
                Home
              </Link>
              <Link
                href={`/${lang}/news`}
                className={`link ${linkClass(`/${lang}/news`)}`}
              >
                News
              </Link>
              <Link
                href={`/${lang}/blog`}
                className={`link ${linkClass(`/${lang}/blog`)}`}
              >
                Blog
              </Link>
              <Link
                href={`/${lang}/about`}
                className={`link ${linkClass(`/${lang}/about`)}`}
              >
                About
              </Link>
            </div>
            <div>
              <Link
                href={`/${lang}/admin/login`}
                className={`link ${linkClass(`/${lang}/admin/login`)}`}
              >
                Login
              </Link>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
