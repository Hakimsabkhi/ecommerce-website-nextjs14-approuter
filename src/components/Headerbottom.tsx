import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  logoUrl: string;
}

// Function to fetch categories data
const fetchCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch('http://localhost:3000/api/category'); // Adjust the API endpoint
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data: Category[] = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Headerbottom: React.FC = async () => {
  const categories = await fetchCategories();

  if (categories.length === 0) {
    return <div>No categories found</div>;
  }

  return (
    <header>
      <nav className="w-full h-[72px] flex justify-center bg-white max-lg:hidden">
        <div className="flex justify-between w-[90%] max-xl:w-[95%] font-bold items-center text-xl max-2xl:text-sm">
          {categories.map((category) => (
            <Link href={category.name} key={category.id} className="flex items-center gap-3 duration-300 hover:text-orange-400">
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

export default Headerbottom;
