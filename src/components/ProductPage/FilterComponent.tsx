// components/FilterComponent.tsx
import React, { ChangeEvent } from 'react';
import Slider from 'react-slider';

interface FilterProps {
  values: [number, number];
  selectedBrand: string;
  selectedColor: string;
  selectedStatus: string;
  selectedMaterials: string[];
  onPriceChange: (newValues: [number, number]) => void;
  onBrandChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onColorChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBrandClick: (brand: string) => void;
  onColorClick: (color: string) => void;
  onStatusClick: (status: string) => void;
  onMaterialClick: (material: string) => void;
  brands: string[];
  colors: string[];
  statuses: string[];
  materials: string[];
  products: ProductData[];
}

interface ProductData {
  brand?: { name: string };
  color?: string;
  material?: string;
  status?: string;
  price: number;
}

const FilterComponent: React.FC<FilterProps> = ({
  values,
  selectedBrand,
  selectedColor,
  selectedStatus,
  selectedMaterials,
  onPriceChange,
  onBrandChange,
  onColorChange,
  onBrandClick,
  onColorClick,
  onStatusClick,
  onMaterialClick,
  brands,
  colors,
  statuses,
  materials,
  products
}) => {
  return (
    <div className="flex-col gap-4 flex bg-white container w-[30%] rounded-lg px-10 py-8">
      {/* Filter By Price */}
      <p className="font-bold">Filter By Price</p>
      <Slider
        className={"slider"}
        onChange={onPriceChange}
        value={values}
        min={1}
        max={500}
      />
      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="text-xs text-gray-400">Price:</p>
          <p className="text-xs">
            {values[0]} TND - {values[1]} TND
          </p>
        </div>
        <p className="bg-orange-400 cursor-pointer rounded-full text-white text-xs px-4 py-1">
          filter
        </p>
      </div>
      {/* Filter By Brand */}
      <p className="font-bold">Filter By Brand</p>
      <input
        className="px-2 py-1 rounded-full border border-gray-300"
        type="text"
        placeholder="Find a Brand"
        value={selectedBrand}
        onChange={onBrandChange}
      />
      <div className="flex flex-col gap-2">
        {brands.map((brand) => (
          <div
            key={brand}
            className="flex w-full justify-between items-center"
            onClick={() => onBrandClick(brand)}
          >
            <p className="text-gray-500 cursor-pointer">{brand}</p>
            <div>
              <p className="ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer">
                {
                  products.filter(
                    (item) =>
                      item.brand?.name.toLowerCase() === brand.toLowerCase()
                  ).length
                }
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Filter By Color */}
      <p className="font-bold">Color</p>
      <input
        className="px-2 py-1 rounded-full border border-gray-300"
        type="text"
        placeholder="Find a Color"
        value={selectedColor}
        onChange={onColorChange}
      />
      <div className="flex flex-col gap-2">
        {colors.map((color) => (
          <div
            key={color}
            className="flex w-full justify-between items-center"
            onClick={() => onColorClick(color)}
          >
            <p className="text-gray-500 cursor-pointer">{color}</p>
            <div>
              <p className="ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer">
                {
                  products.filter(
                    (item) =>
                      item.color?.toLowerCase() === color.toLowerCase()
                  ).length
                }
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Filter By Status */}
      <p className="font-bold">Product status</p>
      <div className="flex flex-col gap-2">
        {statuses.map((status, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={selectedStatus === status}
              onChange={() => onStatusClick(status)}
            />
            <label className="text-gray-500 dark:text-gray-300">
              {status}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
