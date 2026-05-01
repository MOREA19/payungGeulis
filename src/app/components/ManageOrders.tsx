import React, { useState } from 'react';
import { Search, Filter, Eye, CheckCircle, XCircle, Package, LogOut, Clock, Truck, BarChart3, ShoppingBag, Users, TrendingUp, Store, Settings, Plus } from 'lucide-react';

interface ManageOrdersProps {
  onNavigate: (page: string) => void;
}

export function ManageOrders({ onNavigate }: ManageOrdersProps) {
  const [selectedTab, setSelectedTab] = useState('all');

  return (
    <div className="bg-[#F0FDF4] min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <div className="font-bold text-xl text-emerald-800">Kelola Pesanan</div>
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
        {/* Sidebar */}
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
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('manageProducts')}
                >
                  <Package className="w-5 h-5 text-gray-600" />
                  Kelola Produk
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium shadow-lg">
                  <ShoppingBag className="w-5 h-5" />
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
          {/* Page Header with Stats */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Daftar Pesanan</h1>
            
            <div className="grid md:grid-cols-5 gap-4">
              <button 
                onClick={() => setSelectedTab('all')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedTab === 'all' 
                    ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-600' 
                    : 'bg-white border-gray-200 hover:border-emerald-300'
                }`}
              >
                <div className="text-sm text-gray-600 mb-2">Semua Pesanan</div>
                <div className="text-3xl font-bold text-gray-900">245</div>
              </button>

              <button 
                onClick={() => setSelectedTab('pending')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedTab === 'pending' 
                    ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-600' 
                    : 'bg-white border-gray-200 hover:border-yellow-300'
                }`}
              >
                <div className="text-sm text-gray-600 mb-2">Pending</div>
                <div className="text-3xl font-bold text-yellow-600">38</div>
              </button>

              <button 
                onClick={() => setSelectedTab('processing')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedTab === 'processing' 
                    ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-600' 
                    : 'bg-white border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-sm text-gray-600 mb-2">Diproses</div>
                <div className="text-3xl font-bold text-blue-600">52</div>
              </button>

              <button 
                onClick={() => setSelectedTab('shipped')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedTab === 'shipped' 
                    ? 'bg-gradient-to-br from-purple-50 to-violet-50 border-purple-600' 
                    : 'bg-white border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="text-sm text-gray-600 mb-2">Dikirim</div>
                <div className="text-3xl font-bold text-purple-600">89</div>
              </button>

              <button 
                onClick={() => setSelectedTab('completed')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedTab === 'completed' 
                    ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-600' 
                    : 'bg-white border-gray-200 hover:border-emerald-300'
                }`}
              >
                <div className="text-sm text-gray-600 mb-2">Selesai</div>
                <div className="text-3xl font-bold text-emerald-600">66</div>
              </button>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Cari Pesanan</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari ID pesanan, nama customer, produk..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Tanggal</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option>Semua Tanggal</option>
                  <option>Hari Ini</option>
                  <option>7 Hari Terakhir</option>
                  <option>30 Hari Terakhir</option>
                  <option>Custom</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Urutkan</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option>Terbaru</option>
                  <option>Terlama</option>
                  <option>Nilai Tertinggi</option>
                  <option>Nilai Terendah</option>
                </select>
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {[
              { id: '#ORD-12345', customer: 'John Doe', email: 'john@email.com', product: 'Payung Geulis Motif 1', qty: 2, total: 290000, status: 'pending', date: '25 Nov 2024, 14:30' },
              { id: '#ORD-12344', customer: 'Jane Smith', email: 'jane@email.com', product: 'Payung Geulis Motif 2', qty: 1, total: 155000, status: 'processing', date: '25 Nov 2024, 12:15' },
              { id: '#ORD-12343', customer: 'Ahmad Yani', email: 'ahmad@email.com', product: 'Payung Geulis Motif 3', qty: 3, total: 405000, status: 'shipped', date: '24 Nov 2024, 16:45' },
              { id: '#ORD-12342', customer: 'Siti Nurhaliza', email: 'siti@email.com', product: 'Payung Geulis Motif 4', qty: 1, total: 165000, status: 'completed', date: '24 Nov 2024, 09:20' },
              { id: '#ORD-12341', customer: 'Budi Santoso', email: 'budi@email.com', product: 'Payung Geulis Motif 5', qty: 2, total: 310000, status: 'pending', date: '23 Nov 2024, 18:10' }
            ].map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-900 opacity-40 text-2xl">☂️</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-900">{order.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          order.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                          order.status === 'shipped' ? 'bg-purple-100 text-purple-700' :
                          'bg-emerald-100 text-emerald-700'
                        }`}>
                          {order.status === 'pending' ? 'Pending' :
                           order.status === 'processing' ? 'Diproses' :
                           order.status === 'shipped' ? 'Dikirim' :
                           'Selesai'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-1">
                        <span className="font-medium text-gray-900">{order.customer}</span> • {order.email}
                      </div>
                      <div className="text-sm text-gray-600">
                        {order.product} • Qty: {order.qty}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      Rp {order.total.toLocaleString('id-ID')}
                    </div>
                    <div className="text-xs text-gray-600 flex items-center gap-1 justify-end">
                      <Clock className="w-3 h-3" />
                      {order.date}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition-colors">
                    <Eye className="w-4 h-4" />
                    Lihat Detail
                  </button>
                  {order.status === 'pending' && (
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                      <CheckCircle className="w-4 h-4" />
                      Terima Pesanan
                    </button>
                  )}
                  {order.status === 'processing' && (
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-50 text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition-colors">
                      <Truck className="w-4 h-4" />
                      Kirim Pesanan
                    </button>
                  )}
                  {order.status === 'shipped' && (
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition-colors">
                      <CheckCircle className="w-4 h-4" />
                      Tandai Selesai
                    </button>
                  )}
                  <button className="px-4 py-2.5 bg-red-50 text-red-700 rounded-lg font-medium hover:bg-red-100 transition-colors">
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Menampilkan <span className="font-semibold">1-5</span> dari <span className="font-semibold">245</span> pesanan
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
        </main>
      </div>
    </div>
  );
}