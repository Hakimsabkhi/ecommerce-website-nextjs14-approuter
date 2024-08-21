'use client';

import React from 'react';
import Image from 'next/image';

interface Category {
  _id: string;
  name: string;
  logoUrl?: string;
}

interface HeaderbottomProps {
  categories: Category[];
}

const Headerbottom: React.FC<HeaderbottomProps> = ({ categories }) => {
  if (categories.length === 0) {
    return <div>Aucune catégorie trouvée</div>;
  }

  return (
    <header>
      <nav className="w-full h-[72px] flex justify-center bg-white max-lg:hidden">
        <div className="flex justify-between w-[90%] max-xl:w-[95%] font-bold items-center text-xl max-2xl:text-sm">
          {categories.map((category) => (
            <a href={`/${category.name}`} key={category._id} className="flex items-center gap-3 duration-300 hover:text-orange-400">
              {category.logoUrl && (
                <Image
                  src={category.logoUrl}
                  alt={category.name}
                  width={32} // Set the desired width for the image
                  height={32} // Set the desired height for the image
                  className="rounded-full object-cover"
                />
              )}
              <span>{category.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Headerbottom;