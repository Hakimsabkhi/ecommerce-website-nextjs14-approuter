
import { useSession,signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";

interface DropdownProps {
  username: string;
  role: string;
}

const Dropdown: React.FC<DropdownProps> = ({ username, role }) => {
  const [isOpen, setIsOpen] = useState(false);
  //is admin show in menu dashboard
  const [isAdmin, setIsAdmin] = useState(false);
  //get session
  const { data: session } = useSession();

  useEffect(()=>{
    if (session?.user?.role==="Admin") {
      // Assuming the session object has an isAdmin property
      setIsAdmin(true);
    }
  }, [session]
  )
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-4 justify-center  rounded-md border border-gray-300 shadow-sm px-4 py-2 w-48 bg-white font-bold  text-orange-400 "
      >
        <FaRegUserCircle size={25} />
        <p> MON COMPTE</p>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-gray-900">
              <div className="font-bold">{username}</div>
              <div className="text-gray-500">Role: {role}</div>
            </div>
            <div className="border-t border-gray-100"></div>
          {isAdmin && <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Dashboard
            </a>}
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Historique d’achat
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
