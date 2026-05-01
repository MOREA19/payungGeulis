import React from 'react';
import { Package, ShoppingBag, Users, TrendingUp, LogOut, BarChart3, Plus, Store, Settings, Search, Filter, Download, Eye, Mail, Phone } from 'lucide-react';

interface ManageCustomersProps {
  onNavigate: (page: string) => void;
}

export function ManageCustomers({ onNavigate }: ManageCustomersProps) {
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
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium shadow-lg">
                  <Users className="w-5 h-5" />
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Kelola Pelanggan</h1>
            <p className="text-gray-600">Lihat dan kelola data pelanggan Payung Geulis</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-emerald-600">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-600">Total Pelanggan</div>
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">2,847</div>
              <div className="text-xs text-emerald-600 mt-1">↑ 12% dari bulan lalu</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-600">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-600">Pelanggan Aktif</div>
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">1,456</div>
              <div className="text-xs text-blue-600 mt-1">↑ 8% dari bulan lalu</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-amber-600">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-600">Pelanggan Baru</div>
                <Users className="w-5 h-5 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">342</div>
              <div className="text-xs text-amber-600 mt-1">Bulan ini</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-600">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-600">Rata-rata Pembelian</div>
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">4.2x</div>
              <div className="text-xs text-purple-600 mt-1">Per pelanggan</div>
            </div>
          </div>

          {/* Filter & Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 flex gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari nama, email, atau nomor telepon..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-700">Filter</span>
                </button>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors">
                <Download className="w-5 h-5" />
                <span>Export Data</span>
              </button>
            </div>
          </div>

          {/* Customer Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Nama Pelanggan
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Kontak
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Total Pembelian
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Total Belanja
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { name: 'Budi Santoso', email: 'budi.santoso@email.com', phone: '0812-3456-7890', orders: 12, total: 'Rp 4.500.000', status: 'VIP' },
                    { name: 'Siti Nurhaliza', email: 'siti.nurhaliza@email.com', phone: '0813-4567-8901', orders: 8, total: 'Rp 2.850.000', status: 'Aktif' },
                    { name: 'Ahmad Dahlan', email: 'ahmad.dahlan@email.com', phone: '0821-5678-9012', orders: 5, total: 'Rp 1.750.000', status: 'Aktif' },
                    { name: 'Dewi Lestari', email: 'dewi.lestari@email.com', phone: '0822-6789-0123', orders: 3, total: 'Rp 950.000', status: 'Baru' },
                    { name: 'Eko Prasetyo', email: 'eko.prasetyo@email.com', phone: '0823-7890-1234', orders: 15, total: 'Rp 6.250.000', status: 'VIP' },
                    { name: 'Fitri Handayani', email: 'fitri.handayani@email.com', phone: '0831-8901-2345', orders: 6, total: 'Rp 2.100.000', status: 'Aktif' },
                  ].map((customer, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center">
                            <span className="font-semibold text-emerald-700">{customer.name[0]}</span>
                          </div>
                          <div className="font-medium text-gray-900">{customer.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="w-4 h-4" />
                            {customer.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-4 h-4" />
                            {customer.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-900 font-semibold">{customer.orders} pesanan</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-emerald-700 font-semibold">{customer.total}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          customer.status === 'VIP' 
                            ? 'bg-purple-100 text-purple-700' 
                            : customer.status === 'Aktif'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="flex items-center gap-2 px-4 py-2 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-medium">Detail</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Menampilkan <span className="font-semibold">1-6</span> dari <span className="font-semibold">2,847</span> pelanggan
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-white transition-colors">
                    Sebelumnya
                  </button>
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium">1</button>
                  <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-white transition-colors">2</button>
                  <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-white transition-colors">3</button>
                  <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-white transition-colors">
                    Selanjutnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
