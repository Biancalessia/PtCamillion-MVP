import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';

export default function Header({ cartItemsCount }: { cartItemsCount: number }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer" />
            <h1 className="text-2xl font-bold">ShopHub</h1>
          </div>
          
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center cursor-pointer">
              <User className="h-6 w-6" />
              <span className="ml-2">Account</span>
            </div>
            
            <div className="relative cursor-pointer">
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}