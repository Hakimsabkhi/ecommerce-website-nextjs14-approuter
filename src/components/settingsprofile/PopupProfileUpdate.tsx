import React, { useState } from "react";
import { toast } from "react-toastify";
interface PopupProfileUpdateParam {
  close(): void;
  selectupdate:string;
  fetchProfile():void;
}


const PopupProfileUpdate: React.FC<PopupProfileUpdateParam> = ({ close,selectupdate,fetchProfile}) => {
  const [phone, setPhone] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [replyPassword, setReplyPassword] = useState('');

  const update = async () => {
    let payload;

    if (selectupdate === "phone") {
      payload = { phone };
    } else if (selectupdate === "password") {
      payload = { currentPassword, newPassword, replyPassword };
    }

    try {
      const response = await fetch(`api/users/updateuser`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to update user information');
      }

    const data=await response.json();
      // Handle successful update (e.g., show a success message)
      if (response.status === 200) {
        // Success - User updated
        toast.success('User updated successfully!')
        fetchProfile()
        close()
      } else if (response.status === 400) {
        // Error - Invalid input or passwords do not match
        let errorMessage = data.message || 'Invalid input';
        if (errorMessage === 'Passwords do not match') {
          errorMessage = 'Passwords do not match';
        } else if (errorMessage === 'No existing password to compare') {
          errorMessage = 'No existing password to compare';
        }
        toast.error(`${errorMessage}`)
         
      } else if (response.status === 401) {
       
        let errorMessage = data.message || 'Unauthorized';
        if (errorMessage === 'Current password is incorrect') {
          errorMessage = 'Current password is incorrect';
        }
        toast.error(`${errorMessage}`)
      } else if (response.status === 500) {
        // Server error
        toast.error("Server error. Please try again later")
          
      }
    
    } catch (error) {
      console.error('Error updating user information:', error);
      toast.error('Error updating user information. Please check your connection.')
    }
  };

  return (
    <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover backdrop-filter backdrop-brightness-75">
      <div className="absolute opacity-80 inset-0 z-0"></div>
      <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        {selectupdate === "phone" && (
          <div className="mb-4">
            <p className="font-bold">Phone Number</p>
            <div className="gap-2 grid grid-cols-1">
              <p className="text-sm text-gray-600">Phone</p>
              <input
                name="phone"
                type="tel"
                minLength={8}
                maxLength={8}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-2 border-double rounded-tl rounded-br w-full h-10"
              />
            </div>
          </div>
        )}
        {selectupdate === "password" && (
          <div className="mb-4">
            <p className="font-bold">Password</p>
            <div className="gap-2 grid grid-cols-1">
              <p className="text-sm text-gray-600">Actual Password</p>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="border-2 border-double rounded-tl rounded-br w-full h-10"
              />
              <p className="text-sm text-gray-600">New Password</p>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border-2 border-double rounded-tl rounded-br w-full h-10"
              />
              <p className="text-sm text-gray-600">Repeat Password</p>
              <input
                type="password"
                value={replyPassword}
                onChange={(e) => setReplyPassword(e.target.value)}
                className="border-2 border-double rounded-tl rounded-br w-full h-10"
              />
            </div>
          </div>
        )}

        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={update} // Call the update function on click
            className="text-indigo-600 text-sm font-semibold hover:underline"
          >
            Update
          </button>
          <button
            type="button"
            onClick={close}
            className="text-indigo-600 text-sm font-semibold hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


export default PopupProfileUpdate;
