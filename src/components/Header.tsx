import { useEffect, useState, useRef } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { SlBag } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import Dropdown from "../components/Dropdown";
import CartModal from "./CartModal";

import { TransitionLink } from "./utils/TransitionLink";
import { luxehome } from "@/assets/image";




const Header: React.FC = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartmodalRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();



  useEffect(() => {
    // Handle clicks outside of cart modal
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartmodalRef.current &&
        !cartmodalRef.current.contains(event.target as Node)
      ) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCartModal = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="w-full max-lg:fixed max-lg:z-10  h-[109px] bg-[#15335E] justify-center flex">
      <div className="flex w-[90%] max-xl:w-[95%] max-lg:hidden justify-between gap-14 items-center max-lg:bg-white">
        <TransitionLink href="/" aria-label="home">
          <div className="mb-1">
            <Image
              width={250}
              height={250}
              className="h-auto lg:w-[400px] xl:w-[300px] rounded-[5px] max-lg:hidden"
              src={luxehome}
              alt=""
              style={{ objectFit: "contain" }}
            />
          </div>
        </TransitionLink>
        <div className="relative w-[800px]">
          <input
            className="w-full h-12 px-4 py-2 rounded-full max-lg:hidden border border-gray-300"
            type="text"
            placeholder="Search for products"
          />
          <button
            className="absolute h-full px-4 group right-0 top-1/2 -translate-y-1/2 rounded-r-full text-[#15335D]"
            aria-label="Search"
          >
            <CiSearch className="w-8 h-8 transform duration-500 group-hover:w-10 group-hover:h-10" />
          </button>
        </div>
        {session?.user?(
       <Dropdown
            
              
                    username= {session.user?.name ?? ""}
                    role= {session.user?.role ?? ""}
          
                
           
          /> 
        ):(
          <div className="flex items-center gap-2 w-[269px]">
            <Link href="/signin" aria-label="signin page">
              <button
                aria-label="signin"
                className="flex items-center space-x-2 text-white bg-primary hover:bg-white hover:text-primary font-bold rounded-md px-8 py-2"
              >
                <span>LOGIN</span>
              </button>
            </Link>
            <Link href="/signup" aria-label="signup page">
              <button
                aria-label="register"
                className="flex items-center space-x-2 text-primary bg-white hover:text-white hover:bg-primary font-bold rounded-md px-8 py-2"
              >
                <span>REGISTER</span>
              </button>
            </Link>
          </div>
        )}
        <div className="flex items-center gap-4 w-[133px] text-white">
          <FiHeart size={25} />
          <div className="relative" ref={cartmodalRef}>
            <div className="relative cursor-pointer" onClick={toggleCartModal}>
              <SlBag size={25} />
              <span className="w-4 flex justify-center h-4 items-center text-xs rounded-full absolute -top-1 -right-1 text-white bg-primary">
                <p>0</p>
              </span>
            </div>
            {isCartOpen && <CartModal />}
          </div>
          <span className="text-xl">$0.00</span>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
