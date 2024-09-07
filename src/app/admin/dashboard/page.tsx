"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Dialog from "@/components/dialogDelete/Dialog";
import { toast } from "react-toastify";

interface User {
  _id: string;
  email: string;
  role: string;
}

const AdminDashboard = () => {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState({ id: '', email: '' });
  const handleDeleteClick = (user:User) => {
    setSelectedUser({ id: user._id, email: user.email });
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (
      !session ||
      !session.user ||
      (session.user.role !== "SuperAdmin" && session.user.role !== "Admin")
    ) {
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

  const handleDeleteUser = async (id: string) => {
    try {

      const response = await fetch(`/api/users/deleteuserbyid/${id}`, {
        method: "DELETE",
      });

      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`Failed to delete user. Status: ${response.status}`);
      }

      fetchUsers();
      toast.success("User delete successfully!");
      handleCloseDialog();
    } catch (error) {
      
      toast.error("[User_DELETE] ");
     
    }
  };

  const handleChangeRole = async (userId: string, newRole: string) => {
    try {
      // Ensure the session and user ID are available
      if (!session?.user?.id) {
        throw new Error("User not authenticated");
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
        throw new Error(errorData.error || "Failed to update role");
      }
      setDropdownOpen(null); // Close the dropdown

      // Refresh the user list or update the UI
      fetchUsers();
    } catch (error) {
      // Handle errors, e.g., show a notification or log the error
      console.error("Error changing role:", error);
      // Optionally, show a user-friendly error message
    }
  };

  const toggleDropdown = (userId: string) => {
    setDropdownOpen(dropdownOpen === userId ? null : userId);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Admin Dashboard
      </h1>
      <div className="relative  shadow-lg rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xl uppercase ">
            <tr className=" bg-gray-800">
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
                <td className="px-6 py-4 text-center">
                  
                <div className="flex items-center justify-center gap-2">
                  <select
                   className={`w-60 text-center text-white  rounded-md p-2 bg-slate-800`}

                    value={user.role} // Set the default value
                    onChange={(e) => handleChangeRole(user._id, e.target.value)} 
                 >
                    <option value="Consulter" className="">
                    Consulter
                    </option>
                  {(session?.user?.role==="SuperAdmin")&&   <option value="Admin" className="">
                    Admin
                    </option> }
                    <option value="Visiteur" className="">
                    Visiteur
                    </option>
                  </select>

                </div>
                      </td>
                <td className="px-6 py-4 relative text-center">
                 
                   
                      <button
                        onClick={() => handleDeleteClick(user)}
                             className="bg-red-600 text-white hover:bg-red-800 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700"

                      >
                        <MdOutlineDeleteOutline className="w-6 h-6" />
                      </button>
                      {isDialogOpen && (
                    <Dialog 
                      handleCloseDialog={handleCloseDialog}
                      Delete={handleDeleteUser}
                      id={selectedUser.id} // Pass selected user's id
                    name={selectedUser.email} 
                    />
                  )}
                    
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
