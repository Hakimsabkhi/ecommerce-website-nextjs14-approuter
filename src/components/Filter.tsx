"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slider";
import { useParams } from "next/navigation";

interface ProductData {
  _id: string;
  name: string;
  description: string;
  ref: string;
  price: number;
  imageUrl?: string;
  brand?: Brand; // Make brand optional
  stock: number;
  discount?: number;
  color?: string;
  material?: string;
  status?: string;
}

interface Brand {
  _id: string;
  name: string;
}

const Filter: React.FC = () => {
  const params = useParams<{ product?: string }>();
  const product = params?.product; // Safe access

  const [products, setProducts] = useState<ProductData[]>([]);
  const [values, setValues] = useState<[number, number]>([270, 630]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchCategory = async () => {
      if (product) {
        try {
          const response = await fetch(`/api/search?category=${product}`);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };
    fetchCategory();
  }, [product]);

  const handlePriceChange = (newValues: [number, number]) => {
    setValues(newValues);
  };

  const handleBrandChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedBrand(e.target.value);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };

  const handleBrandClick = (brand: string) => {
    setSelectedBrand(brand);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleStatusClick = (status: string) => {
    setSelectedStatus((prevStatus) => (prevStatus === status ? "" : status));
  };

  const handleMaterialClick = (material: string) => {
    setSelectedMaterials((prevMaterials) =>
      prevMaterials.includes(material)
        ? prevMaterials.filter((m) => m !== material)
        : [...prevMaterials, material]
    );
  };

  const filteredItems = products.filter((item) => {
    const itemPrice = item.price;
    const matchesPrice = itemPrice >= values[0] && itemPrice <= values[1];
    const matchesBrand = selectedBrand
      ? item.brand?.name.toLowerCase() === selectedBrand.toLowerCase()
      : true;
    const matchesColor = selectedColor
      ? item.color?.toLowerCase() === selectedColor.toLowerCase()
      : true;
    const matchesMaterial = selectedMaterials.length > 0
      ? selectedMaterials.includes(item.material || "")
      : true;
    const matchesStatus = selectedStatus
      ? item.status?.toLowerCase() === selectedStatus.toLowerCase()
      : true;

    return matchesPrice && matchesBrand && matchesColor && matchesMaterial && matchesStatus;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex py-8 desktop max-md:w-[95%] justify-center gap-8 max-md:items-center max-md:flex-col">
      <div className="flex-col flex gap-4 max-md:flex-col max-md:justify-center max-md:items-center">
        <div className="flex-col gap-4 flex bg-white container w-full rounded-lg px-10 py-8">
          <p className="font-bold">Filter By Price</p>
          <Slider
            className="slider"
            onChange={handlePriceChange}
            value={values}
            min={270}
            max={630}
          />
          <div className="flex justify-between">
            <div className="flex items-center">
              <p className="text-xs text-gray-400">Price:</p>
              <p className="text-xs">
                {values[0]} TND - {values[1]} TND
              </p>
            </div>
            <p className="bg-orange-400 cursor-pointer rounded-full text-white text-xs px-4 py-1">
              Filter
            </p>
          </div>
          <div>
            <p className="font-bold">Filter By Brand</p>
          </div>
          <div className="w-full">
            <input
              className="px-2 py-1 rounded-full border border-gray-300"
              type="text"
              placeholder="Find a Brand"
              value={selectedBrand}
              onChange={handleBrandChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            {["Hay", "Vitra", "Poliform"].map((brand) => (
              <div
                key={brand}
                className="flex w-full justify-between items-center"
                onClick={() => handleBrandClick(brand)}
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
          <div>
            <p className="font-bold">Color</p>
          </div>
          <div className="w-full">
            <input
              className="px-2 py-1 rounded-full border border-gray-300"
              type="text"
              placeholder="Find a Color"
              value={selectedColor}
              onChange={handleColorChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            {["Bone", "Dark Gray", "Gray", "Jet", "White"].map((color) => (
              <div
                key={color}
                className="flex w-full justify-between items-center"
                onClick={() => handleColorClick(color)}
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
          <div>
            <p className="font-bold">Materials</p>
          </div>
          {["Fabric", "Leather", "Metal", "Plastic", "Rattan", "Wood"].map(
            (material) => (
              <div key={material} onClick={() => handleMaterialClick(material)}>
                <p className="text-gray-500 cursor-pointer">{material}</p>
              </div>
            )
          )}
          <div>
            <p className="font-bold">Status</p>
            <div className="flex gap-2">
              {["New", "Featured", "Best Seller", "Top Sale"].map((status) => (
                <div
                  key={status}
                  onClick={() => handleStatusClick(status)}
                  className={`cursor-pointer ${
                    selectedStatus === status
                      ? "bg-gray-200 text-black"
                      : "bg-white text-gray-500"
                  }`}
                >
                  {status}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex w-full max-md:justify-center gap-6">
        <p className="font-bold">Products</p>
        <div className="grid grid-cols-3 gap-4">
          {currentItems.map((item) => (
            <div
              key={item._id}
              className="border bg-white border-gray-300 p-4 rounded-lg"
            >
              <div className="relative h-48">
                <Image
                  className="object-cover"
                  src={item.imageUrl || "/default-image.png"}
                  alt={item.name}
                  layout="fill"
                />
                <div className="absolute top-0 right-0 p-2">
             
                </div>
              </div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold">{item.price} TND</span>
                {item.discount && (
                  <span className="text-red-500 line-through">
                    {item.price + (item.price * (item.discount / 100))} TND
                  </span>
                )}
              </div>
              <Link href={`/${product}/${item._id}`}>
                <div className="text-blue-500">View Details</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            className={`py-2 px-4 ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            
          </button>
          <div className="flex gap-2">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                className={`py-2 px-4 ${
                  currentPage === page + 1 ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handlePageChange(page + 1)}
              >
                {page + 1}
              </button>
            ))}
          </div>
          <button
            className={`py-2 px-4 ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
       
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
