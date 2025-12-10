import React from 'react';
import { ShoppingBag, Tag, User, Bell, Armchair, Sofa, Bed, Search, Rocket, Flame, TrendingDown, Wallet } from 'lucide-react';
import { CA, X_COMMUNITY, PUMP_FUN_LINK } from '../constants';

interface SidebarProps {
  onCategorySelect: (category: string) => void;
  onListClick: () => void;
  onCartClick?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onCategorySelect, onListClick, onCartClick }) => {
  const copyToClipboard = () => {
      navigator.clipboard.writeText(CA);
      alert("CA copied to clipboard!");
  }

  const openX = () => {
      window.open(X_COMMUNITY, '_blank');
  }

  const openPump = () => {
      window.open(PUMP_FUN_LINK, '_blank');
  }

  return (
    <div className="hidden lg:flex flex-col w-[360px] h-[calc(100vh-56px)] overflow-y-auto sticky top-14 p-4 border-r border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Solana Market</h2>
        <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
            <Search className="w-5 h-5 text-gray-900" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mb-6">
        <button 
          onClick={onListClick}
          className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-2 px-4 rounded-full text-sm transition-colors"
        >
          List Item
        </button>
        <button 
            onClick={onCartClick}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-full text-sm transition-colors"
        >
          Your Bags
        </button>
      </div>

      <div className="border-b border-gray-300 mb-4" />

      {/* Contract Address Box */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
        <h3 className="text-blue-800 font-semibold mb-2 text-sm">Official $COUCH CA</h3>
        <p className="text-xs text-gray-600 break-all font-mono bg-white p-2 rounded border border-blue-100 select-all mb-2">
            {CA}
        </p>
        <div className="flex gap-2 mb-2">
            <button 
                onClick={copyToClipboard}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded text-sm transition-colors"
            >
                Copy CA
            </button>
             <button 
                onClick={openX}
                className="flex-1 bg-black hover:bg-gray-800 text-white font-bold py-1.5 px-3 rounded text-sm transition-colors"
            >
                Join Community
            </button>
        </div>
        
        {/* Pump.fun Button */}
        <button 
            onClick={openPump}
            className="w-full flex items-center justify-center gap-2 bg-[#181C14] hover:bg-[#2C3325] text-white font-bold py-2 px-3 rounded text-sm transition-colors mt-2"
        >
            {/* Simple CSS Pill Logo */}
            <div className="w-6 h-4 bg-[#86EFAC] rounded-full border-2 border-[#181C14] shadow-[0_0_0_1px_#86EFAC]"></div>
            Buy on Pump.fun
        </button>
      </div>

      {/* Filters */}
      <div className="space-y-1">
        <h3 className="font-semibold text-lg px-2 mb-2">Filters</h3>
        <SidebarItem icon={<ShoppingBag className="w-5 h-5" />} label="Browse Gems" active />
        <SidebarItem icon={<Bell className="w-5 h-5" />} label="Price Alerts" />
        <SidebarItem icon={<Wallet className="w-5 h-5" />} label="Aping (Buying)" />
        <SidebarItem icon={<Tag className="w-5 h-5" />} label="Jeeting (Selling)" />
      </div>

       <div className="border-b border-gray-300 my-4" />

       <div className="space-y-1">
        <h3 className="font-semibold text-lg px-2 mb-2">Collections</h3>
        <SidebarItem icon={<Rocket className="w-5 h-5" />} label="Mooning" />
        <SidebarItem icon={<Armchair className="w-5 h-5" />} label="Whale Lounges" />
        <SidebarItem icon={<TrendingDown className="w-5 h-5" />} label="Dip Sales" />
        <SidebarItem icon={<Flame className="w-5 h-5" />} label="Burned Furniture" />
      </div>
      
      <div className="mt-auto pt-6 text-xs text-gray-400">
        Privacy · Terms · Smart Contracts · Gas Fees · Cookies · Solana © 2024
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100 text-gray-900'}`}>
    <div className={`p-2 rounded-full ${active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
        {icon}
    </div>
    <span className="font-medium text-sm md:text-base">{label}</span>
  </div>
);