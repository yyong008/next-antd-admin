import { Route } from '@/modules/layout/admin';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center relative bg-indigo-100 w-[100vw] h-[100vh]">
      <Route>{children}</Route>
    </div>
  );
}
