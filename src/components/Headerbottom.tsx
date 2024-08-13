import React, { useState } from "react";
import Image from "next/image";
import { TransitionLink } from "./utils/TransitionLink";

interface Category {
  id: string;
  name: string;
  logoUrl: string;
}

interface HeaderbottomProps {
  categories?: Category[]; // Make categories optional
}

const Headerbottom: React.FC<HeaderbottomProps> = ({ categories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setSelectedCategory(index);
  };

  return (
    <header>
      <nav className="w-full h-[72px] flex justify-center bg-white max-lg:hidden">
        <div className="flex justify-between w-[90%] max-xl:w-[95%] font-bold items-center text-xl max-2xl:text-sm">
          {categories.map((category, index) => (
            <TransitionLink
              aria-label="this category all products"
              key={category.id}
              href={`/${category.name}`}
            >
              <div
                className={`flex ${
                  selectedCategory === index ? "text-orange-400" : "text-black"
                } items-center gap-3 duration-300 hover:text-orange-400`}
                onClick={() => handleClick(index)}
              >
                <Image
                  className="w-10 h-10 max-xl:w-7 max-xl:h-7 "
                  src={category.logoUrl}
                  alt=""
                  width={40}
                  height={40}
                />
                {/* {<Image
                  className="w-10 h-10 max-xl:w-7 max-xl:h-7 filter"
                  style={{
                    filter:
                      "invert(1) sepia(1) saturate(500) hue-rotate(-50deg)",
                  }}
                  src={category.logoUrl}
                  alt={category.name}
                  width={40}
                  height={40}
                />}
 */}
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
