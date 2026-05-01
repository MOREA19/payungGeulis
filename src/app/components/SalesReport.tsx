import React from 'react';
import { Package, ShoppingBag, Users, TrendingUp, LogOut, BarChart3, Plus, Store, Settings, Download, Calendar, DollarSign, ArrowUp, ArrowDown } from 'lucide-react';

interface SalesReportProps {
  onNavigate: (page: string) => void;
}

export function SalesReport({ onNavigate }: SalesReportProps) {
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
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium shadow-lg">
                  <TrendingUp className="w-5 h-5" />
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
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Laporan Penjualan</h1>
                <p className="text-gray-600">Analisis performa penjualan Payung Geulis</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-white transition-colors">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-700">Filter Periode</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg">
                  <Download className="w-5 h-5" />
                  <span>Export Laporan</span>
                </button>
              </div>
            </div>
          </div>

          {/* Time Period Selector */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium">
                Hari Ini
              </button>
              <button className="px-6 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Minggu Ini
              </button>
              <button className="px-6 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Bulan Ini
              </button>
              <button className="px-6 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Tahun Ini
              </button>
              <button className="px-6 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Custom
              </button>
            </div>
          </div>

          {/* Revenue Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-emerald-600">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-600">Total Pendapatan</div>
                <DollarSign className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Rp 45.8M</div>
              <div className="flex items-center gap-1 text-xs text-emerald-600">
                <ArrowUp className="w-3 h-3" />
                <span>23.5% dari bulan lalu</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-600">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-600">Total Pesanan</div>
                <ShoppingBag className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1,284</div>
              <div className="flex items-center gap-1 text-xs text-blue-600">
                <ArrowUp className="w-3 h-3" />
                <span>18.2% dari bulan lalu</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-amber-600">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-600">Rata-rata Order</div>
                <TrendingUp className="w-5 h-5 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Rp 357K</div>
              <div className="flex items-center gap-1 text-xs text-amber-600">
                <ArrowUp className="w-3 h-3" />
                <span>12.8% dari bulan lalu</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-600">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-600">Produk Terjual</div>
                <Package className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2,847</div>
              <div className="flex items-center gap-1 text-xs text-purple-600">
                <ArrowUp className="w-3 h-3" />
                <span>15.3% dari bulan lalu</span>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Sales Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Grafik Penjualan</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {[65, 78, 85, 72, 90, 88, 95, 82, 76, 89, 92, 88].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-gradient-to-t from-emerald-600 to-teal-500 rounded-t-lg transition-all hover:from-emerald-700 hover:to-teal-600 cursor-pointer"
                      style={{ height: `${height}%` }}
                    />
                    <div className="text-xs text-gray-500">{index + 1}</div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-center text-gray-500 mt-4">12 Bulan Terakhir</div>
            </div>

            {/* Category Performance */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Performa Kategori</h3>
              <div className="space-y-4">
                {[
                  { category: 'Payung Batik', sales: 'Rp 18.5M', percentage: 85, color: 'emerald' },
                  { category: 'Payung Mini', sales: 'Rp 12.3M', percentage: 65, color: 'blue' },
                  { category: 'Payung Jumbo', sales: 'Rp 9.8M', percentage: 55, color: 'amber' },
                  { category: 'Custom Design', sales: 'Rp 5.2M', percentage: 35, color: 'purple' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{item.category}</span>
                      <span className="text-sm font-bold text-gray-900">{item.sales}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full transition-all`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Produk Terlaris</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Ranking</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Produk</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Terjual</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Pendapatan</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Pertumbuhan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { rank: 1, name: 'Payung Batik Parang', sold: 458, revenue: 'Rp 15.4M', growth: 23.5 },
                    { rank: 2, name: 'Payung Mini Bordir', sold: 392, revenue: 'Rp 9.8M', growth: 18.2 },
                    { rank: 3, name: 'Payung Batik Mega Mendung', sold: 347, revenue: 'Rp 15.6M', growth: 15.8 },
                    { rank: 4, name: 'Payung Jumbo Classic', sold: 289, revenue: 'Rp 18.8M', growth: 12.4 },
                    { rank: 5, name: 'Custom Design Premium', sold: 234, revenue: 'Rp 17.6M', growth: 9.7 },
                  ].map((product) => (
                    <tr key={product.rank} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                          product.rank === 1 ? 'bg-gradient-to-br from-amber-400 to-yellow-500' :
                          product.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                          product.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                          'bg-gradient-to-br from-emerald-500 to-teal-600'
                        }`}>
                          {product.rank}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{product.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">{product.sold} unit</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-emerald-700">{product.revenue}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-emerald-600 font-medium">
                          <ArrowUp className="w-4 h-4" />
                          <span>{product.growth}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
