import './globals.css';

import { App, ConfigProvider } from 'antd';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Antd Admin',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider>
          <App>
            <AntdRegistry>{children}</AntdRegistry>
          </App>
        </ConfigProvider>
      </body>
    </html>
  );
}
