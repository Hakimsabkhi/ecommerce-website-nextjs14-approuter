"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoCheckboxOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  clearCart,
  removeItem,
  updateItemQuantity,
} from "../store/cartSlice";
import PaypalButton from "@/app/Helper/PaypalButton";

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

const ShoppingCart = () => {
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
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleSuccess = () => {
    dispatch(clearCart());
    router.push("/");
  };
  const removeCartHandler = (_id: string) => dispatch(removeItem({ _id }));
  console.log("Total Price:", totalPrice);
  console.log("FormattedPrice:", totalPrice.toFixed(2));
  return (
    <div className="py-20 w-full flex justify-center">
      <div className="w-[80%] rounded-lg border-2 p-8 flex justify-between max-lg:hidden">
        <div className="flex flex-col w-[65%] divide-y-2">
          <h1 className="text-3xl font-bold py-4">Shopping Cart</h1>
          <div className="flex flex-col divide-y-2">
            {items.map((item) => (
              <div key={item._id} className="py-4 flex justify-between">
                <div className="flex gap-4">
                  <Image
                    className="rounded-lg"
                    src={item.imageUrl || "/path/to/default-image.jpg"}
                    alt={item.name}
                    width={150} // Add width
                    height={150} // Add height
                  />
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                      <p className="text-xl">{item.name}</p>
                      <div className="flex items-center divide-x-2 text-gray-400">
                        <p className="pr-2">{item.color}</p>
                        <p className="px-2">{item.ref}</p>
                      </div>
                      <p>TND {item.price.toFixed(2)}</p>
                    </div>
                    <p className="text-gray-400 font-bold flex items-center gap-2">
                      <IoCheckboxOutline size={25} /> In Stock
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
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
                <RxCross1
                  className="cursor-pointer"
                  onClick={() => removeCartHandler(item._id)}
                  size={35}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[30%] rounded-lg bg-[#EFEFEF] h-fit p-6 flex flex-col gap-4 items-center">
          <div className="flex flex-col divide-y-2 text-gray-400 w-full">
            <div className="flex justify-between items-center py-4">
              <p>Items ({totalQuantity})</p>
              <p>TND {totalPrice.toFixed(2)}</p>
            </div>
            {/* Include additional charges if needed */}
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-3xl">Order Total:</p>
            <p>TND {totalPrice.toFixed(2)}</p>
          </div>
          <PaypalButton
            amount={totalPrice.toFixed(2)}
            onSuccess={handleSuccess}
          />
        </div>
      </div>
      {/* Mobile view */}
      <div className="w-[95%] py-8 flex flex-col gap-8 lg:hidden">
        <div className="flex flex-col w-full divide-y-2 px-4 border-2 rounded-lg">
          <h1 className="text-3xl font-bold py-4">Shopping Cart</h1>
          <div className="flex flex-col divide-y-2">
            {items.map((item) => (
              <div
                key={item._id}
                className="py-4 flex flex-col gap-4 justify-between"
              >
                <div className="w-full flex justify-end">
                  <RxCross1 size={35} />
                </div>
                <div className="flex gap-4 max-md:flex-col">
                  <Image
                    className="max-md:w-full h-[300px]"
                    src={item.imageUrl || "/path/to/default-image.jpg"}
                    alt={item.name}
                    width={300} // Add width
                    height={300} // Add height
                  />
                  <div className="flex gap-8 max-md:justify-between">
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-4">
                        <p className="text-xl">{item.name}</p>
                        <div className="flex items-center divide-x-2 text-gray-400">
                          <p className="pr-2">{item.color}</p>
                          <p className="px-2">{item.ref}</p>
                        </div>
                        <p>TND {item.price.toFixed(2)}</p>
                      </div>
                      <p className="text-gray-400 font-bold flex items-center gap-2">
                        <IoCheckboxOutline size={25} /> In Stock
                      </p>
                    </div>
                    <div className="flex items-center">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full rounded-lg bg-[#EFEFEF] h-fit p-6 flex flex-col gap-4 items-center">
          <div className="flex flex-col divide-y-2 text-gray-400 w-full">
            <div className="flex justify-between items-center py-4">
              <p>Items ({totalQuantity})</p>
              <p>TND {totalPrice.toFixed(2)}</p>
            </div>
            {/* Include additional charges if needed */}
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-3xl">Order Total:</p>
            <p>TND {totalPrice.toFixed(2)}</p>
          </div>
          <PaypalButton
            amount={totalPrice.toFixed(2)}
            onSuccess={handleSuccess}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
