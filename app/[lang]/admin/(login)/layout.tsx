export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center relative bg-indigo-100 w-[100vw] h-[100vh]">
      {children}
    </div>
  );
}
