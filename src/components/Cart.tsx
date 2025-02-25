import React from 'react';
import { X } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function Cart({ items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="p-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 py-4 border-b">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              <button
                className="px-2 py-1 border rounded"
                onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                className="px-2 py-1 border rounded"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => onRemoveItem(item.id)}
            className="text-gray-500 hover:text-red-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ))}
      <div className="mt-4 text-right">
        <div className="text-lg font-semibold">
          Total: ${total.toFixed(2)}
        </div>
        <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}