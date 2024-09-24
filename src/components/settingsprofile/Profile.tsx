"use client"
import React, { useEffect, useState } from 'react'
import PopupProfileUpdate from './PopupProfileUpdate';

interface UserProfile {
  username: string;
  role:string
  email: string;
  phone:number;
  password: string;
  
}

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible,setIsVisible]=useState(false);

  useEffect(() => {
    // Fetch the user profile data from the API
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/users/getprofile');
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const data = await response.json();
        setProfile(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);
 function handleUpadte(){
    setIsVisible(true)
 }
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
 
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Profile</h2>
      <p className="text-sm text-gray-500 mb-6">
        This information will be displayed.
      </p>
      {profile && (
       <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="font-medium text-gray-900">{profile.username}</p>
            </div>
            <button onClick={()=>handleUpadte} className="text-indigo-600 text-sm font-semibold hover:underline">
              Update
            </button>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm text-gray-600">Title</p>
              <p className="font-medium text-gray-900">{profile.role}</p>
            </div>

          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm text-gray-600">Email address</p>
              <p className="font-medium text-gray-900">{profile.email}</p>
            </div>
            <a href="#" className="text-indigo-600 text-sm font-semibold hover:underline">
              Update
            </a>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium text-gray-900">+216 {profile.phone}</p>
            </div>
            <a href="#" className="text-indigo-600 text-sm font-semibold hover:underline">
              Update
            </a>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm text-gray-600">Password</p>
              <p className="font-medium text-gray-900">*********</p>
            </div>
            <a href="#" className="text-indigo-600 text-sm font-semibold hover:underline">
              Update
            </a>
          </div>



        </div>
      
      )}
    {isVisible &&  <PopupProfileUpdate/>}
    </div>
    
  );
};

export default Profile;
