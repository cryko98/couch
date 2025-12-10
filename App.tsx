import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CreateListingModal } from './components/CreateListingModal';
import { CartModal } from './components/CartModal';
import { MOCK_COUCHES, CA } from './constants';
import { Product } from './types';
import { MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(MOCK_COUCHES);
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isListingModalOpen, setIsListingModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Browse all');

  const filteredProducts = useMemo(() => {
    return products.filter(p => 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const handleAddProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
    setIsListingModalOpen(false);
  };

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setSelectedProduct(null); // Close modal after adding
    // Optional: could show a toast here
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#050505]">
      <Navbar onSearch={setSearchTerm} cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
      
      <div className="flex max-w-[1920px] mx-auto">
        <Sidebar 
          onCategorySelect={setCategory} 
          onListClick={() => setIsListingModalOpen(true)}
          onCartClick={() => setIsCartOpen(true)}
        />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
                <h1 className="text-2xl font-bold mb-1">Today's Alpha</h1>
                <div className="flex items-center text-blue-600 text-sm cursor-pointer hover:underline">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="font-semibold">Solana Blockchain · High Volatility Area</span>
                </div>
            </div>
            
             <div className="mt-4 md:mt-0 hidden md:block">
                 {/* Optional banner or ticker if needed */}
                 <span className="text-xs text-gray-500 font-mono bg-white p-1 rounded border">CA: {CA.slice(0, 6)}...{CA.slice(-4)}</span>
             </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={setSelectedProduct} 
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
             <div className="text-center py-20 text-gray-500">
                <h3 className="text-xl font-bold mb-2">No gems found</h3>
                <p>The blockchain is congested. Try refreshing.</p>
             </div>
          )}

          <div className="mt-12 text-center text-gray-400 text-sm pb-8">
             <p className="mb-2">End of results</p>
             <p className="text-xs">Disclaimer: This is a memecoin website for $COUCH. These couches are digital assets. DYOR.</p>
          </div>
        </main>
      </div>

      {selectedProduct && (
        <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)}
            onAddToCart={() => addToCart(selectedProduct)}
        />
      )}

      {isListingModalOpen && (
        <CreateListingModal 
            onClose={() => setIsListingModalOpen(false)}
            onSubmit={handleAddProduct}
        />
      )}

      {isCartOpen && (
        <CartModal 
            cart={cart}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;