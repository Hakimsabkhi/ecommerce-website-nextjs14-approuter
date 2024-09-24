import React from 'react'

const Address = () => {
  return (
    
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Address</h2>
      <p className="text-sm text-gray-500 mb-6">liste address you have for delivery .</p>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="font-medium text-gray-900">TD Canada Trust</p>
          </div>
          <a href="#" className="text-indigo-600 text-sm font-semibold hover:underline">
            Update
          </a>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="font-medium text-gray-900">Royal Bank of Canada</p>
          </div>
          <a href="#" className="text-indigo-600 text-sm font-semibold hover:underline">
            Update
          </a>
        </div>
        <a href="#" className="text-indigo-600 text-sm font-semibold hover:underline">
          + Add another bank
        </a>
      </div>
    </div>
  )
}

export default Address