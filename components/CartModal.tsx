import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface CartModalProps {
  cart: Product[];
  onClose: () => void;
  onRemove: (index: number) => void;
}

export const CartModal: React.FC<CartModalProps> = ({ cart, onClose, onRemove }) => {
  
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
        onClose();
    }
  };

  const handleCheckout = () => {
      if (cart.length === 0) return;
      alert("Connecting to Solana Wallet... \n\nError: Network Congested. Please try again later (or buy more $COUCH).");
  };

  // Group totals by currency
  const totals = cart.reduce((acc, item) => {
      const key = item.currency;
      if (!acc[key]) acc[key] = 0;
      acc[key] += item.price;
      return acc;
  }, {} as Record<string, number>);

  return (
    <div 
        className="fixed inset-0 z-[100] bg-black/50 flex justify-end"
        onClick={handleOverlayClick}
    >
      <div className="bg-white w-full max-w-md h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" />
                Your Bags
            </h2>
            <button onClick={onClose} className="hover:bg-gray-200 p-2 rounded-full">
                <X className="w-6 h-6 text-gray-500" />
            </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                    <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                    <p className="text-lg font-medium">Your bag is empty</p>
                    <p className="text-sm">Go find some gems!</p>
                </div>
            ) : (
                cart.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="flex gap-4 p-3 border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.condition}</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="font-bold text-lg">
                                    {item.currency === 'SOL' ? '◎' : item.currency === '$COUCH' ? '' : '$'}
                                    {item.price.toLocaleString()}
                                    {item.currency === '$COUCH' && ' COUCH'}
                                </span>
                                <button 
                                    onClick={() => onRemove(idx)}
                                    className="text-red-500 hover:bg-red-50 p-1.5 rounded-full transition-colors"
                                    title="Remove from cart"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="mb-4 space-y-1">
                {Object.entries(totals).map(([currency, total]) => (
                    <div key={currency} className="flex justify-between items-center text-lg font-bold">
                        <span>Total ({currency}):</span>
                        <span>
                            {currency === 'SOL' ? '◎' : currency === '$COUCH' ? '' : '$'}
                            {total.toLocaleString()}
                            {currency === '$COUCH' && ' COUCH'}
                        </span>
                    </div>
                ))}
                {cart.length === 0 && <div className="text-center text-gray-400 italic">No items selected</div>}
            </div>
            <button 
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className={`w-full font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2
                    ${cart.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'}
                `}
            >
                Checkout
            </button>
        </div>
      </div>
    </div>
  );
};