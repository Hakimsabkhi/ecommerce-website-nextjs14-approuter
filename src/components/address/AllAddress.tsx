"use client";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Governorate, city } from "@/assets/tunisia";
import ModificationAddress from "./ModificationAddress";
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

type Address = {
  _id: string;
  governorate: string;
  city: string;
  address: string;
  zipcode: string;
};

const AllAddress: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedGovernorate, setSelectedGovernorate] = useState<
    number | undefined
  >(undefined);
  const [filteredMunicipalities, setFilteredMunicipalities] = useState<
    Municipality[]
  >([]);
  const [addressData, setAddressData] = useState({
    governorate: "",
    city: "",
    address: "",
    phone: "",
    zipcode: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [updateVisible, setUpdateVisible] = useState(false);
  const UpdateVisibility = () => {
    setUpdateVisible(true);
  };
  const togglecloseUpdateVisibility = () => {
    setUpdateVisible(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  const toggleForminVisibility = () => {
    setIsFormVisible(false);
  };

  const handleGovernorateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedId = Number(event.target.value);
    setSelectedGovernorate(selectedId);

    // Assuming `city` contains an array of municipalities, filter based on selected governorate
    // You need to define how municipalities are filtered
    setFilteredMunicipalities(
      city.filter((municipality) => municipality.governorate_id === selectedId)
    );

    setAddressData((prevData) => ({
      ...prevData,
      governorate: event.target.options[event.target.selectedIndex].text, // Update state with selected governorate name
    }));
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAddressData((prevData) => ({
      ...prevData,
      city: event.target.options[event.target.selectedIndex].text, // Update state with selected city name
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressData({ ...addressData, [event.target.name]: event.target.value });
  };

  const getAddress = useCallback(async () => {
    try {
      const response = await fetch("/api/address/getaddressbyuser", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch address");
      }

      const data = await response.json();
      setIsFormVisible(false);
      setAddresses(data); // Update state with fetched data
    } catch (err: any) {
      setError(`[address_GET] ${err.message}`);
    }
  }, []);

  useEffect(() => {
    getAddress(); // Call the async function when the component mounts
  }, [getAddress]);

  const deleteAddress = async (id: string) => {
    try {
      const response = await fetch(`/api/address/deleteAddressbyuser/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the address");
      }
      getAddress();
    } catch (err: any) {
      toast.error("Failed to delete address");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("governorate", addressData.governorate);
    formData.append("city", addressData.city);
    formData.append("address", addressData.address);
    formData.append("phone", addressData.phone);
    formData.append("zipcode", addressData.zipcode);
    // Post address data to the server
    try {
      const response = await fetch("/api/address/postAddress", {
        method: "POST",

        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add address");
      }

      setAddressData({
        governorate: "",
        city: "",
        address: "",
        phone: "",
        zipcode: "",
      });

      getAddress();
      toast.success("Address added successfully");
    } catch (err: any) {
      toast.error(`Failed to add address: ${err.message}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Addresses</h1>

      <button
        type="button"
        onClick={toggleFormVisibility}
        className=" bg-primary hover:bg-[#15335E] text-white px-4 py-2 rounded mb-4"
      >
        {isFormVisible ? "Cancel Add Address" : "Add Address"}
      </button>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Governorate
              </label>
              <select
                value={addressData.governorate}
                onChange={handleGovernorateChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                <option value="">Select Governorate</option>
                {/* Replace with dynamic options from your data */}
                {Governorate.map((gov) => (
                  <option key={gov.id} value={gov.id}>
                    {gov.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <select
                value={addressData.city}
                onChange={handleCityChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                <option value="">Select City</option>
                {filteredMunicipalities.map((municipality) => (
                  <option key={municipality.id} value={municipality.name}>
                    {municipality.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={addressData.phone}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Zipcode
              </label>
              <input
                type="text"
                name="zipcode"
                value={addressData.zipcode}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Enter your zipcode"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={addressData.address}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Enter your address"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              type="submit"
              className=" bg-primary hover:bg-[#15335E]  text-white px-4 py-2 rounded"
            >
              Add
            </button>

            <button
              type="button"
              onClick={toggleForminVisibility}
              className="ml-2 border border-gray-800 text-black px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-4">Existing Addresses</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
          {addresses.map((address) => (
            <div key={address._id} className="border p-4 mb-2 rounded ">
              <p>
                <strong>Governorate:</strong> {address.governorate}
              </p>
              <p>
                <strong>City:</strong> {address.city}
              </p>
              <p>
                <strong>Address:</strong> {address.address}
              </p>
              <p>
                <strong>Zipcode:</strong> {address.zipcode}
              </p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => deleteAddress(address._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded mt-2"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => UpdateVisibility()}
                  className="bg-green-800 text-white px-3 py-1 rounded mt-2"
                >
                  UPDATE
                </button>

                {updateVisible && (
                  <ModificationAddress
                  togglecloseUpdateVisibility={togglecloseUpdateVisibility}
                  
                    address={address}
                   
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAddress;
