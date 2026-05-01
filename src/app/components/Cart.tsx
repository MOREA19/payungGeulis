import React from 'react';
import { ArrowLeft, ShoppingCart, User, Search, Trash2, Minus, Plus, Tag } from 'lucide-react';
import { SearchModal } from './SearchModal';

interface CartProps {
  onNavigate: (page: string) => void;
}

export function Cart({ onNavigate }: CartProps) {
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Search Modal */}
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <div className="font-bold text-xl text-amber-800">Payung Geulis</div>
                <div className="text-xs text-gray-600">Tasikmalaya</div>
              </div>
            </div>
            
            <nav className="hidden md:flex gap-8">
              <button 
                className="text-gray-700 hover:text-amber-800 transition-colors"
                onClick={() => onNavigate('homepage')}
              >
                Beranda
              </button>
              <button 
                className="text-gray-700 hover:text-amber-800 transition-colors"
                onClick={() => onNavigate('products')}
              >
                Produk
              </button>
              <button 
                className="text-gray-700 hover:text-amber-800 transition-colors"
                onClick={() => onNavigate('about')}
              >
                Tentang
              </button>
            </nav>

            <div className="flex gap-3">
              <button className="p-2 hover:bg-amber-50 rounded-lg transition-colors" onClick={() => setSearchOpen(true)}>
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 bg-amber-50 rounded-lg relative">
                <ShoppingCart className="w-5 h-5 text-amber-700" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              <button 
                className="p-2 hover:bg-amber-50 rounded-lg transition-colors"
                onClick={() => onNavigate('customerProfile')}
              >
                <User className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-amber-700" />
            <h1 className="text-2xl font-bold text-gray-900">Keranjang Belanja</h1>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">3 item</span>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-6">
                  {/* Checkbox */}
                  <div className="flex items-start pt-2">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-600" defaultChecked />
                  </div>

                  {/* Product Image */}
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-center text-amber-800 opacity-40">
                      <div className="text-3xl mb-1">☂️</div>
                      <div className="text-xs">Produk {item}</div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          Payung Geulis Motif Batik {item}
                        </h3>
                        <p className="text-sm text-gray-600">Warna: Merah | Ukuran: 100cm</p>
                      </div>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </button>
                    </div>

                    <div className="flex items-end justify-between mt-4">
                      {/* Price */}
                      <div>
                        <div className="text-xs text-gray-500 line-through">Rp 200.000</div>
                        <div className="text-xl font-bold text-amber-700">Rp {125 + item * 10}.000</div>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600">Jumlah:</span>
                        <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                          <button className="px-3 py-2 hover:bg-gray-50 transition-colors">
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <div className="px-6 py-2 border-x-2 border-gray-200 font-semibold">{item}</div>
                          <button className="px-3 py-2 hover:bg-gray-50 transition-colors">
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex justify-between pt-4">
              <button 
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
                onClick={() => onNavigate('homepage')}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Lanjut Belanja</span>
              </button>
              <button className="px-6 py-3 text-red-600 font-medium hover:bg-red-50 rounded-xl transition-all">
                Hapus Semua
              </button>
            </div>
          </div>

          {/* Right - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Belanja</h3>

              {/* Promo Code */}
              <div className="mb-6 p-4 bg-amber-50 border-2 border-amber-200 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-amber-700" />
                  <span className="text-sm font-semibold text-amber-900">Punya Kode Promo?</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Masukkan kode"
                    className="flex-1 px-4 py-2 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none text-sm"
                  />
                  <button className="px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors">
                    Pakai
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal (3 item)</span>
                  <span className="font-semibold">Rp 405.000</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Ongkos Kirim</span>
                  <span className="font-semibold">Rp 15.000</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Diskon</span>
                  <span className="font-semibold">- Rp 20.000</span>
                </div>
              </div>

              {/* Total */}
              <div className="mb-6 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Total Pembayaran</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-700">Rp 400.000</div>
                    <div className="text-xs text-gray-600">Hemat Rp 20.000</div>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                className="w-full py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 shadow-lg shadow-amber-600/30 transition-all mb-3"
                onClick={() => onNavigate('checkout')}
              >
                Lanjut ke Checkout
              </button>

              <p className="text-xs text-center text-gray-600">
                Pilih produk untuk melanjutkan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}