"use client";
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
//import { chair, table, sofa, armchair, bed, storage, textile, lighting, toy, decor } from "../../public/image";
import { TransitionLink } from './utils/TransitionLink';
import axios from 'axios';
interface Category {
    id: string;
    name: string;
    logoUrl: string;
  }
  
const Headerbottom: React.FC = () => {
    
        const [categories, setCategories] = useState<Category[]>([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<string | null>(null);
      
        const getCategory = async () => {
          try {
            const response = await axios.get('/api/category');
            setCategories(response.data);
          } catch (err: any) {
            setError(`[Category_GET] ${err.message}`);
          } finally {
            setLoading(false);
          }
        };
      
        useEffect(() => {
          getCategory();
        }, []);
      
        if (loading) {
          return <div>Loading...</div>;
        }
      
        if (error) {
          return <div>Error: {error}</div>;
        }
      
        return (
          <header>
            <nav className='w-full py-4 flex justify-center bg-white max-lg:hidden'>
              <div className="flex justify-between w-[90%] max-xl:w-[95%] font-bold items-center text-xl max-2xl:text-sm">
                {categories.map((category) => (
                  <TransitionLink key={category.id} href={`/${category.name.toLowerCase()}`}>
                    <div className="flex items-center gap-3 duration-300 hover:text-orange-400">
                      <Image className='w-10 h-10 max-xl:w-7 max-xl:h-7' src={category.logoUrl} alt={category.name} width={40} height={40} />
                      <span>{category.name}</span>
                    </div>
                  </TransitionLink>
                ))}
              </div>
            </nav>
          </header>
        );
      };
      
      export default Headerbottom;