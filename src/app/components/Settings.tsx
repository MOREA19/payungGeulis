import React from 'react';
import { Package, ShoppingBag, Users, TrendingUp, LogOut, BarChart3, Plus, Store, Settings as SettingsIcon, Save, User, Mail, Phone, MapPin, Lock, Bell, Palette, Globe } from 'lucide-react';

interface SettingsProps {
  onNavigate: (page: string) => void;
}

export function Settings({ onNavigate }: SettingsProps) {
  const [activeMenu, setActiveMenu] = React.useState('profile');

  // Store Profile States
  const [storeName, setStoreName] = React.useState('Payung Geulis');
  const [storeDescription, setStoreDescription] = React.useState('Pusat kerajinan payung geulis khas Tasikmalaya dengan berbagai motif batik dan desain custom berkualitas tinggi.');
  const [storeEmail, setStoreEmail] = React.useState('info@payunggeulis.com');
  const [storePhone, setStorePhone] = React.useState('0265-123456');
  const [storeAddress, setStoreAddress] = React.useState('Jl. Pahlawan No. 123, Kecamatan Cihideung, Kota Tasikmalaya, Jawa Barat 46126');

  // Translations
  const translations = {
    id: {
      sellerDashboard: 'Dashboard Penjual',
      loginAs: 'Login sebagai:',
      logout: 'Logout',
      mainMenu: 'Menu Utama',
      dashboard: 'Dashboard',
      manageProducts: 'Kelola Produk',
      manageOrders: 'Kelola Pesanan',
      manageCustomers: 'Kelola Pelanggan',
      salesReport: 'Laporan Penjualan',
      settings: 'Pengaturan',
      quickAccess: 'Akses Cepat',
      addProduct: 'Tambah Produk',
      viewStore: 'Lihat Toko',
      settingsTitle: 'Pengaturan',
      settingsSubtitle: 'Kelola preferensi dan konfigurasi toko Anda',
      storeProfile: 'Profil Toko',
      security: 'Keamanan',
      notifications: 'Notifikasi',
      appearance: 'Tampilan',
      languageRegion: 'Bahasa & Region',
      cancel: 'Batal',
      saveChanges: 'Simpan Perubahan',
      changesSaved: 'Perubahan berhasil disimpan!',
      theme: 'Tema',
      light: 'Terang',
      dark: 'Gelap',
      auto: 'Auto',
      active: 'Aktif',
    },
    en: {
      sellerDashboard: 'Seller Dashboard',
      loginAs: 'Logged in as:',
      logout: 'Logout',
      mainMenu: 'Main Menu',
      dashboard: 'Dashboard',
      manageProducts: 'Manage Products',
      manageOrders: 'Manage Orders',
      manageCustomers: 'Manage Customers',
      salesReport: 'Sales Report',
      settings: 'Settings',
      quickAccess: 'Quick Access',
      addProduct: 'Add Product',
      viewStore: 'View Store',
      settingsTitle: 'Settings',
      settingsSubtitle: 'Manage your store preferences and configuration',
      storeProfile: 'Store Profile',
      security: 'Security',
      notifications: 'Notifications',
      appearance: 'Appearance',
      languageRegion: 'Language & Region',
      cancel: 'Cancel',
      saveChanges: 'Save Changes',
      changesSaved: 'Changes saved successfully!',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      auto: 'Auto',
      active: 'Active',
    },
  };

  // Language & Region States
  const [language, setLanguage] = React.useState('id');
  const [timezone, setTimezone] = React.useState('wib');
  const [currency, setCurrency] = React.useState('idr');
  const [dateFormat, setDateFormat] = React.useState('DD/MM/YYYY');
  const [numberFormat, setNumberFormat] = React.useState('1.234.567,89');

  const t = translations[language as keyof typeof translations] || translations.id;
  const [businessHours, setBusinessHours] = React.useState([
    { day: 'Senin', hours: '08:00 - 17:00', open: true },
    { day: 'Selasa', hours: '08:00 - 17:00', open: true },
    { day: 'Rabu', hours: '08:00 - 17:00', open: true },
    { day: 'Kamis', hours: '08:00 - 17:00', open: true },
    { day: 'Jumat', hours: '08:00 - 17:00', open: true },
    { day: 'Sabtu', hours: '08:00 - 14:00', open: true },
    { day: 'Minggu', hours: 'Tutup', open: false },
  ]);

  // Payment Methods
  const [paymentMethods, setPaymentMethods] = React.useState([
    { name: 'Transfer Bank', enabled: true },
    { name: 'E-Wallet (OVO, GoPay)', enabled: true },
    { name: 'COD', enabled: true },
    { name: 'Kartu Kredit/Debit', enabled: false },
  ]);

  // Security States
  const [twoFactorEnabled, setTwoFactorEnabled] = React.useState(false);
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  // Notification States
  const [emailNotifications, setEmailNotifications] = React.useState({
    newOrder: true,
    paymentReceived: true,
    productReview: true,
    lowStock: true,
    newsletter: false,
  });

  const [pushNotifications, setPushNotifications] = React.useState({
    newOrder: true,
    customerMessage: true,
    shippingUpdate: true,
    promotions: false,
  });

  const [smsNotifications, setSmsNotifications] = React.useState({
    urgentOrder: true,
    securityVerification: true,
  });

  // Appearance States
  const [theme, setTheme] = React.useState<'light' | 'dark' | 'auto'>('light');
  const [compactMode, setCompactMode] = React.useState(false);
  const [animations, setAnimations] = React.useState(true);
  const [showAvatar, setShowAvatar] = React.useState(true);

  const handleSaveChanges = () => {
    alert(t.changesSaved);
  };

  // Determine if dark mode is active
  const isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleBusinessHour = (index: number) => {
    const newHours = [...businessHours];
    newHours[index].open = !newHours[index].open;
    setBusinessHours(newHours);
  };

  const togglePaymentMethod = (index: number) => {
    const newMethods = [...paymentMethods];
    newMethods[index].enabled = !newMethods[index].enabled;
    setPaymentMethods(newMethods);
  };

  const handleUpdatePassword = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      alert('Semua field password harus diisi!');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('Password baru dan konfirmasi password tidak cocok!');
      return;
    }
    if (newPassword.length < 8) {
      alert('Password minimal 8 karakter!');
      return;
    }
    alert('Password berhasil diubah!');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-[#F0FDF4]'}`}>
      {/* Header */}
      <header className={`shadow-sm border-b ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <div className={`font-bold text-xl ${isDark ? 'text-emerald-400' : 'text-emerald-800'}`}>{t.sellerDashboard}</div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Payung Geulis Tasikmalaya</div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-right">
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.loginAs}</div>
                <div className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Admin Payung Geulis</div>
              </div>
              <button
                className={`flex items-center gap-2 px-4 py-2 border-2 rounded-lg transition-all ${
                  isDark ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => onNavigate('sellerLogin')}
              >
                <LogOut className={`w-4 h-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{t.logout}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`w-72 border-r min-h-screen sticky top-0 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="p-6">
            <div className="mb-6">
              <h3 className={`text-xs font-semibold uppercase tracking-wide mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.mainMenu}</h3>
              <div className="space-y-1">
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-emerald-50 text-gray-700'
                  }`}
                  onClick={() => onNavigate('sellerDashboard')}
                >
                  <BarChart3 className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  {t.dashboard}
                </button>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-emerald-50 text-gray-700'
                  }`}
                  onClick={() => onNavigate('manageProducts')}
                >
                  <Package className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  {t.manageProducts}
                </button>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-emerald-50 text-gray-700'
                  }`}
                  onClick={() => onNavigate('manageOrders')}
                >
                  <ShoppingBag className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  {t.manageOrders}
                </button>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-emerald-50 text-gray-700'
                  }`}
                  onClick={() => onNavigate('manageCustomers')}
                >
                  <Users className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  {t.manageCustomers}
                </button>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-emerald-50 text-gray-700'
                  }`}
                  onClick={() => onNavigate('salesReport')}
                >
                  <TrendingUp className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  {t.salesReport}
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium shadow-lg">
                  <SettingsIcon className="w-5 h-5" />
                  {t.settings}
                </button>
              </div>
            </div>

            <div className={`border-t pt-6 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-xs font-semibold uppercase tracking-wide mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.quickAccess}</h3>
              <div className="space-y-1">
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
                    isDark ? 'bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-300' : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700'
                  }`}
                  onClick={() => onNavigate('addProduct')}
                >
                  <Plus className="w-5 h-5" />
                  {t.addProduct}
                </button>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-50 text-gray-700'
                  }`}
                  onClick={() => onNavigate('homepage')}
                >
                  <Store className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  {t.viewStore}
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{t.settingsTitle}</h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{t.settingsSubtitle}</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Settings Menu */}
            <div className="col-span-1">
              <div className={`rounded-xl shadow-sm p-4 sticky top-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveMenu('profile')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeMenu === 'profile'
                        ? isDark ? 'bg-emerald-900/30 text-emerald-300' : 'bg-emerald-50 text-emerald-700'
                        : isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    {t.storeProfile}
                  </button>
                  <button
                    onClick={() => setActiveMenu('security')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeMenu === 'security'
                        ? isDark ? 'bg-emerald-900/30 text-emerald-300' : 'bg-emerald-50 text-emerald-700'
                        : isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Lock className="w-5 h-5" />
                    {t.security}
                  </button>
                  <button
                    onClick={() => setActiveMenu('notification')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeMenu === 'notification'
                        ? isDark ? 'bg-emerald-900/30 text-emerald-300' : 'bg-emerald-50 text-emerald-700'
                        : isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Bell className="w-5 h-5" />
                    {t.notifications}
                  </button>
                  <button
                    onClick={() => setActiveMenu('appearance')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeMenu === 'appearance'
                        ? isDark ? 'bg-emerald-900/30 text-emerald-300' : 'bg-emerald-50 text-emerald-700'
                        : isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Palette className="w-5 h-5" />
                    {t.appearance}
                  </button>
                  <button
                    onClick={() => setActiveMenu('region')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeMenu === 'region'
                        ? isDark ? 'bg-emerald-900/30 text-emerald-300' : 'bg-emerald-50 text-emerald-700'
                        : isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Globe className="w-5 h-5" />
                    {t.languageRegion}
                  </button>
                </div>
              </div>
            </div>

            {/* Settings Content */}
            <div className="col-span-2 space-y-6">
              {/* Store Profile */}
              {activeMenu === 'profile' && (
              <>
              <div className={`rounded-xl shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{t.storeProfile}</h3>
                
                {/* Store Logo */}
                <div className={`mb-6 pb-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Logo Toko
                  </label>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-3xl">PG</span>
                    </div>
                    <div className="flex-1">
                      <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors mb-2">
                        {language === 'id' ? 'Upload Logo Baru' : 'Upload New Logo'}
                      </button>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {language === 'id' ? 'Format: PNG, JPG. Maksimal 2MB' : 'Format: PNG, JPG. Max 2MB'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Store Information */}
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {language === 'id' ? 'Nama Toko' : 'Store Name'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:border-emerald-600 focus:outline-none ${
                        isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {language === 'id' ? 'Deskripsi Toko' : 'Store Description'}
                    </label>
                    <textarea
                      rows={4}
                      value={storeDescription}
                      onChange={(e) => setStoreDescription(e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:border-emerald-600 focus:outline-none resize-none ${
                        isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-200 text-gray-900'
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {language === 'id' ? 'Email Toko' : 'Store Email'} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                        <input
                          type="email"
                          value={storeEmail}
                          onChange={(e) => setStoreEmail(e.target.value)}
                          className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:border-emerald-600 focus:outline-none ${
                            isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-200 text-gray-900'
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {language === 'id' ? 'Nomor Telepon' : 'Phone Number'} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                        <input
                          type="tel"
                          value={storePhone}
                          onChange={(e) => setStorePhone(e.target.value)}
                          className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:border-emerald-600 focus:outline-none ${
                            isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-200 text-gray-900'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {language === 'id' ? 'Alamat Lengkap' : 'Full Address'} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className={`absolute left-4 top-4 w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                      <textarea
                        rows={3}
                        value={storeAddress}
                        onChange={(e) => setStoreAddress(e.target.value)}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:border-emerald-600 focus:outline-none resize-none ${
                          isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-200 text-gray-900'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className={`rounded-xl shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                  {language === 'id' ? 'Jam Operasional' : 'Business Hours'}
                </h3>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          checked={schedule.open}
                          onChange={() => toggleBusinessHour(index)}
                          className="w-5 h-5 rounded border-gray-300 text-emerald-600 cursor-pointer"
                        />
                        <span className={`font-medium w-24 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{schedule.day}</span>
                      </div>
                      <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>{schedule.hours}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div className={`rounded-xl shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                  {language === 'id' ? 'Metode Pembayaran' : 'Payment Methods'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 border-2 rounded-lg ${
                      isDark ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-white'
                    }`}>
                      <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{method.name}</span>
                      <label className="relative inline-block w-12 h-6 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={method.enabled}
                          onChange={() => togglePaymentMethod(index)}
                          className="sr-only peer"
                        />
                        <div className={`w-12 h-6 rounded-full peer peer-checked:bg-emerald-600 transition-colors ${isDark ? 'bg-gray-600' : 'bg-gray-200'}`}></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end gap-4">
                <button
                  className={`px-6 py-3 border-2 rounded-xl font-medium transition-colors ${
                    isDark ? 'border-gray-600 hover:bg-gray-700 text-gray-300' : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                  }`}
                  onClick={() => onNavigate('sellerDashboard')}
                >
                  {t.cancel}
                </button>
                <button
                  onClick={handleSaveChanges}
                  className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg"
                >
                  <Save className="w-5 h-5" />
                  <span>{t.saveChanges}</span>
                </button>
              </div>
              </>
              )}

              {/* Security Settings */}
              {activeMenu === 'security' && (
                <>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Keamanan Akun</h3>

                    {/* Change Password */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Ubah Password</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password Lama <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="password"
                            placeholder="Masukkan password lama"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password Baru <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="password"
                            placeholder="Masukkan password baru"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                          />
                          <p className="text-xs text-gray-600 mt-2">Minimal 8 karakter, kombinasi huruf dan angka</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Konfirmasi Password Baru <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="password"
                            placeholder="Ulangi password baru"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                          />
                        </div>
                        <button
                          onClick={handleUpdatePassword}
                          className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
                        >
                          Update Password
                        </button>
                      </div>
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Autentikasi Dua Faktor (2FA)</h4>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-4">
                        <div>
                          <p className="font-medium text-gray-900">Status 2FA</p>
                          <p className="text-sm text-gray-600">Lindungi akun Anda dengan verifikasi tambahan</p>
                        </div>
                        <label className="relative inline-block w-12 h-6 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={twoFactorEnabled}
                            onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:bg-emerald-600 transition-colors"></div>
                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                        </label>
                      </div>
                    </div>

                    {/* Login Activity */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Aktivitas Login Terakhir</h4>
                      <div className="space-y-3">
                        {[
                          { device: 'Chrome di Windows', location: 'Tasikmalaya, Indonesia', time: '2 jam yang lalu', current: true },
                          { device: 'Mobile App di Android', location: 'Tasikmalaya, Indonesia', time: '1 hari yang lalu', current: false },
                          { device: 'Firefox di Windows', location: 'Bandung, Indonesia', time: '3 hari yang lalu', current: false },
                        ].map((activity, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-gray-900">{activity.device}</p>
                                {activity.current && (
                                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-semibold">
                                    Sesi Aktif
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">{activity.location} • {activity.time}</p>
                            </div>
                            {!activity.current && (
                              <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                                Logout
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveChanges}
                      className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg"
                    >
                      <Save className="w-5 h-5" />
                      <span>Simpan Perubahan</span>
                    </button>
                  </div>
                </>
              )}

              {/* Notification Settings */}
              {activeMenu === 'notification' && (
                <>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Pengaturan Notifikasi</h3>

                    {/* Email Notifications */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Notifikasi Email</h4>
                      <div className="space-y-3">
                        {[
                          { key: 'newOrder', label: 'Pesanan Baru', description: 'Dapatkan email saat ada pesanan masuk' },
                          { key: 'paymentReceived', label: 'Pembayaran Diterima', description: 'Notifikasi konfirmasi pembayaran dari pelanggan' },
                          { key: 'productReview', label: 'Review Produk', description: 'Email saat pelanggan memberikan review' },
                          { key: 'lowStock', label: 'Stok Menipis', description: 'Peringatan saat stok produk hampir habis' },
                          { key: 'newsletter', label: 'Newsletter Marketing', description: 'Tips dan update untuk meningkatkan penjualan' },
                        ].map((notif) => (
                          <div key={notif.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{notif.label}</p>
                              <p className="text-sm text-gray-600">{notif.description}</p>
                            </div>
                            <label className="relative inline-block w-12 h-6 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={emailNotifications[notif.key as keyof typeof emailNotifications]}
                                onChange={(e) => setEmailNotifications({...emailNotifications, [notif.key]: e.target.checked})}
                                className="sr-only peer"
                              />
                              <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:bg-emerald-600 transition-colors"></div>
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Push Notifications */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Notifikasi Push</h4>
                      <div className="space-y-3">
                        {[
                          { key: 'newOrder', label: 'Pesanan Baru' },
                          { key: 'customerMessage', label: 'Pesan dari Pelanggan' },
                          { key: 'shippingUpdate', label: 'Update Status Pengiriman' },
                          { key: 'promotions', label: 'Promo & Penawaran Khusus' },
                        ].map((notif) => (
                          <div key={notif.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <p className="font-medium text-gray-900">{notif.label}</p>
                            <label className="relative inline-block w-12 h-6 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={pushNotifications[notif.key as keyof typeof pushNotifications]}
                                onChange={(e) => setPushNotifications({...pushNotifications, [notif.key]: e.target.checked})}
                                className="sr-only peer"
                              />
                              <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:bg-emerald-600 transition-colors"></div>
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SMS Notifications */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Notifikasi SMS</h4>
                      <div className="space-y-3">
                        {[
                          { key: 'urgentOrder', label: 'Pesanan Urgent' },
                          { key: 'securityVerification', label: 'Verifikasi Keamanan' },
                        ].map((notif) => (
                          <div key={notif.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <p className="font-medium text-gray-900">{notif.label}</p>
                            <label className="relative inline-block w-12 h-6 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={smsNotifications[notif.key as keyof typeof smsNotifications]}
                                onChange={(e) => setSmsNotifications({...smsNotifications, [notif.key]: e.target.checked})}
                                className="sr-only peer"
                              />
                              <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:bg-emerald-600 transition-colors"></div>
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveChanges}
                      className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg"
                    >
                      <Save className="w-5 h-5" />
                      <span>{t.saveChanges}</span>
                    </button>
                  </div>
                </>
              )}

              {/* Appearance Settings */}
              {activeMenu === 'appearance' && (
                <>
                  <div className={`rounded-xl shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                    <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      {language === 'id' ? 'Pengaturan Tampilan' : 'Appearance Settings'}
                    </h3>

                    {/* Theme */}
                    <div className={`mb-6 pb-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                      <h4 className={`font-semibold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{t.theme}</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { name: t.light, value: 'light' as const },
                          { name: t.dark, value: 'dark' as const },
                          { name: t.auto, value: 'auto' as const },
                        ].map((themeOption) => (
                          <button
                            key={themeOption.value}
                            onClick={() => setTheme(themeOption.value)}
                            className={`p-6 rounded-xl border-2 transition-all ${
                              theme === themeOption.value
                                ? isDark ? 'border-emerald-500 bg-emerald-900/30' : 'border-emerald-600 bg-emerald-50'
                                : isDark ? 'border-gray-700 bg-gray-900 hover:border-emerald-600' : 'border-gray-200 bg-white hover:border-emerald-300'
                            }`}
                          >
                            <div className="text-center">
                              <div className={`w-12 h-12 rounded-lg mx-auto mb-3 ${
                                themeOption.value === 'light' ? 'bg-gradient-to-br from-amber-200 to-amber-400' :
                                themeOption.value === 'dark' ? 'bg-gradient-to-br from-gray-700 to-gray-900' :
                                'bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300'
                              }`}></div>
                              <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{themeOption.name}</p>
                              {theme === themeOption.value && (
                                <p className={`text-xs mt-1 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>✓ {t.active}</p>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Display Options */}
                    <div>
                      <h4 className={`font-semibold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                        {language === 'id' ? 'Opsi Tampilan' : 'Display Options'}
                      </h4>
                      <div className="space-y-3">
                        <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                          <div className="flex-1">
                            <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                              {language === 'id' ? 'Mode Kompak' : 'Compact Mode'}
                            </p>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {language === 'id' ? 'Tampilkan lebih banyak informasi dalam satu layar' : 'Show more information on one screen'}
                            </p>
                          </div>
                          <label className="relative inline-block w-12 h-6 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={compactMode}
                              onChange={(e) => setCompactMode(e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className={`w-12 h-6 rounded-full peer peer-checked:bg-emerald-600 transition-colors ${isDark ? 'bg-gray-600' : 'bg-gray-200'}`}></div>
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                          </label>
                        </div>
                        <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                          <div className="flex-1">
                            <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                              {language === 'id' ? 'Animasi' : 'Animations'}
                            </p>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {language === 'id' ? 'Aktifkan transisi dan animasi halus' : 'Enable smooth transitions and animations'}
                            </p>
                          </div>
                          <label className="relative inline-block w-12 h-6 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={animations}
                              onChange={(e) => setAnimations(e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className={`w-12 h-6 rounded-full peer peer-checked:bg-emerald-600 transition-colors ${isDark ? 'bg-gray-600' : 'bg-gray-200'}`}></div>
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                          </label>
                        </div>
                        <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                          <div className="flex-1">
                            <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                              {language === 'id' ? 'Tampilkan Avatar' : 'Show Avatar'}
                            </p>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {language === 'id' ? 'Tampilkan foto profil di header' : 'Display profile photo in header'}
                            </p>
                          </div>
                          <label className="relative inline-block w-12 h-6 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={showAvatar}
                              onChange={(e) => setShowAvatar(e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className={`w-12 h-6 rounded-full peer peer-checked:bg-emerald-600 transition-colors ${isDark ? 'bg-gray-600' : 'bg-gray-200'}`}></div>
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveChanges}
                      className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg"
                    >
                      <Save className="w-5 h-5" />
                      <span>{t.saveChanges}</span>
                    </button>
                  </div>
                </>
              )}

              {/* Language & Region Settings */}
              {activeMenu === 'region' && (
                <>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Bahasa & Region</h3>

                    {/* Language */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Bahasa</h4>
                      <div className="space-y-3">
                        {[
                          { name: 'Bahasa Indonesia', code: 'id' },
                          { name: 'English', code: 'en' },
                        ].map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                              language === lang.code
                                ? 'border-emerald-600 bg-emerald-50'
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                          >
                            <span className="font-medium text-gray-900">{lang.name}</span>
                            {language === lang.code && (
                              <span className="px-3 py-1 bg-emerald-600 text-white text-xs rounded-full font-semibold">
                                Aktif
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Zone */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Zona Waktu</h4>
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none cursor-pointer"
                      >
                        <option value="wib">WIB - Waktu Indonesia Barat (GMT+7)</option>
                        <option value="wita">WITA - Waktu Indonesia Tengah (GMT+8)</option>
                        <option value="wit">WIT - Waktu Indonesia Timur (GMT+9)</option>
                      </select>
                    </div>

                    {/* Currency */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Mata Uang</h4>
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none cursor-pointer"
                      >
                        <option value="idr">IDR - Rupiah Indonesia (Rp)</option>
                        <option value="usd">USD - US Dollar ($)</option>
                        <option value="sgd">SGD - Singapore Dollar (S$)</option>
                      </select>
                    </div>

                    {/* Date Format */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Format Tanggal</h4>
                      <div className="space-y-3">
                        {[
                          { format: 'DD/MM/YYYY', example: '01/05/2026' },
                          { format: 'MM/DD/YYYY', example: '05/01/2026' },
                          { format: 'YYYY-MM-DD', example: '2026-05-01' },
                        ].map((formatOption) => (
                          <button
                            key={formatOption.format}
                            onClick={() => setDateFormat(formatOption.format)}
                            className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                              dateFormat === formatOption.format
                                ? 'border-emerald-600 bg-emerald-50'
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                          >
                            <div>
                              <p className="font-medium text-gray-900">{formatOption.format}</p>
                              <p className="text-sm text-gray-600">Contoh: {formatOption.example}</p>
                            </div>
                            {dateFormat === formatOption.format && (
                              <span className="text-emerald-600 font-semibold">✓</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Number Format */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Format Angka</h4>
                      <div className="space-y-3">
                        {[
                          { format: '1.234.567,89', description: 'Titik sebagai pemisah ribuan' },
                          { format: '1,234,567.89', description: 'Koma sebagai pemisah ribuan' },
                        ].map((formatOption) => (
                          <button
                            key={formatOption.format}
                            onClick={() => setNumberFormat(formatOption.format)}
                            className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                              numberFormat === formatOption.format
                                ? 'border-emerald-600 bg-emerald-50'
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                          >
                            <div>
                              <p className="font-medium text-gray-900">{formatOption.format}</p>
                              <p className="text-sm text-gray-600">{formatOption.description}</p>
                            </div>
                            {numberFormat === formatOption.format && (
                              <span className="text-emerald-600 font-semibold">✓</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveChanges}
                      className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg"
                    >
                      <Save className="w-5 h-5" />
                      <span>{t.saveChanges}</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
