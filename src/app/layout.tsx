"use client";

import './globals.css'; // Ensure global styles are imported
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import MainLayout from '@/components/MainLayout';
import AuthLayout from '@/components/AuthLayout';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname() ?? '';
  const authPages = ['/signin', '/signup'];

  const isAuthPage = authPages.includes(pathname);

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {isAuthPage ? (
            <AuthLayout>{children}</AuthLayout>
          ) : (
            <MainLayout>{children}</MainLayout>
          )}
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
