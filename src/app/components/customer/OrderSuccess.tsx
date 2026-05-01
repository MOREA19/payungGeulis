import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, User, Search, CheckCircle2, Package, MapPin, Clock, CreditCard, Download, Share2, MessageCircle } from 'lucide-react';
import { SearchModal } from '../SearchModal';

interface OrderSuccessProps {
  onNavigate: (page: string) => void;
}

export function OrderSuccess({ onNavigate }: OrderSuccessProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  const orderNumber = 'PG-2026050112345';
  const orderDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

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
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <div className="font-bold text-xl text-amber-800">Payung Geulis</div>
                <div className="text-xs text-gray-600">Tasikmalaya</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="p-2 hover:bg-amber-50 rounded-lg transition-colors" onClick={() => setSearchOpen(true)}>
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button
                className="p-2 hover:bg-amber-50 rounded-lg transition-colors relative"
                onClick={() => onNavigate('cart')}
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
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

      {/* Success Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Success Header */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 mb-8 text-center border-2 border-emerald-200 shadow-lg">
          <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-600/30">
            <CheckCircle2 className="w-14 h-14 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Pesanan Berhasil Dibuat!</h1>
          <p className="text-lg text-gray-700 mb-6">Terima kasih telah berbelanja di Payung Geulis</p>

          <div className="bg-white rounded-2xl p-6 max-w-md mx-auto border border-emerald-200">
            <div className="text-sm text-gray-600 mb-2">Nomor Pesanan</div>
            <div className="text-2xl font-bold text-amber-700 mb-4">{orderNumber}</div>
            <div className="text-xs text-gray-600">{orderDate}</div>
          </div>
        </div>

        {/* Order Status */}
        <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Status Pesanan</h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Pembayaran Dikonfirmasi</h3>
                <p className="text-sm text-gray-600">Bukti transfer Anda sedang diverifikasi oleh penjual. Proses verifikasi biasanya memakan waktu 1x24 jam.</p>
              </div>
            </div>

            <div className="ml-6 border-l-2 border-gray-200 h-8"></div>

            <div className="flex gap-4 opacity-50">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Pesanan Diproses</h3>
                <p className="text-sm text-gray-600">Penjual akan memproses pesanan Anda setelah pembayaran dikonfirmasi</p>
              </div>
            </div>

            <div className="ml-6 border-l-2 border-gray-200 h-8"></div>

            <div className="flex gap-4 opacity-50">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Dalam Pengiriman</h3>
                <p className="text-sm text-gray-600">Paket akan dikirim melalui JNE Regular (Est. 2-3 hari)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Shipping Address */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-semibold text-gray-900">Alamat Pengiriman</h3>
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              <p className="font-medium">Ahmad Fauzi</p>
              <p>08123456789</p>
              <p>Jl. Merdeka No. 123, RT 01/RW 05</p>
              <p>Kelurahan Sukahurip, Kec. Tamansari</p>
              <p>Tasikmalaya, Jawa Barat 46122</p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-gray-900">Metode Pembayaran</h3>
            </div>
            <div className="text-sm text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Transfer Bank BCA</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">Nomor Rekening</div>
                <div className="font-medium">1234567890</div>
                <div className="text-xs text-gray-600 mt-2">a.n. Toko Payung Geulis</div>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <div className="flex justify-between font-semibold">
                  <span>Total Dibayar</span>
                  <span className="text-amber-700">Rp 430.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Detail Produk</h3>

          <div className="space-y-4 mb-4 pb-4 border-b border-gray-200">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-900 opacity-40 text-2xl">☂️</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">Payung Geulis Motif {item}</h4>
                  <p className="text-sm text-gray-600 mb-2">Warna: Merah • Jumlah: 1</p>
                  <p className="font-semibold text-amber-700">Rp 145.000</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal Produk</span>
              <span className="font-medium text-gray-900">Rp 435.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ongkos Kirim (JNE Regular)</span>
              <span className="font-medium text-gray-900">Rp 15.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Diskon</span>
              <span className="font-medium text-emerald-600">- Rp 20.000</span>
            </div>
            <div className="pt-3 border-t-2 border-gray-200 flex justify-between">
              <span className="font-semibold text-gray-900">Total Pembayaran</span>
              <span className="text-xl font-bold text-amber-700">Rp 430.000</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <button
            className="py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 shadow-lg shadow-amber-600/30 transition-all flex items-center justify-center gap-2"
            onClick={() => onNavigate('customerProfile')}
          >
            <Package className="w-5 h-5" />
            Lihat Status Pesanan
          </button>
          <button
            className="py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            onClick={() => onNavigate('homepage')}
          >
            <ShoppingCart className="w-5 h-5" />
            Belanja Lagi
          </button>
        </div>

        {/* Additional Actions */}
        <div className="grid grid-cols-3 gap-4">
          <button className="py-3 bg-white border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm">
            <Download className="w-4 h-4" />
            Download Invoice
          </button>
          <button className="py-3 bg-white border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm">
            <Share2 className="w-4 h-4" />
            Bagikan
          </button>
          <button className="py-3 bg-white border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm">
            <MessageCircle className="w-4 h-4" />
            Hubungi Penjual
          </button>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-semibold text-blue-900 mb-3">Informasi Penting</h4>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span>Pembayaran Anda akan diverifikasi dalam waktu 1x24 jam kerja</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span>Anda akan menerima notifikasi email setelah pembayaran dikonfirmasi</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span>Pesanan akan diproses dan dikirim setelah pembayaran terverifikasi</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span>Lacak status pesanan Anda di halaman Profil {">"} Pesanan Saya</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
