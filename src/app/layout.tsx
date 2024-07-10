"use client";

import '../styles/globals.css'; // Ensure global styles are imported
import { SessionProvider } from 'next-auth/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Headerbottom from '@/components/Headerbottom';
import Headertop from '@/components/Headertop';
import Banner from '@/components/Banner';
import Bb from '@/components/bb'
import Collection from '@/components/Collection';
import Sellers from "@/components/Sellers";
import Categories from '@/components/Categories';
import Brands from '@/components/Brands';
import Furniture from '@/components/Furniture';
import Rules from '@/components/Rules';
import Latestarticle from '@/components/Latestarticle';
import Chairsbanner from "@/components/Chairsbanner"
import Filter from '@/components/Filter';
import Footertop from '@/components/Footertop';





const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Headertop />
          <Header />
          <Headerbottom />
          <main>{children}</main>
          <Footertop />
          <Bb />          
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
