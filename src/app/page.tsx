import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Sellers from "@/components/Sellers";
import Brands from "@/components/Brands";
import Collection from "@/components/Collection";
import Furniture from "@/components/Furniture";
import Rules from "@/components/Rules";
import Latestarticle from "@/components/Latestarticle";
import "./globals.css";


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
