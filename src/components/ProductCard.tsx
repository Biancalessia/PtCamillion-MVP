import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1">{product.rating}</span>
          <span className="text-gray-500 text-sm ml-2">({product.reviews} reviews)</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}