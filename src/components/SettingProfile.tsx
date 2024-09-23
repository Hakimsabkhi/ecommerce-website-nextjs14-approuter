import React from 'react'

const SettingProfile = () => {
  return (
  
    <div className="max-w-4xl mx-auto p-6">
    {/* Profile Section */}
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Profile</h2>
      <p className="text-sm text-gray-500 mb-6">
        This information will be displayed publicly so be careful what you share.
      </p>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="text-sm text-gray-600">Full name</p>
            <p className="font-medium text-gray-900">Tom Cook</p>
          </div>
          <a href="#" className="text-indigo-600 text-sm font-semibold hover:underline">
            Update
          </a>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="text-sm text-gray-600">Email address</p>
            <p className="font-medium text-gray-900">tom.cook@example.com</p>
          </div>
          <a href="#" className="text-indigo-600 text-sm font-semibold hover:underline">
            Update
          </a>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="text-sm text-gray-600">Title</p>
            <p className="font-medium text-gray-900">Human Resources Manager</p>
          </div>
          <a href="#" className="text-indigo-600 text-sm font-semibold hover:underline">
            Update
          </a>
        </div>
      </div>
    </div>

    {/* Bank Accounts Section */}
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Bank accounts</h2>
      <p className="text-sm text-gray-500 mb-6">Connect bank accounts to your account.</p>
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

    {/* Integrations Section */}
    <div>
      <h2 className="text-xl font-semibold mb-2">Integrations</h2>
      <p className="text-sm text-gray-500 mb-6">Connect applications to your account.</p>
      {/* Add integration content if any */}
    </div>
  </div>
  )
}

export default SettingProfile