"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


interface User {
  _id: string;
  email: string;
  role: string;
}

const AdminDashboard = () => {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const router = useRouter();

 useEffect(() => {
   
    if (!session || !session.user ||( session.user.role !== "SuperAdmin" && session.user.role!=="Admin")) {
      router.push("/");
    } else {
      fetchUsers();
    }
  }, [router, session]); 


  const fetchUsers = async () => {
    const res = await fetch(`/api/users`);
    const data = await res.json();
    setUsers(data);
  };

  const handleDeleteUser = async (userId: string) => {
    await fetch(`/api/users/${userId}`, { method: "DELETE" });
    fetchUsers();
  };

  const handleChangeRole = async (userId: string, newRole: string) => {
    try {
      // Ensure the session and user ID are available
      if (!session?.user?.id) {
        throw new Error('User not authenticated');
      }
  
  
      // Perform the API request
      const response = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      });
  
      // Check for HTTP errors
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update role');
      }
      setDropdownOpen(null); // Close the dropdown

      // Refresh the user list or update the UI
      fetchUsers();
    } catch (error) {
      // Handle errors, e.g., show a notification or log the error
      console.error('Error changing role:', error);
      // Optionally, show a user-friendly error message
    }
  };
  
  

  const toggleDropdown = (userId: string) => {
    setDropdownOpen(dropdownOpen === userId ? null : userId);
  };



  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Admin Dashboard
      </h1>
      <div className="relative  shadow-lg rounded-lg bg-white">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.email}
                </th>
                <td className="px-6 py-4 text-center">{user.role}</td>
                <td className="px-6 py-4 relative text-center">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle={`dropdown-${user._id}`}
                        onClick={() => toggleDropdown(user._id)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        Change Role
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                    </div>
                    {dropdownOpen === user._id && (
                      <div
                        id={`dropdown-${user._id}`}
                        className="z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <button
                              onClick={() =>
                                handleChangeRole(user._id, "Consulter")
                              }
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Make Consulter
                            </button>
                          </li>
                          {session?.user?.role !== 'Admin'  && (<li>
                            <button
                              onClick={() =>
                                handleChangeRole(user._id, "Admin")
                              }
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Make Admin
                            </button>
                          </li>)}
                          <li>
                            <button
                              onClick={() =>
                                handleChangeRole(user._id, "Visiteur")
                              }
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Make Visiteur
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
