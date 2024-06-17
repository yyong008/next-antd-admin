import { AdminLayout } from '@/modules/layout/admin';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center relativew-[100vw] h-[100vh]">
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
}
