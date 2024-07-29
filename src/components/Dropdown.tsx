import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

interface User {
  _id: string;
  email: string;
  role: string;
}

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (session) {
        const res = await fetch('/api/users');
        const data = await res.json();
        setUsers(data.users);
      }
    };
    fetchUserDetails();
  }, [session]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (!session) {
    return <div>Loading...</div>;
  }

  const user = {
    _id: (session.user as any).id,  // Assuming session.user.id is present and converting it to _id
    email: (session.user as any).email,
    role: (session.user as any).role,
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-4 justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 w-48 bg-white font-bold text-orange-400"
      >
        <FaRegUserCircle size={25} />
        <p>MON COMPTE</p>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-gray-900">
              <div className="font-bold">{user.email}</div>
              <div className="text-gray-500">Role: {user.role}</div>
            </div>
            <div className="border-t border-gray-100"></div>
            {user.role === 'Admin' && (
              <a
                href="/admin/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </a>
            )}
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
