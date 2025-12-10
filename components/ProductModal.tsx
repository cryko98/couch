import React from 'react';
import { Product } from '../types';
import { X, Share2, MoreHorizontal, Heart, MessageCircle, Flag, ShoppingCart } from 'lucide-react';
import { CA, X_COMMUNITY } from '../constants';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart?: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
        onClose();
    }
  };

  const handleAction = () => {
    if (product.isSponsored) {
        navigator.clipboard.writeText(CA);
        alert("Contract Address Copied: " + CA);
    } else if (product.isCommunity) {
        window.open(X_COMMUNITY, '_blank');
    } else {
        alert("Asking seller if this couch is still available...");
    }
  };

  const btnText = product.isSponsored ? "Copy CA" : product.isCommunity ? "Join X Community" : "Message";

  return (
    <div 
        className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
        onClick={handleOverlayClick}
    >
      <div className="bg-white w-full max-w-5xl h-[90vh] rounded-lg overflow-hidden flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button Mobile */}
        <button onClick={onClose} className="absolute top-4 left-4 z-10 md:hidden bg-white/80 p-2 rounded-full">
            <X className="w-6 h-6" />
        </button>

        {/* Left: Image */}
        <div className="flex-1 bg-black flex items-center justify-center relative bg-gray-100">
            <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-full max-w-full object-contain"
            />
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-[360px] lg:w-[400px] flex flex-col bg-white border-l border-gray-200 overflow-y-auto h-full">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
                <div className="flex gap-4">
                    <button onClick={onClose} className="hover:bg-gray-100 p-2 rounded-full">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                    <span className="font-semibold text-lg self-center">Marketplace</span>
                </div>
                <div className="flex gap-2">
                    <button className="hover:bg-gray-100 p-2 rounded-full"><Share2 className="w-5 h-5" /></button>
                    <button className="hover:bg-gray-100 p-2 rounded-full"><MoreHorizontal className="w-5 h-5" /></button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 flex-1">
                <div>
                    <h1 className="text-2xl font-bold mb-1">{product.title}</h1>
                    <div className="text-xl font-semibold mb-2">
                        {product.price === 0 ? 'FREE' : `${product.currency === 'SOL' ? '◎' : '$'} ${product.price.toLocaleString()}`}
                        {product.currency === '$COUCH' && <span className="text-sm text-gray-500 ml-1">COUCH</span>}
                    </div>
                    <div className="text-xs text-gray-500">
                        Listed {product.timeAgo} in {product.location}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <button 
                            onClick={handleAction}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                            {btnText}
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 p-3 rounded-lg text-gray-800">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                    <button 
                        onClick={onAddToCart}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors border border-gray-300"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                    </button>
                </div>

                {product.isSponsored && (
                     <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg text-sm text-blue-800 break-all font-mono">
                        {CA}
                     </div>
                )}

                <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-semibold mb-2">Details</h3>
                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <div className="text-gray-500">Condition</div>
                        <div className="font-medium">{product.condition}</div>
                        <div className="text-gray-500">Material</div>
                        <div className="font-medium">Fabric/Meme</div>
                        <div className="text-gray-500">Brand</div>
                        <div className="font-medium">Solana</div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                     <h3 className="font-semibold mb-2">Description</h3>
                     <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
                        {product.description}
                     </p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                     <h3 className="font-semibold mb-4">Seller Information</h3>
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${product.seller}`} alt="Seller" />
                        </div>
                        <div>
                            <div className="font-semibold">{product.seller}</div>
                            <div className="text-xs text-gray-500">Joined Facebook in 2024</div>
                        </div>
                        <button className="ml-auto text-sm font-semibold text-gray-900 bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded-lg">
                            Follow
                        </button>
                     </div>
                </div>
            </div>
            
            <div className="p-4 border-t border-gray-200 text-center">
                 <button className="flex items-center justify-center gap-2 w-full text-gray-600 hover:bg-gray-100 py-2 rounded-lg text-sm font-semibold">
                    <Flag className="w-4 h-4" /> Report Listing
                 </button>
            </div>
        </div>
      </div>
    </div>
  );
};