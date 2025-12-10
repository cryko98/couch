import React from 'react';
import { Product } from '../types';
import { MapPin } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
        className="group cursor-pointer flex flex-col gap-2 p-2 hover:bg-gray-200 rounded-lg transition-colors"
        onClick={() => onClick(product)}
    >
      {/* 
        Using scale-110 and object-cover to visually "crop" the white borders/text 
        from the provided images without altering the original file 
      */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-300">
        <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-300" 
        />
        {product.isSponsored && (
            <div className="absolute top-2 left-2 bg-white/90 text-gray-600 text-xs px-2 py-1 rounded font-semibold shadow-sm z-10">
                Promoted
            </div>
        )}
        {product.isCommunity && (
            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold shadow-sm z-10">
                Community
            </div>
        )}
      </div>
      
      <div className="flex flex-col gap-0.5">
        <div className="font-bold text-lg leading-tight text-gray-900">
            {product.price === 0 ? 'FREE' : `${product.currency === 'SOL' ? '◎' : '$'} ${product.price.toLocaleString()}`}
             {product.currency === '$COUCH' && <span className="text-xs text-gray-500 ml-1 font-normal">COUCH</span>}
        </div>
        <div className="font-semibold text-gray-900 text-base line-clamp-2 leading-snug">
            {product.title}
        </div>
        <div className="text-gray-500 text-sm font-normal flex items-center gap-1">
             {product.location}
        </div>
        {product.isSponsored && (
             <div className="text-gray-500 text-xs mt-1">
                Promoted by $COUCH Devs
             </div>
        )}
      </div>
    </div>
  );
};