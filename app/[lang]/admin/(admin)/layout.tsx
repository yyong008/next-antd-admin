import { Inter } from 'next/font/google';
import { Route } from '@/modules/layout/admin';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center relative bg-indigo-100 w-[100vw] h-[100vh]">
          <Route>{children}</Route>
        </div>
      </body>
    </html>
  );
}
