import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  logoUrl: string;
}

// Function to fetch categories data
const fetchCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/category`); // Adjust the API endpoint
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Async Component to render the category page
const CategoryPage: React.FC = async () => {
  const categories = await fetchCategories();

  return (
    <header>
      <nav className="w-full h-[72px] flex justify-center bg-white max-lg:hidden">
        <div className="flex justify-between w-[90%] max-xl:w-[95%] font-bold items-center text-xl max-2xl:text-sm">
          {categories.map((category) => (
            <Link
              key={category.id} // Ensure the key is unique
              href={`/${category.name}`} // Adjust the href value if necessary
              className="flex items-center gap-3 duration-300 hover:text-orange-400"
            >
              <Image
                className="w-10 h-10 max-xl:w-7 max-xl:h-7"
                src={category.logoUrl}
                alt={category.name}
                width={40}
                height={40}
              />
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default CategoryPage;
