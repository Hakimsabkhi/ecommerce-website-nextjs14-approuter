import React, { useEffect, useState } from 'react';
import Header from './Header';
import Headerbottom from './Headerbottom';
import Headertop from './Headertop';
import Bb from './bb';
import axios from 'axios';

interface MainLayoutProps {
  children: React.ReactNode;
}

interface Category {
  id: string;
  name: string;
  logoUrl: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/category');
        setCategories(response.data); // Ensure this is an array of Category objects
      } catch (error) {
        setError('Failed to fetch categories');
        console.error('Failed to fetch categories', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <Headertop />
      {error ? <div>{error}</div> :  <Header categories={categories} />}
      {error ? <div>{error}</div> : <Headerbottom categories={categories} />}
      <main>{children}</main>      
      <Bb />
    </div>
  );
};

export default MainLayout;
