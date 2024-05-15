export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed top-0 left-0 bg-white w-full h-svh">{children}</div>
  );
}
