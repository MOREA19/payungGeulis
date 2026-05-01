import React from 'react';
import { ArrowLeft, Mail, Lock, Eye, Shield } from 'lucide-react';

interface SellerLoginProps {
  onNavigate: (page: string) => void;
}

export function SellerLogin({ onNavigate }: SellerLoginProps) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <div className="font-bold text-xl text-amber-800">Payung Geulis</div>
                <div className="text-xs text-gray-600">Dashboard Penjual</div>
              </div>
            </div>
            <button 
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-amber-700 transition-colors hover:bg-amber-50 rounded-lg"
              onClick={() => onNavigate('homepage')}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Toko</span>
            </button>
          </div>
        </div>
      </header>

      {/* Login Content */}
      <div className="flex items-center justify-center p-12">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Portal Penjual</h2>
                <p className="text-emerald-100 text-sm">
                  Kelola toko Payung Geulis Anda
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-8">
              <form className="space-y-6">
                {/* Email/Username */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email / Username <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="admin@payunggeulis.com"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      placeholder="Masukkan password"
                      className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none transition-colors"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Eye className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600" />
                    <span className="text-sm text-gray-700">Ingat saya</span>
                  </label>
                  <button className="text-sm text-emerald-700 hover:text-emerald-800 font-medium">
                    Lupa password?
                  </button>
                </div>

                {/* Login Button */}
                <button 
                  type="button"
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-600/30 transition-all"
                  onClick={() => onNavigate('sellerDashboard')}
                >
                  Masuk ke Dashboard
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Atau</span>
                  </div>
                </div>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-600">
                  Belum punya akun penjual?{' '}
                  <button className="text-emerald-700 font-semibold hover:text-emerald-800">
                    Daftar Sekarang
                  </button>
                </p>
              </form>

              {/* Info Box */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="text-xs text-blue-900">
                  <span className="font-medium">ℹ️ Informasi:</span> Halaman ini khusus untuk penjual/admin. Pembeli silakan gunakan login pembeli.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">Butuh bantuan?</p>
            <div className="flex justify-center gap-4">
              <button className="text-sm text-emerald-700 hover:text-emerald-800 font-medium">
                Hubungi Support
              </button>
              <span className="text-gray-400">•</span>
              <button className="text-sm text-emerald-700 hover:text-emerald-800 font-medium">
                Panduan Penjual
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}