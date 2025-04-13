import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Navbar = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const currentUser = user || {
    name: 'Md Jilani Ansari',
    role: 'Co-Ordinator',
    email: '2022ugcs023@nitjsr.ac.in',
    photoUrl: 'https://i.ibb.co/kspBxdny/your-image.jpg', // Direct image URL
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold text-secondary-800 tracking-tight">
          NIT JAMSHEDPUR PLACEMENT CELL
        </h1>

        <div className="relative">
          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {/* User photo or placeholder */}
            {currentUser.photoUrl ? (
              <img
                src={currentUser.photoUrl}
                alt="User"
                className="h-8 w-8 rounded-full object-cover border border-gray-300"
                onError={(e) => (e.target.src = '/default-avatar.png')} // Fallback image
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-medium">
                {currentUser.name.charAt(0)}
              </div>
            )}

            <div className="text-right">
              <p className="text-sm font-medium text-secondary-700">{currentUser.name}</p>
              <p className="text-xs text-secondary-500">{currentUser.role}</p>
            </div>

            <ChevronDownIcon
              className={`h-4 w-4 text-secondary-500 transition-transform ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
              </div>

              <a
                href="#profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Profile
              </a>
              <a
                href="#settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Account Settings
              </a>
              <a
                href="#logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
