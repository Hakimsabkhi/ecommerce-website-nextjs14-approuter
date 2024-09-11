import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Governorate, city } from "@/assets/tunisia";
import { toast } from "react-toastify";

interface AddressProps {
  totalPrice: number;
  totalDiscount: number;
}
interface Governorate {
  id: number;
  name: string;
}

interface Municipality {
  id: number;
  name: string;
  governorate_id: number;
}

// Sample data
const governorates: Governorate[] = Governorate;

const municipalities: Municipality[] = city;
const Address: React.FC<AddressProps> = ({ totalPrice, totalDiscount }) => {
    const [error, setError] = useState<string | null>(null);
  const [selectedGovernorate, setSelectedGovernorate] = useState<number | undefined>(undefined);
  const [filteredMunicipalities, setFilteredMunicipalities] = useState<Municipality[]>([]);
  const [addressData, setAddressData] = useState({
    governorate: "",
    city: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    // Update municipalities based on selected governorate
    if (selectedGovernorate !== undefined) {
      setFilteredMunicipalities(
        municipalities.filter(
          (municipality) => municipality.governorate_id === selectedGovernorate
        )
      );
    }
  }, [selectedGovernorate]);

  const handleGovernorateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedGovernorate(Number(event.target.value));
    setAddressData((prevData) => ({
      ...prevData,
      governorate: event.target.options[event.target.selectedIndex].text, // Update state with selected governorate name
    }));
  };
  
  const handleCityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAddressData((prevData) => ({
      ...prevData,
      city: event.target.options[event.target.selectedIndex].text, // Update state with selected city name
    }));
  };
  
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAddressData({ ...addressData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("governorate", addressData.governorate);
    formData.append("city", addressData.city);
    formData.append("address", addressData.address);
    formData.append("phone", addressData.phone);

    try {
      const response = await fetch("/api/address/postAddress", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const result = await response.json(); // Parse the response JSON
        // Handle different statuses with specific messages
        switch (response.status) {
          case 400:
            toast.error(result.message || 'All fields are required.');
            break;
          case 405:
            toast.error(result.message || 'You have reached the limit of 2 addresses.');
            break;
          case 500:
            toast.error(result.message || 'Error creating address.');
            break;
          default:
            toast.error(result.message || 'An unexpected error occurred.');
        }
        return; // Exit function to avoid proceeding with the success case
      }
      toast.success(`Address added successfully!`);
      await response.json(); // or await response.text() if you expect text response

    } catch (error) {
      console.log({error})
      toast.error(
        `${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  };


  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div  className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Delivery Details
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      {" "}
                      Governorate*{" "}
                    </label>
                  </div>
                  <select
                  name="governorate"
                    id="select-governorate"
                   
                    onChange={handleGovernorateChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  >
                    <option value="">Select Governorate</option>
                    {governorates.map((governorate) => (
                      <option key={governorate.id} value={governorate.id}>
                        {governorate.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      {" "}
                      City*{" "}
                    </label>
                  </div>
                  <select
                   name="city"
                   onChange={handleCityChange}
                    id="select-city-input-3"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  >
                    <option value="">Select City</option>
                    {filteredMunicipalities.map((municipality) => (
                      <option key={municipality.id} value={municipality.id }>
                        {municipality.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Phone Number*
                  </label>
                  <div className="flex items-center">
                    <button
                      id="dropdown-phone-button-3"
                      data-dropdown-toggle="dropdown-phone-3"
                      className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <path
                          style={{ fill: "#FF4B55" }}
                          d="M473.655,423.724H38.345C17.167,423.724,0,406.557,0,385.379V126.621 c0-21.177,17.167-38.345,38.345-38.345h435.31c21.177,0,38.345,17.167,38.345,38.345V385.38 C512,406.557,494.833,423.724,473.655,423.724z"
                        />
                        <path
                          style={{ fill: "#F5F5F5" }}
                          d="M257.002,167.724c48.718,0,88.205,39.594,88.205,88.276c0,48.823-39.488,88.276-88.205,88.276 c-48.822,0-88.346-39.453-88.346-88.276C168.655,207.318,208.179,167.724,257.002,167.724"
                        />
                        <g>
                          <path
                            style={{ fill: "#FF4B55" }}
                            d="M273.042,305.466c-27.327,0-49.493-22.165-49.493-49.461c0-27.23,22.165-49.395,49.493-49.395 c9.295,0,17.981,2.604,25.405,7.102c1.112,0.674,2.282-0.782,1.355-1.695c-11.138-10.974-26.389-17.771-43.236-17.771 c-34.2,0-61.891,27.692-61.891,61.761c0,34.135,27.691,61.825,61.891,61.825c16.838,0,32.083-6.792,43.219-17.763 c0.927-0.913-0.243-2.369-1.355-1.696C291.01,302.867,282.33,305.466,273.042,305.466z"
                          />
                          <path
                            style={{ fill: "#FF4B55" }}
                            d="M268.52,221.387l13.644,18.526l21.945-6.912c2.841-0.895,5.186,2.342,3.452,4.762l-13.402,18.701 l13.355,18.735c1.729,2.425-0.625,5.656-3.464,4.754l-21.927-6.968l-13.692,18.49c-1.772,2.393-5.572,1.154-5.591-1.825 l-0.149-23.007l-21.816-7.307c-2.825-0.946-2.819-4.943,0.008-5.881l21.835-7.252l0.207-23.007 C262.951,220.218,266.753,218.988,268.52,221.387z"
                          />
                        </g>
                      </svg>
                      +216
                      <svg
                        className="-me-0.5 ms-2 h-4 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 9-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div className="relative w-full">
                      <input
                      name="phone"
                      value={addressData.phone}
                      onChange={handleChange}
                        type="text"
                        id="phone-input"
                        className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                        pattern="[0-9]{8}"
                        placeholder="XX XXX XXX"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Address{" "}
                  </label>
                  <input
                 value={addressData.address}
                 onChange={handleChange}
                    name="address"
                    type="Address"
                    id="Address"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="xx street "
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14m-7 7V5"
                      />
                    </svg>
                    Add new address
                  </button>
                </div>
              </div>
            </form>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="pay-on-delivery"
                        aria-describedby="pay-on-delivery-text"
                        type="radio"
                        name="payment-method"
                        value=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label className="font-medium leading-none text-gray-900 dark:text-white">
                        {" "}
                        Payment on delivery{" "}
                      </label>
                      <p
                        id="pay-on-delivery-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        +$15 payment processing fee
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Delete
                    </button>


                   
                  </div>
                </div>
                    </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Payment
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="credit-card"
                        aria-describedby="credit-card-text"
                        type="radio"
                        name="payment-method"
                        value=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label className="font-medium leading-none text-gray-900 dark:text-white">
                        {" "}
                        Credit Card{" "}
                      </label>
                      <p
                        id="credit-card-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Pay with your credit card
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Delete
                    </button>

                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Edit
                    </button>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="pay-on-delivery"
                        aria-describedby="pay-on-delivery-text"
                        type="radio"
                        name="payment-method"
                        value=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label className="font-medium leading-none text-gray-900 dark:text-white">
                        {" "}
                        Payment on delivery{" "}
                      </label>
                      <p
                        id="pay-on-delivery-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        +$15 payment processing fee
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Delete
                    </button>

                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Edit
                    </button>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="paypal-2"
                        aria-describedby="paypal-text"
                        type="radio"
                        name="payment-method"
                        value=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label className="font-medium leading-none text-gray-900 dark:text-white">
                        {" "}
                        Paypal account{" "}
                      </label>
                      <p
                        id="paypal-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Connect to your account
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Delete
                    </button>

                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                    <button
                      type="button"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Delivery Methods
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="dhl"
                        aria-describedby="dhl-text"
                        type="radio"
                        name="delivery-method"
                        value=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label className="font-medium leading-none text-gray-900 dark:text-white">
                        {" "}
                        $15 - DHL Fast Delivery{" "}
                      </label>
                      <p
                        id="dhl-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Get it by Tommorow
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="fedex"
                        aria-describedby="fedex-text"
                        type="radio"
                        name="delivery-method"
                        value=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label className="font-medium leading-none text-gray-900 dark:text-white">
                        {" "}
                        Free Delivery - FedEx{" "}
                      </label>
                      <p
                        id="fedex-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Get it by Friday, 13 Dec 2023
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="express"
                        aria-describedby="express-text"
                        type="radio"
                        name="delivery-method"
                        value=""
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label className="font-medium leading-none text-gray-900 dark:text-white">
                        {" "}
                        $49 - Express Delivery{" "}
                      </label>
                      <p
                        id="express-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Get it today
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
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
                  Total{" "}
                  <span className="ml-auto">{totalPrice.toFixed(2)} TND</span>
                </li>
              </ul>

              <div className="mt-8 space-y-2">
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-primary hover:bg-[#15335E] text-white rounded-md"
                >
                  Proceed to Payment
                </button>
                <Link href="/">
                  <button
                    type="button"
                    className="text-sm mt-2 px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
                  >
                    Canncel{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
