import React from "react";

const CheckoutPage: React.FC = () => {
  return (
    <div className="font-[sans-serif] bg-white">
      <div className="flex flex-col md:flex-row gap-12 md:gap-4 h-full">
        {/* Left Sidebar */}
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 md:h-screen md:sticky md:top-0 lg:min-w-[370px] md:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 md:overflow-auto md:h-[calc(100vh-60px)]">
              <div className="space-y-4">
                {[
                  {
                    src: "https://readymadeui.com/images/product10.webp",
                    title: "Split Sneakers",
                    size: "37",
                    quantity: "2",
                    price: "$40",
                  },
                  {
                    src: "https://readymadeui.com/images/product11.webp",
                    title: "Velvet Boots",
                    size: "37",
                    quantity: "2",
                    price: "$40",
                  },
                  {
                    src: "https://readymadeui.com/images/product14.webp",
                    title: "Echo Elegance",
                    size: "37",
                    quantity: "2",
                    price: "$40",
                  },
                  {
                    src: "https://readymadeui.com/images/product13.webp",
                    title: "Pumps",
                    size: "37",
                    quantity: "2",
                    price: "$40",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-32 h-28 md:w-24 md:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                      <img
                        src={item.src}
                        className="w-full object-contain"
                        alt={item.title}
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-base text-white">{item.title}</h3>
                      <ul className="text-xs text-gray-300 space-y-2 mt-2">
                        <li className="flex justify-between">
                          Size <span>{item.size}</span>
                        </li>
                        <li className="flex justify-between">
                          Quantity <span>{item.quantity}</span>
                        </li>
                        <li className="flex justify-between">
                          Total Price <span>{item.price}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
              <h4 className="flex justify-between text-base text-white">
                Total <span>$84.00</span>
              </h4>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
          <h2 className="text-2xl font-bold text-gray-800">
            Complete your order
          </h2>
          <form className="mt-8">
            <div>
              <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Phone No."
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Address Line"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="State"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
              </div>

              <div className="flex gap-4 flex-col md:flex-row mt-8">
                <button
                  type="button"
                  className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
