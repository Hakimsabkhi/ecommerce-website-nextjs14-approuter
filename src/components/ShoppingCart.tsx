"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoCheckboxOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { clearCart, removeItem, updateItemQuantity } from "../store/cartSlice";
import Link from "next/link";

// Define the shape of the cart item
interface CartItem {
  _id: string;
  name: string;
  description: string;
  ref: string;
  price: number;
  imageUrl?: string;
  stock: number;
  discount?: number;
  color?: string;
  material?: string;
  status?: string;
  quantity: number;
}
interface ShoppingCartProps {
  onCheckout: (price: number, discount: number, items: CartItem[]) => void; // Add items parameter
}
const ShoppingCart: React.FC<ShoppingCartProps> = ({ onCheckout }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const incrementHandler = (item: CartItem) => {
    if (item.quantity < item.stock) {
      dispatch(
        updateItemQuantity({ _id: item._id, quantity: item.quantity + 1 })
      );
    }
  };

  const decrementHandler = (item: CartItem) => {
    if (item.quantity > 1) {
      dispatch(
        updateItemQuantity({ _id: item._id, quantity: item.quantity - 1 })
      );
    }
  };

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => {
    const finalPrice =
      item.discount != null && item.discount > 0
        ? item.price - (item.price * item.discount) / 100
        : item.price;
    return total + finalPrice * item.quantity;
  }, 0);
  const totalDiscount = items.reduce((total, item) => {
    const originalPrice = item.price * item.quantity;
    const finalPrice =
      item.discount != null && item.discount > 0
        ? item.price - (item.price * item.discount) / 100
        : item.price;
    const discountedPrice = finalPrice * item.quantity;

    const discountAmount = originalPrice - discountedPrice;

    return total + discountAmount;
  }, 0);
  const handleSuccess = () => {
    dispatch(clearCart());
    router.push("/");
  };
  const removeCartHandler = (_id: string) => dispatch(removeItem({ _id }));

  return (
    <div className="py-20 w-full flex justify-center">
      <div className="xl:w-[80%] md:w-[98%] rounded-lg border-2 p-8 flex justify-between max-lg:hidden">
        <div className="flex flex-col w-[65%] divide-y-2">
          <h1 className="text-3xl font-bold py-4">Shopping Cart</h1>
          {items.length > 0 ? (   <div className="flex flex-col divide-y-2">
            {items.map((item) => (
              <div key={item._id} className="py-4 flex justify-between ">
                <div className="flex gap-4 w-full ">
                  <div>
                    <Image
                      className="rounded-lg"
                      src={item.imageUrl || "/path/to/default-image.jpg"}
                      alt={item.name}
                      width={150} // Add width
                      height={150} // Add height
                    />
                  </div>
                  <div className="flex flex-col justify-between w-2/5">
                    <div className="flex flex-col gap-2 ">
                      <p className="text-xl">{item.name}</p>
                      <div className=" text-gray-400">
                        <p>{item.color}</p>
                        <p>{item.ref}</p>
                      </div>
                      {item.discount != null && item.discount > 0 ? (
                        <p>
                          {" "}
                          {(
                            item.price -
                            (item.price * (item.discount ?? 0)) / 100
                          ).toFixed(2)}
                          TND
                        </p>
                      ) : (
                        <p>{item.price.toFixed(2)} TND</p>
                      )}
                    </div>
                    <p className="text-gray-400 font-bold flex items-center gap-2">
                      <IoCheckboxOutline size={25} />
                      <p className="uppercase">{item.status}</p>
                    </p>
                  </div>
                  <div className={`flex items-center w-[2/5]  `}>
                    <p className={"py-2 px-8 border-2 rounded-l-lg w-20"}>
                      {item.quantity}
                    </p>

                    <div className="border-t-2 border-r-2 border-b-2 py-1 px-2 rounded-r-lg ">
                      <IoIosArrowUp
                        className="cursor-pointer"
                        onClick={() => incrementHandler(item)}
                      />
                      <IoIosArrowDown
                        className="cursor-pointer"
                        onClick={() => decrementHandler(item)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-[17%]">
                  {item.discount != null && item.discount > 0 ? (
                    <p>
                      {" "}
                      {(item.price -
                        (item.price * (item.discount ?? 0)) / 100) *
                        item.quantity}{" "}
                      TND
                    </p>
                  ) : (
                    <p>{item.price * item.quantity} TND</p>
                  )}
                </div>
                <div>
                  <RxCross1
                    className="cursor-pointer"
                    onClick={() => removeCartHandler(item._id)}
                    size={35}
                  />
                </div>
              </div>
            ))}
          </div>) : (
  <div className="flex flex-col divide-y-2 items-center "><Image alt="empty" src="https://res.cloudinary.com/dx499gc6x/image/upload/f_webp/v1726584013/empty_cart.45e2dadaaca71284eb3a_heojvk.webp
" width={500} height={500}/>
<span className="text-gray-600">Empty</span></div>
)}
        </div>

        <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
          <div className="flex border border-[#15335E] overflow-hidden rounded-md">
            <input
              type="email"
              placeholder="Promo code"
              className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
            />
            <button
              type="button"
              className="flex items-center justify-center font-semibold tracking-wide bg-primary hover:bg-[#15335E]   px-4 text-sm text-white"
            >
              Apply
            </button>
          </div>

          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-base">
              Discount{" "}
              <span className="ml-auto font-bold">
                {totalDiscount.toFixed(2)} TND
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Shipping <span className="ml-auto font-bold">0 TND</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Tva <span className="ml-auto font-bold">0 TND</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base font-bold">
              Total <span className="ml-auto">{totalPrice.toFixed(2)} TND</span>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <button
              onClick={() => onCheckout(totalPrice, totalDiscount, items)}
              type="button"
              className={`text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-primary hover:bg-[#15335E] ${
                items.length > 0 ? "" : "opacity-50 cursor-not-allowed"
              } text-white rounded-md`}
              disabled={items.length === 0} // Disable button when items.length is 0
            >
              Checkout
            </button>

            <Link href="/">
              <button
                type="button"
                className="text-sm mt-2 px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
              >
                Continue Shopping{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="w-[95%] py-8 flex flex-col gap-8  lg:hidden">
        <div className="flex flex-col w-full divide-y-2 px-4 border-2 rounded-lg">
          <h1 className="text-3xl font-bold py-4">Shopping Cart</h1>
          {items.length > 0 ? (    <div className="flex flex-col divide-y-2">
            {items.map((item) => (
              <div
                key={item._id}
                className="py-4 flex flex-col gap-4 justify-between"
              >
                <div className="w-full flex justify-end">
                  <RxCross1 size={35} />
                </div>
                <div className="flex gap-4 max-md:flex-col">
                  <div className="flex justify-center">
                    <Image
                      className="max-md:w-[50%] h-auto"
                      src={item.imageUrl || "/path/to/default-image.jpg"}
                      alt={item.name}
                      width={1920} // Add width
                      height={1850} // Add height
                    />
                  </div>
                  <div className="flex gap-8 max-md:justify-between">
                    <div className="flex flex-col justify-between ">
                      <div className="flex flex-col gap-4">
                        <p className="text-xl">{item.name}</p>
                        <div className="flex items-center divide-x-2 text-gray-400">
                          <p className="pr-2">{item.color}</p>
                          <p className="px-2">{item.ref}</p>
                        </div>
                        {item.discount != null && item.discount > 0 ? (
                          <p>
                            {" "}
                            {(
                              item.price -
                              (item.price * (item.discount ?? 0)) / 100
                            ).toFixed(2)}
                            TND
                          </p>
                        ) : (
                          <p>{item.price.toFixed(2)}</p>
                        )}
                      </div>
                      <p className="text-gray-400 font-bold flex items-center text-[75%] gap-2">
                        <IoCheckboxOutline size={25} />
                        <p className="uppercase">{item.status}</p>
                      </p>
                    </div>
                    <div
                      className={`flex items-center  ${
                        !item.color ? "md:pl-24" : ""
                      }`}
                    >
                      <p className="py-2 px-8 border-2 rounded-l-lg">
                        {item.quantity}
                      </p>
                      <div className="border-t-2 border-r-2 border-b-2 py-1 px-2 rounded-r-lg">
                        <IoIosArrowUp
                          className="cursor-pointer"
                          onClick={() => incrementHandler(item)}
                        />
                        <IoIosArrowDown
                          className="cursor-pointer"
                          onClick={() => decrementHandler(item)}
                        />
                      </div>
                    </div>
                    <div className="flex items-center ">
                      {item.discount != null && item.discount > 0 ? (
                        <p>
                          {" "}
                          {(item.price -
                            (item.price * (item.discount ?? 0)) / 100) *
                            item.quantity}{" "}
                          TND
                        </p>
                      ) : (
                        <p>{item.price * item.quantity} TND</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>): (
  <div className="flex flex-col divide-y-2 items-center "><Image alt="empty" src="https://res.cloudinary.com/dx499gc6x/image/upload/f_webp/v1726584013/empty_cart.45e2dadaaca71284eb3a_heojvk.webp
" width={500} height={500}/>
<span className="text-gray-600">Empty</span></div>
)}
     
        </div>
        <div className="w-full rounded-lg bg-[#EFEFEF] h-fit p-6 flex flex-col gap-4 items-center">
          <div className="flex border border-[#15335E] overflow-hidden rounded-md">
            <input
              type="email"
              placeholder="Promo code"
              className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
            />
            <button
              type="button"
              className="flex items-center justify-center font-semibold tracking-wide bg-primary hover:bg-[#15335E]   px-4 text-sm text-white"
            >
              Apply
            </button>
          </div>

          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-base">
              Discount{" "}
              <span className="ml-auto font-bold">
                {totalDiscount.toFixed(2)} TND
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Shipping <span className="ml-auto font-bold">0 TND</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Tva <span className="ml-auto font-bold">0 TND</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base font-bold">
              Total <span className="ml-auto">{totalPrice.toFixed(2)} TND</span>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <button
              onClick={() => onCheckout(totalPrice, totalDiscount, items)}
              type="button"
              className={`text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-primary hover:bg-[#15335E]  ${
                items.length > 0 ? "" : "opacity-50 cursor-not-allowed"
              } text-white rounded-md`}
            >
              Checkout
            </button>
            <Link href="/">
              <button
                type="button"
                className="text-sm mt-2 px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
              >
                Continue Shopping{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
