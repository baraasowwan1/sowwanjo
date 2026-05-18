"use client";

import { useState } from 'react';
import { Plus, Edit2, Trash2, Tag, DollarSign, Package } from 'lucide-react';

const mockProducts = [
  { id: 1, name: 'Premium SEO Audit', price: 299.99, stock: 'Infinite', status: 'Active' },
  { id: 2, name: 'Consultation Hour', price: 150.00, stock: 'Infinite', status: 'Active' },
  { id: 3, name: 'Website Theme Pack', price: 49.99, stock: 150, status: 'Draft' },
];

export default function StoreManager() {
  const [products] = useState(mockProducts);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Store Manager</h1>
          <p className="text-sm text-gray-500">Manage your products, inventory, and orders.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Products</p>
            <p className="text-2xl font-bold text-gray-900">24</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900">$1,245.00</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
            <Tag className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Active Orders</p>
            <p className="text-2xl font-bold text-gray-900">8</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase">Product Name</th>
              <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase">Price</th>
              <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase">Stock</th>
              <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-medium text-gray-900">{product.name}</div>
                </td>
                <td className="py-4 px-6 text-gray-600">${product.price.toFixed(2)}</td>
                <td className="py-4 px-6 text-gray-600">{product.stock}</td>
                <td className="py-4 px-6">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${product.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {product.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors mr-2">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
