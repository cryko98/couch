import React, { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import { Product } from '../types';

interface CreateListingModalProps {
  onClose: () => void;
  onSubmit: (product: Product) => void;
}

export const CreateListingModal: React.FC<CreateListingModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    currency: 'SOL',
    location: '',
    description: '',
    image: '', 
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      id: `local-${Date.now()}`,
      title: formData.title,
      price: parseFloat(formData.price) || 0,
      currency: formData.currency,
      location: formData.location,
      image: formData.image || 'https://via.placeholder.com/400?text=No+Image', // Fallback if empty
      description: formData.description,
      seller: 'You',
      timeAgo: 'Just now',
      condition: 'Used - Good',
      isCommunity: true
    };
    onSubmit(newProduct);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
        onClose();
    }
  };

  return (
    <div 
        className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
        onClick={handleOverlayClick}
    >
      <div className="bg-white w-full max-w-lg rounded-lg overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold text-center flex-1">List Item for Sale</h2>
            <button onClick={onClose} className="hover:bg-gray-100 p-2 rounded-full">
                <X className="w-6 h-6 text-gray-500" />
            </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input 
                    name="title" 
                    required 
                    value={formData.title} 
                    onChange={handleChange}
                    className="w-full bg-gray-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-blue-500" 
                    placeholder="e.g. Vintage Leather Couch" 
                />
            </div>

            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input 
                        name="price" 
                        type="number" 
                        step="0.01"
                        required 
                        value={formData.price} 
                        onChange={handleChange}
                        className="w-full bg-gray-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-blue-500" 
                        placeholder="0.00" 
                    />
                </div>
                <div className="w-1/3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                    <select 
                        name="currency" 
                        value={formData.currency} 
                        onChange={handleChange}
                        className="w-full bg-gray-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="SOL">SOL</option>
                        <option value="$COUCH">$COUCH</option>
                        <option value="USDC">USDC</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input 
                    name="location" 
                    required 
                    value={formData.location} 
                    onChange={handleChange}
                    className="w-full bg-gray-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-blue-500" 
                    placeholder="e.g. New York, NY" 
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photos</label>
                
                {/* Image Preview Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
                    {formData.image ? (
                        <div className="relative">
                            <img src={formData.image} alt="Preview" className="max-h-48 mx-auto rounded shadow-sm" />
                            <button 
                                type="button"
                                onClick={() => setFormData({...formData, image: ''})}
                                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full transform translate-x-1/2 -translate-y-1/2"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-2 py-4">
                            <ImageIcon className="w-8 h-8 text-gray-400" />
                            <div className="flex gap-2">
                                <button 
                                    type="button" 
                                    onClick={triggerFileInput}
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
                                >
                                    <Upload className="w-4 h-4" /> Upload Photo
                                </button>
                            </div>
                            <span className="text-xs text-gray-400">or paste URL below</span>
                        </div>
                    )}
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        accept="image/*" 
                        className="hidden" 
                    />
                </div>

                <input 
                    name="image" 
                    value={formData.image} 
                    onChange={handleChange}
                    className="w-full bg-gray-100 border-none rounded-lg p-3 mt-2 text-sm focus:ring-2 focus:ring-blue-500" 
                    placeholder="https://... (Image URL)" 
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                    name="description" 
                    rows={3} 
                    required 
                    value={formData.description} 
                    onChange={handleChange}
                    className="w-full bg-gray-100 border-none rounded-lg p-3 focus:ring-2 focus:ring-blue-500" 
                    placeholder="Describe the condition, smell, etc." 
                />
            </div>

            <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors mt-2"
            >
                Publish Listing
            </button>
        </form>
      </div>
    </div>
  );
};