// components/RootLayoutClient.tsx
'use client';
import { usePathname } from 'next/navigation';
import AuthLayout from './AuthLayout';
import MainLayout from './MainLayout';
import { SessionProvider } from 'next-auth/react';

const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname() ?? '';
  const authPages = ['/signin', '/signup'];

  const isAuthPage = authPages.includes(pathname);

  return (
    <SessionProvider>
      {isAuthPage ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </SessionProvider>
  );
};

export default RootLayoutClient;
