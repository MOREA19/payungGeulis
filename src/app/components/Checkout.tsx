import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, User, Search, MapPin, Phone, Mail, Package, CreditCard, Clock, Check, Shield } from 'lucide-react';
import { SearchModal } from './SearchModal';

interface CartItem {
  id: number;
  product_id?: number;
  name: string;
  price: number | string;
  quantity: number;
  imageUrl: string;
  stock: number;
  category: string;
}

interface CheckoutProps {
  onNavigate: (page: string) => void;
  cartItems: CartItem[];
  user: any;
  onCheckout: () => void;
}

export function Checkout({ onNavigate, cartItems, user, onCheckout }: CheckoutProps) {
  const [selectedShipping, setSelectedShipping] = useState('jne-regular');
  const [selectedPayment, setSelectedPayment] = useState('bca');
  const [searchOpen, setSearchOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    address: '',
    province: '',
    city: '',
    zipcode: ''
  });

  const formatPrice = (price: number | string): string => {
    const numPrice = typeof price === 'number' ? price : parseInt(price.toString().replace(/[^0-9]/g, ''));
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(numPrice);
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : parseInt(item.price.toString().replace(/[^0-9]/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  const shippingMethods = [
    { id: 'jne-regular', name: 'JNE - Regular', price: 15000, est: '2-3 hari' },
    { id: 'jne-express', name: 'JNE - Express', price: 25000, est: '1-2 hari' },
    { id: 'jnt-regular', name: 'J&T - Regular', price: 12000, est: '2-3 hari' },
    { id: 'sicepat-regular', name: 'SiCepat - Regular', price: 13000, est: '2-3 hari' }
  ];

  const selectedShippingMethod = shippingMethods.find(m => m.id === selectedShipping);
  const shippingCost = selectedShippingMethod?.price || 15000;
  const discount = Math.floor(subtotal * 0.05);
  const total = subtotal + shippingCost - discount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async () => {
    if (!formData.name || !formData.phone || !formData.address || !formData.province || !formData.city) {
      alert('Silakan lengkapi semua data pengiriman');
      return;
    }
    if (!selectedPayment) {
      alert('Silakan pilih metode pembayaran');
      return;
    }
    onCheckout();
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#FFF8F0] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Keranjang Kosong</h2>
          <p className="text-gray-600 mb-6">Tidak ada produk untuk di-checkout</p>
          <button 
            className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            onClick={() => onNavigate('products')}
          >
            Kembali ke Produk
          </button>
        </div>
      </div>
    );
  }

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
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
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
              { number: 2, title: 'Checkout', status: 'current' },
              { number: 3, title: 'Pembayaran', status: 'upcoming' },
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

      {/* Checkout Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-700" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Alamat Pengiriman</h2>
              </div>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Nama Lengkap *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">No. Telepon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Alamat Lengkap *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Jalan, No. Rumah, RT/RW, Kelurahan, Kecamatan"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Provinsi *</label>
                    <select name="province" value={formData.province} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                      <option>Pilih Provinsi</option>
                      <option>Jawa Barat</option>
                      <option>DKI Jakarta</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Kota/Kabupaten *</label>
                    <select name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                      <option>Pilih Kota</option>
                      <option>Tasikmalaya</option>
                      <option>Bandung</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Kode Pos *</label>
                    <input
                      type="text"
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={handleInputChange}
                      placeholder="46xxx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-orange-700" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Metode Pengiriman</h2>
              </div>
              
              <div className="space-y-3">
                {shippingMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedShipping === method.id
                        ? 'border-amber-600 bg-amber-50'
                        : 'border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        checked={selectedShipping === method.id}
                        onChange={() => setSelectedShipping(method.id)}
                        className="w-5 h-5 text-amber-600"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{method.name}</div>
                        <div className="text-sm text-gray-600">Rp {method.price.toLocaleString('id-ID')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Est. {method.est}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-emerald-700" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Metode Pembayaran</h2>
              </div>
              
              <div className="space-y-4">
                {/* Transfer Bank */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Transfer Bank</div>
                  <div className="space-y-2">
                    {[
                      { id: 'bca', name: 'BCA', number: '1234567890' },
                      { id: 'mandiri', name: 'Mandiri', number: '0987654321' },
                      { id: 'bni', name: 'BNI', number: '5678901234' }
                    ].map((bank) => (
                      <label
                        key={bank.id}
                        className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          selectedPayment === bank.id
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-gray-200 hover:border-amber-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={selectedPayment === bank.id}
                          onChange={() => setSelectedPayment(bank.id)}
                          className="w-5 h-5 text-amber-600"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{bank.name}</div>
                          <div className="text-sm text-gray-600">{bank.number}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* E-Wallet */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">E-Wallet</div>
                  <div className="space-y-2">
                    {['GoPay', 'OVO', 'Dana'].map((wallet) => (
                      <label
                        key={wallet.toLowerCase()}
                        className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          selectedPayment === wallet.toLowerCase()
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-gray-200 hover:border-amber-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={selectedPayment === wallet.toLowerCase()}
                          onChange={() => setSelectedPayment(wallet.toLowerCase())}
                          className="w-5 h-5 text-amber-600"
                        />
                        <div className="font-medium text-gray-900">{wallet}</div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* COD */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Lainnya</div>
                  <label
                    className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedPayment === 'cod'
                        ? 'border-amber-600 bg-amber-50'
                        : 'border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={selectedPayment === 'cod'}
                      onChange={() => setSelectedPayment('cod')}
                      className="w-5 h-5 text-amber-600"
                    />
                    <div>
                      <div className="font-medium text-gray-900">COD (Cash on Delivery)</div>
                      <div className="text-sm text-gray-600">Bayar saat barang diterima</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Pesanan</h2>

              {/* Product Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="rounded-lg w-16 h-16 overflow-hidden flex-shrink-0 bg-white shadow-inner">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{item.category} • Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold text-amber-700">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({cartItems.length} item)</span>
                  <span className="font-medium text-gray-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ongkos Kirim</span>
                  <span className="font-medium text-gray-900">{formatPrice(shippingCost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Diskon</span>
                  <span className="font-medium text-emerald-600">- {formatPrice(discount)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 mb-6 border border-amber-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Total Pembayaran</span>
                  <span className="text-2xl font-bold text-amber-700">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  className="w-full py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 shadow-lg shadow-amber-600/30 transition-all disabled:opacity-50"
                  onClick={handlePayment}
                >
                  Lanjut ke Pembayaran
                </button>
                <button
                  className="w-full py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
                  onClick={() => onNavigate('cart')}
                >
                  Kembali ke Keranjang
                </button>
              </div>

              {/* Terms */}
              <div className="mt-6 flex items-start gap-2 text-xs text-gray-600">
                <Shield className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p>Dengan melanjutkan, Anda menyetujui syarat dan ketentuan yang berlaku</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


