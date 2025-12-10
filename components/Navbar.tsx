import React, { useState } from 'react';
import { Search, Home, Store, Users, MessageCircle, Bell, Menu, Grid, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  onSearch: (term: string) => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearch, cartCount = 0, onCartClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    onSearch(val);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 h-14 flex items-center justify-between px-4">
      {/* Left: Logo & Search */}
      <div className="flex items-center gap-2 md:gap-4 w-1/3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl cursor-pointer">
          c
        </div>
        <div className="relative hidden md:flex items-center w-full max-w-[240px]">
          <Search className="absolute left-3 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search for gems..."
            className="bg-gray-100 hover:bg-gray-200 focus:bg-white text-gray-900 text-sm rounded-full block w-full pl-10 p-2.5 outline-none transition-all"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="md:hidden w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Middle: Navigation Icons (Hidden on mobile usually, but kept for vibe) */}
      <div className="hidden md:flex items-center justify-center gap-1 w-1/3 h-full">
        <NavIcon icon={<Home className="w-6 h-6" />} active={false} />
        <NavIcon icon={<Users className="w-6 h-6" />} active={false} />
        <NavIcon icon={<Store className="w-6 h-6" />} active={true} />
        <NavIcon icon={<Grid className="w-6 h-6" />} active={false} />
      </div>

      {/* Right: Profile & Actions */}
      <div className="flex items-center justify-end gap-2 w-1/3">
        <div className="hidden md:flex font-semibold text-sm mr-2 cursor-pointer hover:bg-gray-100 p-2 rounded-full">
            Connect Wallet
        </div>
        
        {/* Cart Icon */}
        <div className="relative" onClick={onCartClick}>
          <CircleButton icon={<ShoppingCart className="w-5 h-5" />} />
          {cartCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center pointer-events-none">
              {cartCount}
            </div>
          )}
        </div>

        <CircleButton icon={<MessageCircle className="w-5 h-5" />} />
        <CircleButton icon={<Bell className="w-5 h-5" />} />
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden cursor-pointer border border-gray-200">
             <img src="https://pbs.twimg.com/media/G70MaiEaIAA5dqg?format=jpg&name=large" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

const NavIcon: React.FC<{ icon: React.ReactNode; active?: boolean }> = ({ icon, active }) => (
  <div className={`h-[90%] w-24 flex items-center justify-center rounded-lg cursor-pointer relative group ${active ? 'border-b-4 border-blue-600' : 'hover:bg-gray-100'}`}>
    <div className={`${active ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'}`}>
      {icon}
    </div>
  </div>
);

const CircleButton: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center cursor-pointer text-gray-900 transition-colors">
    {icon}
  </div>
);