import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, User, Search, Minus, Plus, Star, Heart, Share2, Package, Shield, Truck, Menu } from 'lucide-react';
import { SearchModal } from './SearchModal';

interface ProductDetailProps {
  onNavigate: (page: string) => void;
}

export function ProductDetail({ onNavigate }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Merah');
  const [selectedImage, setSelectedImage] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Search Modal */}
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        onNavigate={onNavigate}
      />

      {/* Header - Same as Homepage */}
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
                className="text-amber-800 font-semibold border-b-2 border-amber-600 pb-1"
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
              <button 
                className="p-2 hover:bg-amber-50 rounded-lg transition-colors relative"
                onClick={() => onNavigate('cart')}
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button 
              className="hover:text-amber-700 transition-colors"
              onClick={() => onNavigate('homepage')}
            >
              Beranda
            </button>
            <span>/</span>
            <button className="hover:text-amber-700 transition-colors">Produk</button>
            <span>/</span>
            <span className="text-amber-700 font-medium">Detail Produk</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left - Images */}
          <div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl h-[500px] mb-4 flex items-center justify-center overflow-hidden relative group">
              <div className="text-center text-amber-900 opacity-30">
                <div className="text-7xl mb-4">☂️</div>
                <div className="text-xl font-semibold">Foto Produk Utama</div>
              </div>
              <button className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-all shadow-lg">
                <Heart className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedImage(item)}
                  className={`bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl h-24 flex items-center justify-center text-xs transition-all ${
                    selectedImage === item ? 'ring-2 ring-amber-600 scale-105' : 'hover:scale-105'
                  }`}
                >
                  <span className="text-amber-900 opacity-40">☂️</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Payung Geulis Motif Batik Tasikmalaya
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-600 text-amber-600" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.8 (124 ulasan)</span>
                  <span className="text-sm text-gray-600">|</span>
                  <span className="text-sm text-emerald-600 font-medium">Terjual 500+</span>
                </div>
              </div>
              <button className="p-2 hover:bg-amber-50 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-6 border border-amber-200">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-amber-700">Rp 145.000</span>
                <span className="text-lg text-gray-500 line-through">Rp 200.000</span>
                <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">-27%</span>
              </div>
              <p className="text-sm text-gray-600">Hemat Rp 55.000</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Deskripsi Produk</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Payung Geulis ini dibuat dengan kerajinan tangan berkualitas tinggi dari Tasikmalaya. 
                Motif batik tradisional yang indah dan tahan lama, cocok untuk berbagai acara formal 
                maupun casual. Dibuat oleh pengrajin berpengalaman dengan teknik turun temurun.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Spesifikasi</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Diameter</span>
                  <span className="font-medium text-gray-900">90 cm</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Bahan</span>
                  <span className="font-medium text-gray-900">Kain Premium + Kayu Jati</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Berat</span>
                  <span className="font-medium text-gray-900">450 gram</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Stok</span>
                  <span className="font-medium text-emerald-600">Tersedia (45 pcs)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Pilih Warna/Motif</h3>
              <div className="flex gap-3">
                {[
                  { name: 'Merah', color: 'bg-red-500' },
                  { name: 'Biru', color: 'bg-blue-500' },
                  { name: 'Hijau', color: 'bg-green-500' },
                  { name: 'Kuning', color: 'bg-yellow-500' }
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-amber-600 bg-amber-50'
                        : 'border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 ${color.color} rounded-full border-2 border-white shadow`}></div>
                      <span className="text-sm font-medium">{color.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Jumlah</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <div className="px-8 py-2 font-semibold min-w-[60px] text-center">{quantity}</div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">Stok tersedia: 45 pcs</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                className="flex-1 px-8 py-4 bg-white border-2 border-amber-600 text-amber-700 rounded-xl font-semibold hover:bg-amber-50 transition-all flex items-center justify-center gap-2"
                onClick={() => onNavigate('cart')}
              >
                <ShoppingCart className="w-5 h-5" />
                Tambah ke Keranjang
              </button>
              <button 
                className="flex-1 px-8 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 shadow-lg shadow-amber-600/30 transition-all"
                onClick={() => onNavigate('checkout')}
              >
                Beli Sekarang
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Package className="w-5 h-5 text-amber-600" />
                <span>Produk Original</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-amber-600" />
                <span>Garansi Kualitas</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="w-5 h-5 text-amber-600" />
                <span>Gratis Ongkir</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Produk Terkait</h2>
            <button className="text-amber-700 font-medium hover:text-amber-800 transition-colors">
              Lihat Semua →
            </button>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item} 
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-amber-800 opacity-30">
                    <div className="text-center">
                      <div className="text-4xl mb-2">☂️</div>
                      <div className="text-sm">Produk {item}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    Payung Geulis Motif {item}
                  </h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-amber-700">
                        Rp {125 + item * 10}.000
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-amber-600">
                      <Star className="w-4 h-4 fill-amber-600" />
                      <span className="font-semibold">4.{8 - (item % 3)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Same as Homepage */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PG</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Payung Geulis</div>
                  <div className="text-xs text-gray-400">Tasikmalaya</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kerajinan payung tradisional berkualitas tinggi dari Tasikmalaya, Jawa Barat.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Kategori</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Payung Mini</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Payung Sedang</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Payung Besar</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Custom Design</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Bantuan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Cara Pemesanan</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Pengiriman</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Kebijakan Retur</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Kontak</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>info@payunggeulis.com</li>
                <li>+62 821-xxxx-xxxx</li>
                <li>Tasikmalaya, Jawa Barat</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Payung Geulis Tasikmalaya. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <button className="hover:text-amber-400 transition-colors">Syarat & Ketentuan</button>
              <button className="hover:text-amber-400 transition-colors">Kebijakan Privasi</button>
              <button 
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                onClick={() => onNavigate('sellerLogin')}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Portal Penjual</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}