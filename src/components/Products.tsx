"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useParams } from "next/navigation";
import "../app/globals.css";
import FilterComponent from "./ProductPage/FilterComponent";
import Pagination from "./ProductPage/Pagination";
import ProductList from "./ProductPage/ProductList";

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

const Products: React.FC = () => {
  const params = useParams<{ product?: string }>();
  const product = params?.product; // Safe access
  const [products, setProducts] = useState<ProductData[]>([]);
  const [values, setValues] = useState<[number, number]>([1, 500]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      if (product) {
        try {
          const response = await fetch(`/api/search?category=${product}`);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
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
    const matchesMaterial =
      selectedMaterials.length > 0
        ? selectedMaterials.includes(item.material || "")
        : true;
    const matchesStatus = selectedStatus
      ? item.status?.toLowerCase() === selectedStatus.toLowerCase()
      : true;

    return (
      matchesPrice &&
      matchesBrand &&
      matchesColor &&
      matchesMaterial &&
      matchesStatus
    );
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

  if (loading) {
    return (
      /* loading start */
      <div></div>
      /* loading end */
    );
  }

  return (
    <div className="flex py-8 desktop max-md:w-[95%] justify-center gap-8 max-md:items-center max-md:flex-col">
      {/* filter */}
      <FilterComponent
        values={values}
        selectedBrand={selectedBrand}
        selectedColor={selectedColor}
        selectedStatus={selectedStatus}
        selectedMaterials={selectedMaterials}
        onPriceChange={handlePriceChange}
        onBrandChange={handleBrandChange}
        onColorChange={handleColorChange}
        onBrandClick={handleBrandClick}
        onColorClick={handleColorClick}
        onStatusClick={handleStatusClick}
        onMaterialClick={handleMaterialClick}
        brands={["Hay", "vitra", "Poliform"]}
        colors={["Bone", "Dark Gray", "Gray", "Jet", "White"]}
        statuses={["On sale", "In stock", "On backorder"]}
        materials={[]} // Add materials if needed
        products={products}
      />
      <div className="flex-col flex w-full gap-5">
        {/* products */}
        <ProductList products={currentItems} />
        {/* pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPagechange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
