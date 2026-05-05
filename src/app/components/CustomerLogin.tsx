import React from 'react';
import { ArrowLeft, Mail, Lock, Eye, User, Phone, MapPin, X } from 'lucide-react';

interface CustomerLoginProps {
  onNavigate: (page: string) => void;
  onLogin: (email: string) => void;
}

export function CustomerLogin({ onNavigate, onLogin }: CustomerLoginProps) {
  const [showRegister, setShowRegister] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showForgotPassword, setShowForgotPassword] = React.useState(false);

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 min-h-screen">
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
                <div className="text-xs text-gray-600">Tasikmalaya</div>
              </div>
            </div>
            <button 
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-amber-700 transition-colors hover:bg-amber-50 rounded-lg"
              onClick={() => onNavigate('homepage')}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </button>
          </div>
        </div>
      </header>

      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4 py-8">
            <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full my-8">
            <div className="grid md:grid-cols-2">
              {/* Left - Register Form */}
              <div className="p-8 md:p-10 order-2 md:order-1 max-h-[85vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Daftar Akun</h3>
                    <p className="text-sm text-gray-600">Bergabung dengan Payung Geulis</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowRegister(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                <form className="space-y-3">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <User className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Mail className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        placeholder="nama@email.com"
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nomor Telepon <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Phone className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        placeholder="08123456789"
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Lock className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Minimal 8 karakter"
                        className="w-full pl-10 pr-10 py-2.5 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <Eye className={`w-4 h-4 ${showPassword ? 'text-amber-600' : 'text-gray-400'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Konfirmasi Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Lock className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Ulangi password"
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Alamat <span className="text-gray-400 text-xs">(opsional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3">
                        <MapPin className="w-4 h-4 text-gray-400" />
                      </div>
                      <textarea
                        rows={2}
                        placeholder="Alamat lengkap"
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none resize-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="register-terms"
                      className="w-4 h-4 rounded border-gray-300 text-amber-600 mt-0.5"
                    />
                    <label htmlFor="register-terms" className="text-xs text-gray-700">
                      Saya setuju dengan{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Syarat & Ketentuan akan ditampilkan');
                        }}
                        className="text-amber-700 hover:text-amber-800 font-medium underline"
                      >
                        Syarat & Ketentuan
                      </button>{' '}
                      dan{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Kebijakan Privasi akan ditampilkan');
                        }}
                        className="text-amber-700 hover:text-amber-800 font-medium underline"
                      >
                        Kebijakan Privasi
                      </button>
                    </label>
                  </div>

                  {/* Register Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowRegister(false);
                      onNavigate('homepage');
                    }}
                    className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 shadow-lg shadow-amber-600/30 transition-all text-sm"
                  >
                    Daftar Sekarang
                  </button>

                  {/* Divider */}
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-3 bg-white text-gray-500">Atau daftar dengan</span>
                    </div>
                  </div>

                  {/* Social Register */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowRegister(false);
                      onNavigate('homepage');
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
                  >
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="font-medium text-gray-700 text-xs">Daftar dengan Google</span>
                  </button>

                  {/* Login Link */}
                  <p className="text-center text-xs text-gray-600 pt-1">
                    Sudah punya akun?{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowRegister(false);
                      }}
                      className="text-amber-700 font-semibold hover:text-amber-800 underline"
                    >
                      Login di sini
                    </button>
                  </p>
                </form>
              </div>

              {/* Right - Benefits Section */}
              <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-orange-700 p-8 md:p-10 text-white relative overflow-hidden order-1 md:order-2 rounded-t-3xl md:rounded-l-none md:rounded-r-3xl max-h-[85vh] overflow-y-auto">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">Bergabung Sekarang!</h3>
                  <p className="text-amber-100 text-sm mb-6 leading-relaxed">
                    Dapatkan pengalaman belanja terbaik dan akses ke berbagai keuntungan eksklusif
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-3xl">🎁</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold">Diskon 10%</div>
                        <p className="text-xs text-amber-100">Pembelian pertama!</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm mb-2">✨ Benefit Member:</h4>
                    <div className="space-y-2">
                      {[
                        'Diskon 10% pembelian pertama',
                        'Gratis ongkir minimal belanja Rp 200.000',
                        'Akses promo eksklusif member',
                        'Point reward setiap transaksi',
                        'Notifikasi produk & promo terbaru',
                        'Customer service prioritas'
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-amber-900 text-[10px]">✓</span>
                          </div>
                          <span className="text-amber-50 text-xs leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="text-xs text-amber-100">
                      🔒 <span className="font-medium">Data Aman.</span> Informasi pribadi Anda dilindungi dengan enkripsi tingkat bank.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Lupa Password?</h2>
                  <p className="text-sm text-amber-100 mt-1">Reset password Anda</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Masukkan email yang terdaftar. Kami akan mengirimkan link untuk reset password Anda.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="nama@email.com"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setShowForgotPassword(false);
                    alert('Link reset password telah dikirim ke email Anda!');
                  }}
                  className="w-full py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 shadow-lg shadow-amber-600/30 transition-all"
                >
                  Kirim Link Reset
                </button>

                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all"
                >
                  Kembali ke Login
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="text-xs text-blue-900">
                  💡 <span className="font-medium">Tips:</span> Pastikan email yang Anda masukkan sudah terdaftar. Cek folder spam jika tidak menerima email dalam 5 menit.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Content */}
      <div className="flex items-center justify-center p-12">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Left - Welcome Section */}
            <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-orange-700 p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Selamat Datang Kembali!</h2>
                <p className="text-amber-100 mb-8 leading-relaxed">
                  Masuk ke akun Anda untuk melanjutkan pengalaman belanja payung geulis terbaik dari Tasikmalaya
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/10 border border-white/20 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-300/10 to-white/10"></div>
                    <div className="absolute -top-8 left-6 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-10 right-8 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <div className="relative w-32 h-32 bg-white/20 rounded-full border border-white/30 shadow-inner flex items-center justify-center">
                        <svg viewBox="0 0 120 120" className="w-24 h-24 text-amber-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 55C24 34 40 20 60 20C80 20 96 34 100 55" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                          <path d="M90 55C86 60 80 75 60 90C40 75 34 60 30 55" fill="currentColor" fillOpacity="0.15" />
                          <path d="M60 90V108" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                          <path d="M48 58C45 63 45 72 60 80C75 72 75 63 72 58" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                          <circle cx="60" cy="48" r="4" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-amber-100 font-medium">
                    Ilustrasi Payung Geulis
                  </p>
                  <p className="text-center text-xs text-amber-200 mt-2">
                    Kerajinan Tradisional Berkualitas
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold mb-3">✨ Keuntungan Member:</h3>
                  <div className="space-y-3">
                    {[
                      'Checkout lebih cepat & mudah',
                      'Lacak pesanan real-time',
                      'Simpan alamat pengiriman',
                      'Akses promo eksklusif',
                      'Wishlist produk favorit'
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-amber-900 text-xs">✓</span>
                        </div>
                        <span className="text-amber-50">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Login Form */}
            <div className="p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Login</h3>
                <p className="text-gray-600">
                  Masuk untuk melanjutkan belanja Anda
                </p>
              </div>

              <form className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="nama@email.com"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
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
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Masukkan password"
                      className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <Eye className={`w-5 h-5 ${showPassword ? 'text-amber-600' : 'text-gray-400'}`} />
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600" />
                    <span className="text-sm text-gray-700">Ingat saya</span>
                  </label>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowForgotPassword(true);
                    }}
                    className="text-sm text-amber-700 hover:text-amber-800 font-medium underline"
                  >
                    Lupa password?
                  </button>
                </div>

                {/* Login Button */}
                <button 
                  type="button"
                  className="w-full py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 shadow-lg shadow-amber-600/30 transition-all"
                  onClick={() => onNavigate('homepage')}
                >
                  Masuk
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Atau masuk dengan</span>
                  </div>
                </div>

                {/* Social Login */}
                <button
                  type="button"
                  onClick={() => onNavigate('homepage')}
                  className="w-full flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  <div className="w-5 h-5 bg-red-500 rounded"></div>
                  <span className="font-medium text-gray-700">Masuk dengan Google</span>
                </button>

                {/* Guest Checkout */}
                <button 
                  type="button"
                  className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all"
                  onClick={() => onNavigate('homepage')}
                >
                  Lanjut Tanpa Login
                </button>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-600">
                  Belum punya akun?{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowRegister(true);
                    }}
                    className="text-amber-700 font-semibold hover:text-amber-800 underline"
                  >
                    Daftar Sekarang
                  </button>
                </p>
              </form>

              {/* Security Info */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="text-xs text-blue-900">
                  🔒 <span className="font-medium">Transaksi Aman.</span> Data Anda dilindungi dengan enkripsi SSL 256-bit.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-semibold text-gray-900 mb-2">Transaksi Aman</h4>
              <p className="text-sm text-gray-600">Dilindungi SSL 256-bit</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="font-semibold text-gray-900 mb-2">Pengiriman Terpercaya</h4>
              <p className="text-sm text-gray-600">Ekspedisi terbaik</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-semibold text-gray-900 mb-2">CS 24/7</h4>
              <p className="text-sm text-gray-600">Siap membantu Anda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}