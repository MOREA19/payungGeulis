import React from 'react';
import { Menu, Search, ShoppingCart, User, Award, Truck, Shield, Star, X } from 'lucide-react';
import { SearchModal } from './SearchModal';
import { aboutImageUrl, heroImageUrl, productList } from '../data/payungDataset';

interface HomepageProps {
  onNavigate: (page: string) => void;
}

export function Homepage({ onNavigate }: HomepageProps) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={onNavigate}
      />

      {/* Register Modal */}
      {registerOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Daftar Sekarang</h2>
                  <p className="text-sm text-amber-100 mt-1">Bergabung dengan keluarga Payung Geulis</p>
                </div>
                <button
                  onClick={() => setRegisterOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="contoh@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="08123456789"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Minimal 8 karakter"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">Kombinasi huruf, angka, dan simbol</p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konfirmasi Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Ulangi password Anda"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat
                </label>
                <textarea
                  rows={3}
                  placeholder="Masukkan alamat lengkap Anda (opsional)"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none resize-none"
                />
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-5 h-5 rounded border-gray-300 text-amber-600 mt-0.5"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  Saya setuju dengan{' '}
                  <button className="text-amber-600 hover:text-amber-700 font-medium">
                    Syarat & Ketentuan
                  </button>{' '}
                  dan{' '}
                  <button className="text-amber-600 hover:text-amber-700 font-medium">
                    Kebijakan Privasi
                  </button>
                </label>
              </div>

              {/* Register Button */}
              <button
                onClick={() => {
                  setRegisterOpen(false);
                  onNavigate('customerLogin');
                }}
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-600/30 transition-all"
              >
                Daftar Sekarang
              </button>

              {/* Login Link */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Sudah punya akun?{' '}
                  <button
                    onClick={() => {
                      setRegisterOpen(false);
                      onNavigate('customerLogin');
                    }}
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    Login di sini
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => onNavigate('homepage')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <div className="font-bold text-xl text-amber-800">Payung Geulis</div>
                <div className="text-xs text-gray-600">Tasikmalaya</div>
              </div>
            </button>
            
            <nav className="hidden md:flex gap-8">
              <button 
                onClick={() => onNavigate('homepage')}
                className="text-amber-800 font-semibold border-b-2 border-amber-600 pb-1"
              >
                Beranda
              </button>
              <button 
                onClick={() => onNavigate('products')}
                className="text-gray-700 hover:text-amber-800 transition-colors"
              >
                Produk
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="text-gray-700 hover:text-amber-800 transition-colors"
              >
                Tentang
              </button>
            </nav>

            <div className="flex gap-3 items-center">
              <button
                onClick={() => setRegisterOpen(true)}
                className="hidden md:block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 transition-all text-sm"
              >
                Daftar
              </button>
              <button
                className="p-2 hover:bg-amber-50 rounded-lg transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
              >
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-600/10 rounded-full mb-6">
                <span className="text-amber-800 text-sm font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Kerajinan Asli Tasikmalaya
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Payung Geulis<br/>
                <span className="text-amber-700">Karya Seni Tradisional</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Temukan keindahan payung tradisional berkualitas tinggi dengan motif batik khas Tasikmalaya. Dibuat dengan tangan oleh pengrajin berpengalaman.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-8 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 shadow-lg shadow-amber-600/30 transition-all hover:scale-105 duration-300"
                >
                  Lihat Koleksi
                </button>
                <button
                  onClick={() => setRegisterOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 duration-300"
                >
                  Daftar Sekarang
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-8 py-4 bg-white text-amber-700 rounded-xl font-semibold hover:bg-amber-50 border-2 border-amber-200 transition-all hover:scale-105 duration-300"
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden bg-white">
                <img
                  src={heroImageUrl}
                  alt="Payung Geulis Hero"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden bg-white">
                <img
                  src={aboutImageUrl}
                  alt="Proses Pembuatan Payung Geulis"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-600 rounded-full opacity-10 blur-3xl"></div>
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-amber-600/10 rounded-full mb-6">
                <span className="text-amber-800 text-sm font-semibold">Tentang Kami</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Warisan Budaya <span className="text-amber-700">Tasikmalaya</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Payung Geulis adalah kerajinan tradisional khas Tasikmalaya yang telah diwariskan secara turun-temurun sejak puluhan tahun lalu. "Geulis" dalam bahasa Sunda berarti cantik, yang mencerminkan keindahan dan keanggunan setiap payung yang kami buat.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Setiap payung dibuat dengan penuh dedikasi oleh pengrajin berpengalaman yang telah mewarisi keterampilan dari generasi ke generasi. Kami menggunakan teknik tradisional yang dikombinasikan dengan sentuhan modern untuk menghasilkan produk berkualitas tinggi.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Motif batik dan bordir yang menghiasi setiap payung merupakan karya seni yang dirancang khusus, mencerminkan kekayaan budaya Jawa Barat. Kami bangga melestarikan warisan budaya ini dan memperkenalkannya kepada dunia.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-amber-700 mb-2">30+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-amber-700 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Pengrajin Ahli</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-amber-700 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Handmade</div>
                </div>
              </div>

              <button 
                onClick={() => onNavigate('products')}
                className="px-8 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 shadow-lg shadow-amber-600/30 transition-all"
              >
                Lihat Produk Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-600/10 rounded-full mb-4">
              <span className="text-amber-800 text-sm font-semibold">Koleksi Terbaru</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Produk Pilihan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai pilihan payung geulis dengan motif batik yang indah dan kualitas terbaik
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {productList.slice(0, 8).map((product, index) => (
              <button
                key={product.id}
                onClick={() => onNavigate('product')}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="aspect-square relative overflow-hidden bg-white min-h-[260px]">
                  <img
                    src={product.imageUrl}
                    alt={product.alt}
                    className="block object-cover w-full h-full"
                  />
                  {product.stock < 10 && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-red-600 text-white text-xs rounded-full font-semibold">
                      Stok Terbatas
                    </div>
                  )}
                  {index < 2 && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-amber-600 text-white text-xs rounded-full font-semibold">
                      Terlaris
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-600 text-amber-600" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-700">{product.price}</span>
                    <span className="text-xs text-gray-500">Stok: {product.stock}</span>
                  </div>
                  <div className="mt-4 w-full py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold text-center group-hover:bg-amber-700 transition-colors">
                    Lihat Detail
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('products')}
              className="px-8 py-4 bg-white text-amber-700 rounded-xl font-semibold hover:bg-amber-50 border-2 border-amber-600 shadow-lg transition-all hover:scale-105 duration-300"
            >
              Lihat Semua Produk
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Kualitas Premium</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Setiap payung dibuat dengan bahan berkualitas tinggi dan pengerjaan detail oleh pengrajin ahli
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Pengiriman Aman</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kami mengemas produk dengan hati-hati dan mengirimkan ke seluruh Indonesia dengan aman
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Garansi Produk</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dapatkan garansi kualitas dan kemudahan retur jika produk tidak sesuai harapan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimoni Pelanggan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Apa kata mereka yang sudah merasakan kualitas Payung Geulis
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-600 text-amber-600" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Payung geulis yang saya beli sangat cantik dan berkualitas! Motif batiknya detail dan tahan lama. Sangat puas dengan pembelian ini."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-semibold">
                    P{item}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Pelanggan {item}</div>
                    <div className="text-sm text-gray-600">Pembeli Terverifikasi</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-6">
            <span className="text-white text-sm font-semibold">Penawaran Spesial</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Bergabunglah dengan Ribuan Pelanggan Puas Kami
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Daftar sekarang dan dapatkan diskon 10% untuk pembelian pertama Anda. Nikmati pengalaman berbelanja payung geulis terbaik!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setRegisterOpen(true)}
              className="px-10 py-5 bg-white text-amber-700 rounded-xl font-bold text-lg hover:bg-amber-50 shadow-2xl transition-all hover:scale-105 duration-300"
            >
              Daftar & Dapatkan Diskon 10%
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="px-10 py-5 bg-transparent text-white border-2 border-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 duration-300"
            >
              Lihat Produk
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-white/80 text-sm">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-white/80 text-sm">Rating Produk</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80 text-sm">Varian Produk</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li>📧 info@payunggeulis.com</li>
                <li>📱 +62 821-xxxx-xxxx</li>
                <li>📍 Tasikmalaya, Jawa Barat</li>
              </ul>
              <div className="flex gap-3 mt-6">
                <div className="w-10 h-10 bg-gray-700 hover:bg-amber-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span>f</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 hover:bg-amber-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span>ig</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 hover:bg-amber-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span>wa</span>
                </div>
              </div>
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
                <span>🔐</span>
                <span>Portal Penjual</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}