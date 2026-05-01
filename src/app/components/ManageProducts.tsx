import React, { useState } from 'react';
import { Search, Filter, Edit, Trash2, Package, LogOut, Plus, BarChart3, ShoppingBag, Users, TrendingUp, Store, Settings, AlertCircle, Eye } from 'lucide-react';

interface ManageProductsProps {
  onNavigate: (page: string) => void;
}

export function ManageProducts({ onNavigate }: ManageProductsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  return (
    <div className="bg-[#F0FDF4] min-h-screen">
      {/* Header - Same as Dashboard */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <div className="font-bold text-xl text-emerald-800">Kelola Produk</div>
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

      <div className="flex">
        {/* Sidebar - Same as Dashboard */}
        <aside className="w-72 bg-white border-r border-gray-200 min-h-screen sticky top-0">
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Menu Utama</h3>
              <div className="space-y-1">
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('sellerDashboard')}
                >
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                  Dashboard
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium shadow-lg">
                  <Package className="w-5 h-5" />
                  Kelola Produk
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('manageOrders')}
                >
                  <ShoppingBag className="w-5 h-5 text-gray-600" />
                  Kelola Pesanan
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('manageCustomers')}
                >
                  <Users className="w-5 h-5 text-gray-600" />
                  Kelola Pelanggan
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('salesReport')}
                >
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  Laporan Penjualan
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('settings')}
                >
                  <Settings className="w-5 h-5 text-gray-600" />
                  Pengaturan
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Akses Cepat</h3>
              <div className="space-y-1">
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors font-medium"
                  onClick={() => onNavigate('addProduct')}
                >
                  <Plus className="w-5 h-5" />
                  Tambah Produk
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('homepage')}
                >
                  <Store className="w-5 h-5 text-gray-600" />
                  Lihat Toko
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Daftar Produk</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Total 48 produk</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-red-600 font-medium">
                  <AlertCircle className="w-4 h-4" />
                  15 stok menipis
                </span>
              </div>
            </div>
            <button 
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              onClick={() => onNavigate('addProduct')}
            >
              <Plus className="w-5 h-5" />
              Tambah Produk Baru
            </button>
          </div>

          {/* Filters & Search */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Cari Produk</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari berdasarkan nama, SKU, atau kategori..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Kategori</label>
                <select 
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="all">Semua Kategori</option>
                  <option value="mini">Payung Mini</option>
                  <option value="sedang">Payung Sedang</option>
                  <option value="besar">Payung Besar</option>
                  <option value="custom">Custom Design</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Status Stok</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option>Semua Status</option>
                  <option>Tersedia</option>
                  <option>Stok Menipis</option>
                  <option>Habis</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Produk
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      SKU
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Kategori
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Harga
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Stok
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Terjual
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { id: 1, name: 'Payung Geulis Motif Batik 1', sku: 'PG-001', category: 'Payung Sedang', price: 145000, stock: 25, sold: 150, status: 'active' },
                    { id: 2, name: 'Payung Geulis Motif Batik 2', sku: 'PG-002', category: 'Payung Besar', price: 165000, stock: 8, sold: 89, status: 'active' },
                    { id: 3, name: 'Payung Geulis Motif Batik 3', sku: 'PG-003', category: 'Payung Mini', price: 125000, stock: 0, sold: 200, status: 'out_of_stock' },
                    { id: 4, name: 'Payung Geulis Motif Batik 4', sku: 'PG-004', category: 'Custom Design', price: 200000, stock: 45, sold: 67, status: 'active' },
                    { id: 5, name: 'Payung Geulis Motif Batik 5', sku: 'PG-005', category: 'Payung Sedang', price: 155000, stock: 5, sold: 120, status: 'active' },
                    { id: 6, name: 'Payung Geulis Motif Batik 6', sku: 'PG-006', category: 'Payung Besar', price: 175000, stock: 30, sold: 95, status: 'active' },
                    { id: 7, name: 'Payung Geulis Motif Batik 7', sku: 'PG-007', category: 'Payung Mini', price: 135000, stock: 3, sold: 180, status: 'active' },
                    { id: 8, name: 'Payung Geulis Motif Batik 8', sku: 'PG-008', category: 'Payung Sedang', price: 145000, stock: 50, sold: 75, status: 'active' }
                  ].map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                            <span className="text-amber-900 opacity-40 text-xl">☂️</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{product.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600 font-mono">{product.sku}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900">{product.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-900">
                          Rp {product.price.toLocaleString('id-ID')}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm font-semibold ${
                          product.stock === 0 ? 'text-red-600' :
                          product.stock < 10 ? 'text-yellow-600' :
                          'text-emerald-600'
                        }`}>
                          {product.stock} pcs
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{product.sold} pcs</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          product.status === 'active' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {product.status === 'active' ? 'Aktif' : 'Habis'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
                            <Eye className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                          </button>
                          <button className="p-2 hover:bg-emerald-50 rounded-lg transition-colors group">
                            <Edit className="w-4 h-4 text-gray-600 group-hover:text-emerald-600" />
                          </button>
                          <button className="p-2 hover:bg-red-50 rounded-lg transition-colors group">
                            <Trash2 className="w-4 h-4 text-gray-600 group-hover:text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Menampilkan <span className="font-semibold">1-8</span> dari <span className="font-semibold">48</span> produk
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}