// app/layout.tsx
'use client';
import { usePathname } from 'next/navigation'; // Correct hook for App Router
import { useEffect, useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import MainLayout from '../components/MainLayout';
import { SessionProvider } from 'next-auth/react';

const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Use usePathname to get current path
  const authPages = ['/signin', '/signup'];
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isAuthPage = authPages.includes(pathname ?? '');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/category');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (err) {
        setError('Failed to fetch categories');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>; // Optionally handle loading state
  if (error) return <div>{error}</div>; // Optionally handle error state

  return (
    <SessionProvider>
      {isAuthPage ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <MainLayout categories={categories}>{children}</MainLayout>
      )}
    </SessionProvider>
  );
};

export default RootLayoutClient;

interface Category {
  id: string;
  name: string;
  logoUrl: string;
}
