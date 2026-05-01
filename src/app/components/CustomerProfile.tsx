import React, { useState } from 'react';
import { Search, ShoppingCart, User, ArrowLeft, Camera, Mail, Phone, MapPin, Calendar, Save, Lock, Eye, EyeOff, Package, Heart, LogOut } from 'lucide-react';
import { SearchModal } from './SearchModal';

interface CustomerProfileProps {
  onNavigate: (page: string) => void;
}

export function CustomerProfile({ onNavigate }: CustomerProfileProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <button 
                className="flex items-center gap-3 group"
                onClick={() => onNavigate('homepage')}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                  <span className="text-white font-bold text-xl">PG</span>
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                    Payung Geulis
                  </div>
                  <div className="text-xs text-gray-600">Tasikmalaya</div>
                </div>
              </button>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <button onClick={() => onNavigate('homepage')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                  Beranda
                </button>
                <button onClick={() => onNavigate('products')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                  Produk
                </button>
                <button onClick={() => onNavigate('about')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                  Tentang
                </button>
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button 
                  className="p-2 hover:bg-amber-50 rounded-lg transition-colors"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="w-5 h-5 text-gray-700" />
                </button>
                <button 
                  className="p-2 hover:bg-amber-50 rounded-lg transition-colors relative"
                  onClick={() => onNavigate('cart')}
                >
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    3
                  </span>
                </button>
                <button className="p-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg transition-all hover:shadow-lg">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <button 
            className="flex items-center gap-2 text-gray-700 hover:text-amber-700 transition-colors mb-8 group"
            onClick={() => onNavigate('homepage')}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Kembali ke Beranda</span>
          </button>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
                {/* Profile Header */}
                <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 p-6 text-white text-center relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/50">
                      <User className="w-12 h-12" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">John Doe</h3>
                    <p className="text-sm text-amber-100">john.doe@email.com</p>
                    <button className="mt-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 mx-auto">
                      <Camera className="w-4 h-4" />
                      Ubah Foto
                    </button>
                  </div>
                </div>

                {/* Menu */}
                <div className="p-4">
                  <button 
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                      activeTab === 'profile' 
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-amber-50'
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <User className="w-5 h-5" />
                    Profil Saya
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all mt-2 ${
                      activeTab === 'password' 
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-amber-50'
                    }`}
                    onClick={() => setActiveTab('password')}
                  >
                    <Lock className="w-5 h-5" />
                    Keamanan
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all mt-2 ${
                      activeTab === 'orders' 
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-amber-50'
                    }`}
                    onClick={() => setActiveTab('orders')}
                  >
                    <Package className="w-5 h-5" />
                    Pesanan Saya
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all mt-2 ${
                      activeTab === 'wishlist' 
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-amber-50'
                    }`}
                    onClick={() => setActiveTab('wishlist')}
                  >
                    <Heart className="w-5 h-5" />
                    Wishlist
                  </button>

                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <button 
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-all"
                      onClick={() => onNavigate('customerLogin')}
                    >
                      <LogOut className="w-5 h-5" />
                      Keluar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profil</h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Username
                        </label>
                        <input
                          type="text"
                          defaultValue="johndoe123"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            defaultValue="john.doe@email.com"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nomor Telepon <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            defaultValue="0812-3456-7890"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tanggal Lahir
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="date"
                            defaultValue="1990-01-15"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Jenis Kelamin
                        </label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors">
                          <option>Laki-laki</option>
                          <option>Perempuan</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Alamat Lengkap
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          rows={4}
                          defaultValue="Jl. Merdeka No. 123, RT 01/RW 05, Kelurahan Cihideung, Kecamatan Cihideung, Kota Tasikmalaya, Jawa Barat 46126"
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        Batal
                      </button>
                      <button className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <Save className="w-5 h-5" />
                        Simpan Perubahan
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Password Tab */}
              {activeTab === 'password' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Ubah Password</h2>
                  <p className="text-gray-600 mb-6">Pastikan password Anda kuat dan mudah diingat</p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password Lama <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showOldPassword ? "text" : "password"}
                          placeholder="Masukkan password lama"
                          className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowOldPassword(!showOldPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password Baru <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showNewPassword ? "text" : "password"}
                          placeholder="Masukkan password baru"
                          className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Minimal 8 karakter, kombinasi huruf dan angka</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Konfirmasi Password Baru <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Konfirmasi password baru"
                          className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        Batal
                      </button>
                      <button className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <Save className="w-5 h-5" />
                        Ubah Password
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Pesanan Saya</h2>

                  <div className="space-y-4">
                    {[
                      { id: '#ORD-12345', date: '25 Nov 2024', product: 'Payung Batik Parang', qty: 2, total: 290000, status: 'Dikirim' },
                      { id: '#ORD-12344', date: '20 Nov 2024', product: 'Payung Mini Bordir', qty: 1, total: 85000, status: 'Selesai' },
                      { id: '#ORD-12343', date: '15 Nov 2024', product: 'Payung Jumbo Classic', qty: 1, total: 185000, status: 'Selesai' },
                    ].map((order) => (
                      <div key={order.id} className="border-2 border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-bold text-gray-900">{order.id}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                order.status === 'Dikirim' 
                                  ? 'bg-purple-100 text-purple-700' 
                                  : 'bg-emerald-100 text-emerald-700'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">Rp {order.total.toLocaleString('id-ID')}</p>
                          </div>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 mb-1">{order.product}</p>
                          <p className="text-sm text-gray-600">Jumlah: {order.qty} item</p>
                        </div>
                        <div className="flex gap-3 mt-4">
                          <button className="flex-1 px-4 py-2 border-2 border-amber-600 text-amber-700 rounded-lg font-medium hover:bg-amber-50 transition-colors">
                            Lihat Detail
                          </button>
                          {order.status === 'Selesai' && (
                            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                              Beli Lagi
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Wishlist Saya</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { name: 'Payung Batik Kawung', price: 155000, stock: 'Tersedia' },
                      { name: 'Custom Design Premium', price: 225000, stock: 'Tersedia' },
                      { name: 'Payung Golf Premium', price: 195000, stock: 'Stok Menipis' },
                    ].map((item, index) => (
                      <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                        <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl mb-4 flex items-center justify-center">
                          <span className="text-4xl text-amber-900 opacity-40">☂️</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-2xl font-bold text-amber-700 mb-2">Rp {item.price.toLocaleString('id-ID')}</p>
                        <p className={`text-sm mb-4 ${item.stock === 'Tersedia' ? 'text-emerald-600' : 'text-orange-600'}`}>
                          {item.stock}
                        </p>
                        <div className="flex gap-3">
                          <button className="flex-1 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                            Tambah ke Keranjang
                          </button>
                          <button className="px-4 py-2 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">PG</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Payung Geulis</div>
                    <div className="text-xs text-gray-400">Tasikmalaya</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Kerajinan payung geulis khas Tasikmalaya dengan kualitas terbaik.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><button onClick={() => onNavigate('homepage')} className="hover:text-amber-500 transition-colors">Beranda</button></li>
                  <li><button onClick={() => onNavigate('products')} className="hover:text-amber-500 transition-colors">Produk</button></li>
                  <li><button onClick={() => onNavigate('about')} className="hover:text-amber-500 transition-colors">Tentang</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Kategori</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Payung Mini</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Payung Sedang</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Payung Besar</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Custom Design</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Kontak</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Email: info@payunggeulis.com</li>
                  <li>Telepon: 0265-123456</li>
                  <li>Alamat: Tasikmalaya, Jawa Barat</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 Payung Geulis Tasikmalaya. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onNavigate={onNavigate}
      />
    </>
  );
}
