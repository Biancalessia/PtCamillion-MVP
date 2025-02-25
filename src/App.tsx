import React, { useState } from 'react';
import { Product, CartItem } from './types';
import { products } from './data/products';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems =>
      quantity === 0
        ? prevItems.filter(item => item.id !== id)
        : prevItems.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
          
          <div className="w-96 hidden lg:block">
            <div className="bg-white rounded-lg shadow-md sticky top-24">
              <h2 className="text-xl font-semibold p-4 border-b">Shopping Cart</h2>
              <Cart
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;