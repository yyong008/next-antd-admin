import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center relative bg-indigo-100 w-[100vw] h-[100vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
