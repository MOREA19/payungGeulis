import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, User, Search, CreditCard, Check, Clock, Copy, CheckCircle2, AlertCircle, Upload, Shield } from 'lucide-react';
import { SearchModal } from '../SearchModal';

interface PaymentProps {
  onNavigate: (page: string) => void;
}

export function Payment({ onNavigate }: PaymentProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [uploadedProof, setUploadedProof] = useState(false);

  const paymentMethod = 'BCA'; // From previous checkout selection
  const accountNumber = '1234567890';
  const totalAmount = 430000;
  const timeLeft = '23:45:12'; // Countdown timer

  const copyToClipboard = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
    document.body.removeChild(textarea);
  };

  const handleCopy = () => {
    copyToClipboard(accountNumber);
  };

  const handleUpload = () => {
    setUploadedProof(true);
  };

  const handleConfirmPayment = () => {
    onNavigate('orderSuccess');
  };

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

      {/* Checkout Progress */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            {[
              { number: 1, title: 'Keranjang', status: 'completed' },
              { number: 2, title: 'Checkout', status: 'completed' },
              { number: 3, title: 'Pembayaran', status: 'current' },
              { number: 4, title: 'Selesai', status: 'upcoming' }
            ].map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold mb-2 transition-all ${
                    step.status === 'completed'
                      ? 'bg-emerald-600 text-white'
                      : step.status === 'current'
                      ? 'bg-amber-600 text-white ring-4 ring-amber-200'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.status === 'completed' ? <Check className="w-6 h-6" /> : step.number}
                  </div>
                  <span className={`text-sm font-medium ${
                    step.status === 'current' ? 'text-amber-700' : step.status === 'completed' ? 'text-emerald-700' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < 3 && (
                  <div className={`flex-1 h-1 mx-4 rounded-full ${
                    step.status === 'completed' ? 'bg-emerald-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Countdown Timer */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Selesaikan Pembayaran Dalam</h3>
                <p className="text-sm text-gray-600">Pesanan akan otomatis dibatalkan jika waktu habis</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-red-600">{timeLeft}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Payment Instructions */}
          <div className="space-y-6">
            {/* Payment Method Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Transfer Bank {paymentMethod}</h2>
                  <p className="text-sm text-gray-600">Lakukan pembayaran ke rekening berikut</p>
                </div>
              </div>

              {/* Account Details */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
                  <div className="text-sm text-gray-600 mb-2">Nomor Rekening</div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900 tracking-wider">{accountNumber}</div>
                    <button
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                      onClick={handleCopy}
                    >
                      {copied ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-amber-700" />
                      )}
                    </button>
                  </div>
                  {copied && <div className="text-xs text-emerald-600 mt-2">Nomor rekening berhasil disalin!</div>}
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">Atas Nama</div>
                  <div className="font-semibold text-gray-900">Toko Payung Geulis</div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border-2 border-amber-300">
                  <div className="text-sm text-gray-600 mb-2">Total Pembayaran</div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-amber-700">Rp {totalAmount.toLocaleString('id-ID')}</div>
                    <button
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                      onClick={() => copyToClipboard(totalAmount.toString())}
                    >
                      <Copy className="w-5 h-5 text-amber-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Instructions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Cara Pembayaran</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-semibold text-amber-700">1</div>
                  <p className="text-sm text-gray-700">Salin nomor rekening dan jumlah pembayaran di atas</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-semibold text-amber-700">2</div>
                  <p className="text-sm text-gray-700">Buka aplikasi mobile banking atau ATM terdekat</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-semibold text-amber-700">3</div>
                  <p className="text-sm text-gray-700">Lakukan transfer sesuai nominal yang tertera</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-semibold text-amber-700">4</div>
                  <p className="text-sm text-gray-700">Upload bukti transfer di form sebelah kanan</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-semibold text-amber-700">5</div>
                  <p className="text-sm text-gray-700">Klik tombol "Konfirmasi Pembayaran" dan tunggu verifikasi</p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-900 mb-1">Penting!</h4>
                  <p className="text-sm text-orange-800">Transfer harus sesuai dengan nominal yang tertera agar pesanan dapat diproses dengan cepat.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Upload Proof & Order Summary */}
          <div className="space-y-6">
            {/* Upload Proof */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Upload Bukti Transfer</h3>

              <div className="mb-6">
                <label className="block w-full border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition-all">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleUpload}
                  />
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  {uploadedProof ? (
                    <div>
                      <div className="flex items-center justify-center gap-2 text-emerald-600 mb-2">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-medium">Bukti transfer berhasil diupload!</span>
                      </div>
                      <p className="text-xs text-gray-500">Klik untuk mengganti file</p>
                    </div>
                  ) : (
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Klik untuk upload bukti transfer</p>
                      <p className="text-xs text-gray-500">Format: JPG, PNG (Max 5MB)</p>
                    </div>
                  )}
                </label>
              </div>

              <button
                className={`w-full py-4 rounded-xl font-semibold shadow-lg transition-all ${
                  uploadedProof
                    ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-amber-600/30'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!uploadedProof}
                onClick={handleConfirmPayment}
              >
                Konfirmasi Pembayaran
              </button>

              <div className="mt-4 flex items-start gap-2 text-xs text-gray-600">
                <Shield className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p>Bukti transfer akan diverifikasi dalam 1x24 jam. Anda akan mendapat notifikasi setelah pembayaran dikonfirmasi.</p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Ringkasan Pesanan</h3>

              {/* Product Items */}
              <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-900 opacity-40 text-xl">☂️</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-medium text-gray-900">Payung Geulis Motif {item}</h4>
                      <p className="text-xs text-gray-600">Merah • Qty: 1</p>
                    </div>
                    <div className="text-xs font-semibold text-amber-700">Rp 145.000</div>
                  </div>
                ))}
              </div>

              {/* Price Details */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">Rp 435.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ongkir (JNE Regular)</span>
                  <span className="font-medium text-gray-900">Rp 15.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Diskon</span>
                  <span className="font-medium text-emerald-600">- Rp 20.000</span>
                </div>
                <div className="pt-3 border-t border-gray-200 flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-amber-700">Rp 430.000</span>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <button
              className="w-full py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
              onClick={() => onNavigate('checkout')}
            >
              Kembali ke Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
