import React, { useState } from 'react';
import { ArrowLeft, Upload, X, LogOut, Package, ShoppingBag, Users, TrendingUp, Store, Settings, Plus, BarChart3, Image as ImageIcon } from 'lucide-react';

interface AddProductProps {
  onNavigate: (page: string) => void;
}

export function AddProduct({ onNavigate }: AddProductProps) {
  const [productImages, setProductImages] = useState<number[]>([]);

  return (
    <div className="bg-[#F0FDF4] min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                onClick={() => onNavigate('manageProducts')}
              >
                <ArrowLeft className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700 font-medium">Kembali</span>
              </button>
              <div>
                <div className="font-bold text-xl text-emerald-800">Tambah Produk Baru</div>
                <div className="text-xs text-gray-600">Payung Geulis Tasikmalaya</div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-right">
                <div className="text-sm text-gray-600">Login sebagai:</div>
                <div className="font-semibold text-gray-900">Admin Payung Geulis</div>
              </div>
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                onClick={() => onNavigate('sellerLogin')}
              >
                <LogOut className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700 font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Preview - Now First */}
          <div className="lg:order-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-6">
              <h3 className="font-bold text-gray-900 mb-4">Preview Produk</h3>
              
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-center text-amber-900 opacity-40">
                  <ImageIcon className="w-16 h-16 mx-auto mb-2" />
                  <p className="text-sm">Unggah Foto</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-lg text-gray-900">Nama Produk</h4>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-amber-700">Rp 0</span>
                  <span className="text-sm text-gray-500 line-through">Rp 0</span>
                </div>
                <p className="text-sm text-gray-600">Kategori: -</p>
                <p className="text-sm text-gray-600">Stok: 0 pcs</p>
              </div>

              <div className="space-y-2 pt-6 border-t border-gray-200">
                <button 
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  onClick={() => onNavigate('manageProducts')}
                >
                  Simpan Produk
                </button>
                <button 
                  className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
                  onClick={() => onNavigate('manageProducts')}
                >
                  Batal
                </button>
              </div>
            </div>
          </div>

          {/* Left - Form */}
          <div className="lg:col-span-2 lg:order-1 space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Informasi Dasar</h2>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Nama Produk <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Payung Geulis Motif Batik Merah"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      SKU <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="PG-001"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Kategori <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                      <option>Pilih Kategori</option>
                      <option>Payung Mini</option>
                      <option>Payung Sedang</option>
                      <option>Payung Besar</option>
                      <option>Custom Design</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Deskripsi Produk <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    placeholder="Jelaskan detail produk, bahan, keunggulan, dan informasi penting lainnya..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Product Images */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Foto Produk</h2>

              <div className="grid grid-cols-4 gap-4 mb-4">
                {productImages.map((img, index) => (
                  <div key={index} className="relative aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center group">
                    <span className="text-amber-900 opacity-40 text-3xl">☂️</span>
                    <button className="absolute top-2 right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-4 h-4" />
                    </button>
                    {index === 0 && (
                      <div className="absolute bottom-2 left-2 px-2 py-1 bg-emerald-600 text-white text-xs rounded-full font-medium">
                        Utama
                      </div>
                    )}
                  </div>
                ))}
                {productImages.length < 5 && (
                  <button 
                    onClick={() => setProductImages([...productImages, productImages.length])}
                    className="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
                  >
                    <Upload className="w-6 h-6 text-gray-400 group-hover:text-emerald-600" />
                    <span className="text-xs text-gray-500 group-hover:text-emerald-600">Upload</span>
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-600">Upload hingga 5 foto. Foto pertama akan menjadi foto utama. Format: JPG, PNG (Max 2MB)</p>
            </div>

            {/* Pricing & Stock */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Harga & Stok</h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Harga Jual <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">Rp</span>
                      <input
                        type="text"
                        placeholder="145.000"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Harga Coret (Opsional)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">Rp</span>
                      <input
                        type="text"
                        placeholder="200.000"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Stok <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="50"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Minimum Stok Alert
                    </label>
                    <input
                      type="number"
                      placeholder="10"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Spesifikasi Produk</h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Diameter <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="90"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent pr-12"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">cm</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Berat <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="450"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent pr-16"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">gram</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Bahan <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Kain Premium + Kayu Jati"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Warna/Motif Tersedia
                  </label>
                  <input
                    type="text"
                    placeholder="Merah, Biru, Hijau, Kuning (pisahkan dengan koma)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}