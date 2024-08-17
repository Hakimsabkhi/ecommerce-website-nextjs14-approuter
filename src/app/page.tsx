import Head from 'next/head';
import Image from 'next/image';
import { Vector, cart, icon, pic1, logo, flag, phone, expert, person, chair, bed, textile, sofa, toy, armchair, table, storage, lighting, decor } from "@/assets/image";
import Banner from '@/components/Banner';
import Categories from '@/components/Categories';
import Sellers from '@/components/Sellers';
import Brands from '@/components/Brands';
import Collection from '@/components/Collection';
import Furniture from '@/components/Furniture';
import Rules from '@/components/Rules';
import Latestarticle from '@/components/Latestarticle';
import './globals.css';
import Headerbottom from '@/components/Headerbottom';


export default function HomePage() {
  return (
    <>
  
      <Banner />
      <Categories />
      <Sellers />
      <Brands />
      <Collection />
      <Furniture />
      <Rules />
      <Latestarticle />
    </>

  );
}
