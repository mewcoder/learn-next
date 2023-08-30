import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Static'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      {children}
    </main>
  );
}
