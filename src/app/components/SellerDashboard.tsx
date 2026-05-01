import React from 'react';
import { Package, ShoppingBag, DollarSign, Users, TrendingUp, LogOut, BarChart3, Clock, CheckCircle, AlertCircle, Plus, Store, Settings } from 'lucide-react';

interface SellerDashboardProps {
  onNavigate: (page: string) => void;
}

export function SellerDashboard({ onNavigate }: SellerDashboardProps) {
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
                <div className="font-bold text-xl text-emerald-800">Dashboard Penjual</div>
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
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium shadow-lg">
                  <BarChart3 className="w-5 h-5" />
                  Dashboard
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('manageProducts')}
                >
                  <Package className="w-5 h-5 text-gray-600" />
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
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-8 mb-8 border border-emerald-200 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Selamat Datang Kembali! 👋</h1>
            <p className="text-gray-600">
              Berikut ringkasan toko Payung Geulis Anda hari ini
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">245</div>
              <div className="text-sm text-gray-600">Total Pesanan</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+8%</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">Rp 45,2 Jt</div>
              <div className="text-sm text-gray-600">Total Pendapatan</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Active</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">124</div>
              <div className="text-sm text-gray-600">Total Produk</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+24</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1,328</div>
              <div className="text-sm text-gray-600">Total Pelanggan</div>
            </div>
          </div>

          {/* Recent Orders & Quick Stats */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Pesanan Terbaru</h2>
                <button 
                  className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                  onClick={() => onNavigate('manageOrders')}
                >
                  Lihat Semua →
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { id: '#ORD-12345', customer: 'John Doe', product: 'Payung Geulis Motif 1', status: 'pending', amount: 'Rp 145.000' },
                  { id: '#ORD-12344', customer: 'Jane Smith', product: 'Payung Geulis Motif 2', status: 'processing', amount: 'Rp 155.000' },
                  { id: '#ORD-12343', customer: 'Ahmad Yani', product: 'Payung Geulis Motif 3', status: 'shipped', amount: 'Rp 135.000' },
                  { id: '#ORD-12342', customer: 'Siti Nurhaliza', product: 'Payung Geulis Motif 4', status: 'completed', amount: 'Rp 165.000' }
                ].map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-900 opacity-40">☂️</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{order.id}</div>
                        <div className="text-sm text-gray-600">{order.customer} • {order.product}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 mb-1">{order.amount}</div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
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
                  </div>
                ))}
              </div>
            </div>

            {/* Order Status Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Status Pesanan</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Menunggu</div>
                      <div className="text-xs text-gray-600">Pending</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-yellow-600">12</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Diproses</div>
                      <div className="text-xs text-gray-600">Processing</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">8</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Dikirim</div>
                      <div className="text-xs text-gray-600">Shipped</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">15</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Selesai</div>
                      <div className="text-xs text-gray-600">Completed</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-emerald-600">210</div>
                </div>
              </div>
            </div>
          </div>

          {/* Low Stock Alert */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Stok Menipis</h2>
                  <p className="text-sm text-gray-600">Produk yang perlu segera di-restock</p>
                </div>
              </div>
              <button 
                className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                onClick={() => onNavigate('manageProducts')}
              >
                Kelola Produk →
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg h-32 mb-3 flex items-center justify-center">
                    <span className="text-amber-900 opacity-40 text-4xl">☂️</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Payung Motif {item}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-600 font-semibold">Stok: {3 + item} pcs</span>
                    <button className="text-xs text-emerald-600 hover:text-emerald-700 font-medium">
                      Restock
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}