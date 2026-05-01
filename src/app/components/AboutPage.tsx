import React from 'react';
import { Search, ShoppingCart, User, Award, Truck, Shield } from 'lucide-react';
import { SearchModal } from './SearchModal';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Search Modal */}
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        onNavigate={onNavigate}
      />

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
                className="text-gray-700 hover:text-amber-800 transition-colors"
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
                className="text-amber-800 font-semibold border-b-2 border-amber-600 pb-1"
              >
                Tentang
              </button>
            </nav>

            <div className="flex gap-3">
              <button 
                className="p-2 hover:bg-amber-50 rounded-lg transition-colors"
                onClick={() => setSearchOpen(true)}
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
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-amber-600/10 rounded-full mb-6">
              <span className="text-amber-800 text-sm font-semibold">Tentang Kami</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Warisan Budaya <span className="text-amber-700">Tasikmalaya</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Payung Geulis adalah kerajinan tradisional khas Tasikmalaya yang telah diwariskan secara turun-temurun sejak puluhan tahun lalu. "Geulis" dalam bahasa Sunda berarti cantik, yang mencerminkan keindahan dan keanggunan setiap payung yang kami buat.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-amber-900 opacity-40">
                  <div className="text-center">
                    <div className="text-7xl mb-4">☂️</div>
                    <div className="text-2xl font-semibold">Proses Pembuatan</div>
                    <div className="text-sm mt-2">Payung Tradisional</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-600 rounded-full opacity-10 blur-3xl"></div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sejarah dan Tradisi</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Payung Geulis telah menjadi ikon kebanggaan Tasikmalaya sejak lama. Kerajinan ini berawal dari kebutuhan masyarakat akan payung yang tidak hanya berfungsi sebagai pelindung dari panas dan hujan, tetapi juga sebagai simbol keanggunan dan status sosial.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Setiap payung dibuat dengan penuh dedikasi oleh pengrajin berpengalaman yang telah mewarisi keterampilan dari generasi ke generasi. Kami menggunakan teknik tradisional yang dikombinasikan dengan sentuhan modern untuk menghasilkan produk berkualitas tinggi.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Motif batik dan bordir yang menghiasi setiap payung merupakan karya seni yang dirancang khusus, mencerminkan kekayaan budaya Jawa Barat. Kami bangga melestarikan warisan budaya ini dan memperkenalkannya kepada dunia.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="text-5xl font-bold text-amber-700 mb-3">30+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
              <p className="text-sm text-gray-500 mt-2">Dalam pembuatan payung tradisional</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="text-5xl font-bold text-amber-700 mb-3">50+</div>
              <div className="text-gray-600">Pengrajin Ahli</div>
              <p className="text-sm text-gray-500 mt-2">Berpengalaman dan terlatih</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="text-5xl font-bold text-amber-700 mb-3">100%</div>
              <div className="text-gray-600">Handmade</div>
              <p className="text-sm text-gray-500 mt-2">Dibuat dengan tangan</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="text-5xl font-bold text-amber-700 mb-3">1000+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
              <p className="text-sm text-gray-500 mt-2">Di seluruh Indonesia</p>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Proses Pembuatan</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Pemilihan Bahan',
                  desc: 'Kami memilih bahan berkualitas tinggi seperti kayu jati untuk rangka dan kain sutra atau katun premium untuk kanopi payung.'
                },
                {
                  step: '02',
                  title: 'Pengerjaan Rangka',
                  desc: 'Pengrajin ahli membentuk rangka payung dengan presisi tinggi, memastikan setiap detail sempurna dan kokoh.'
                },
                {
                  step: '03',
                  title: 'Motif & Finishing',
                  desc: 'Proses batik atau bordir dilakukan dengan teliti untuk menciptakan motif yang indah, dilanjutkan dengan finishing berkualitas.'
                }
              ].map((process, index) => (
                <div key={index} className="relative">
                  <div className="text-7xl font-bold text-amber-600/20 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Mengapa Memilih Kami?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Kualitas Premium</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Setiap payung dibuat dengan bahan berkualitas tinggi dan pengerjaan detail oleh pengrajin ahli yang berpengalaman puluhan tahun.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Pengiriman Aman</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kami mengemas produk dengan hati-hati dan mengirimkan ke seluruh Indonesia dengan aman menggunakan jasa ekspedisi terpercaya.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Garansi Produk</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dapatkan garansi kualitas dan kemudahan retur jika produk tidak sesuai harapan. Kepuasan pelanggan adalah prioritas kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Tertarik dengan Produk Kami?
          </h2>
          <p className="text-lg text-amber-50 mb-8 leading-relaxed">
            Jelajahi koleksi lengkap payung geulis kami dan temukan yang sesuai dengan selera Anda
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => onNavigate('products')}
              className="px-8 py-4 bg-white text-amber-700 rounded-xl font-semibold hover:bg-amber-50 shadow-lg transition-all"
            >
              Lihat Katalog Produk
            </button>
            <button 
              onClick={() => onNavigate('homepage')}
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Kembali ke Beranda
            </button>
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