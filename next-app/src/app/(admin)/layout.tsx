import StyledComponentsRegistry from "@/lib/AntdRegistry";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
  description: '',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
