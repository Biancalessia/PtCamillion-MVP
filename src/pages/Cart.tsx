import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrello</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Il carrello è vuoto</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 py-4 last:border-0"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
                    <p className="text-gray-600">€{item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="flex justify-between text-lg font-medium">
              <span>Totale</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700">
              Procedi all'acquisto
            </button>
          </div>
        </div>
      )}
    </div>
  );
}