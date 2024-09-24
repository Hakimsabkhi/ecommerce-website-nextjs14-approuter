import React, { useState, useEffect } from 'react';
import { Governorate, city } from "@/assets/tunisia";

interface AddressProps {
  address: Address;
  togglecloseUpdateVisibility: () =>void;
 
}
interface Address{
  governorate: string;
  city: string;
  address: string;
  zipcode: string;

}
const ModificationAddress: React.FC<AddressProps> = ({ address,togglecloseUpdateVisibility}) => {
  const [addressData, setAddressData] = useState({
    governorate: '',
    city: '',
    address: '',
    zipcode: '',
  });

  const [filteredMunicipalities, setFilteredMunicipalities] = useState<{ id: number, name: string }[]>([]);

  // Initialize the addressData state with the passed address prop
  useEffect(() => {
    if (address) {
      setAddressData(address);
    }
  }, [address]);

  const handleGovernorateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const governorateId = e.target.value;
    setAddressData((prevData) => ({
      ...prevData,
      governorate: governorateId,
      city: '', // Reset city when governorate changes
    }));

    // Filter cities based on the selected governorate
    const filteredCities = city.filter((c) => c.governorate_id === parseInt(governorateId));
    setFilteredMunicipalities(filteredCities);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    setAddressData((prevData) => ({
      ...prevData,
      city,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Address updated:', addressData);
  };

  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover backdrop-filter backdrop-brightness-75"
    >
      <div className="absolute opacity-80 inset-0 z-0"></div>
      <div className="space-y-4 w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Update Address</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Governorate</label>
              <select
                value={addressData.governorate}
                onChange={handleGovernorateChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">Select Governorate</option>
                {Governorate.map((gov) => (
                  <option key={gov.id} value={gov.id}>
                    {gov.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">City</label>
              <select
                value={addressData.city}
                onChange={handleCityChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                disabled={!addressData.governorate}
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
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={addressData.address}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                placeholder="Enter your address"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Zipcode</label>
              <input
                type="text"
                name="zipcode"
                value={addressData.zipcode}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                placeholder="Enter your zipcode"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button type="submit" className="bg-primary hover:bg-[#15335E] text-white px-4 py-2 rounded">
              Update
            </button>
            <button
              type="button"
              onClick={togglecloseUpdateVisibility}
              className="border border-gray-800 text-black px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModificationAddress;
