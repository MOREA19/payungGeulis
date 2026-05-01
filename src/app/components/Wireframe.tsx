import React, { useState } from 'react';
import { Homepage } from './Homepage';
import { ProductDetail } from './ProductDetail';
import { Cart } from './Cart';
import { Checkout } from './Checkout';
import { CustomerLogin } from './CustomerLogin';
import { SellerLogin } from './SellerLogin';
import { SellerDashboard } from './SellerDashboard';
import { ManageProducts } from './ManageProducts';
import { AddProduct } from './AddProduct';
import { ManageOrders } from './ManageOrders';

export function Wireframe() {
  const [currentPage, setCurrentPage] = useState('homepage');

  const pages = {
    homepage: <Homepage onNavigate={setCurrentPage} />,
    product: <ProductDetail onNavigate={setCurrentPage} />,
    cart: <Cart onNavigate={setCurrentPage} />,
    checkout: <Checkout onNavigate={setCurrentPage} />,
    customerLogin: <CustomerLogin onNavigate={setCurrentPage} />,
    sellerLogin: <SellerLogin onNavigate={setCurrentPage} />,
    sellerDashboard: <SellerDashboard onNavigate={setCurrentPage} />,
    manageProducts: <ManageProducts onNavigate={setCurrentPage} />,
    addProduct: <AddProduct onNavigate={setCurrentPage} />,
    manageOrders: <ManageOrders onNavigate={setCurrentPage} />
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Navigation untuk preview wireframe */}
      <div className="mb-8 bg-white p-4 rounded-lg shadow-sm border-2 border-blue-500">
        <div className="space-y-3">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="font-semibold text-gray-700 w-full mb-2">Halaman Pembeli:</span>
            <button
              onClick={() => setCurrentPage('homepage')}
              className={`px-4 py-2 rounded ${currentPage === 'homepage' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Homepage
            </button>
            <button
              onClick={() => setCurrentPage('product')}
              className={`px-4 py-2 rounded ${currentPage === 'product' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Detail Produk
            </button>
            <button
              onClick={() => setCurrentPage('cart')}
              className={`px-4 py-2 rounded ${currentPage === 'cart' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Keranjang
            </button>
            <button
              onClick={() => setCurrentPage('checkout')}
              className={`px-4 py-2 rounded ${currentPage === 'checkout' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Checkout
            </button>
            <button
              onClick={() => setCurrentPage('customerLogin')}
              className={`px-4 py-2 rounded ${currentPage === 'customerLogin' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Login Pembeli
            </button>
          </div>
          
          <div className="flex gap-2 items-center flex-wrap border-t-2 border-gray-300 pt-3">
            <span className="font-semibold text-gray-700 w-full mb-2">Halaman Penjual:</span>
            <button
              onClick={() => setCurrentPage('sellerLogin')}
              className={`px-4 py-2 rounded ${currentPage === 'sellerLogin' ? 'bg-green-600 text-white' : 'bg-green-200 text-gray-700'}`}
            >
              Login Penjual
            </button>
            <button
              onClick={() => setCurrentPage('sellerDashboard')}
              className={`px-4 py-2 rounded ${currentPage === 'sellerDashboard' ? 'bg-green-600 text-white' : 'bg-green-200 text-gray-700'}`}
            >
              Dashboard Penjual
            </button>
            <button
              onClick={() => setCurrentPage('manageProducts')}
              className={`px-4 py-2 rounded ${currentPage === 'manageProducts' ? 'bg-green-600 text-white' : 'bg-green-200 text-gray-700'}`}
            >
              Kelola Produk
            </button>
            <button
              onClick={() => setCurrentPage('addProduct')}
              className={`px-4 py-2 rounded ${currentPage === 'addProduct' ? 'bg-green-600 text-white' : 'bg-green-200 text-gray-700'}`}
            >
              Tambah Produk
            </button>
            <button
              onClick={() => setCurrentPage('manageOrders')}
              className={`px-4 py-2 rounded ${currentPage === 'manageOrders' ? 'bg-green-600 text-white' : 'bg-green-200 text-gray-700'}`}
            >
              Kelola Pesanan
            </button>
          </div>
        </div>
      </div>

      {/* Wireframe Display */}
      <div className="bg-white rounded-lg shadow-lg border-4 border-gray-300">
        {pages[currentPage as keyof typeof pages]}
      </div>
    </div>
  );
}