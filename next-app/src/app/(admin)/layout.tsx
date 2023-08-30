import StyledComponentsRegistry from '@/lib/AntdRegistry';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
  description: ''
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        {children}
      </main>
    </StyledComponentsRegistry>
  );
}
