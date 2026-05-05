import React from 'react';
import { Search, ShoppingCart, User, Star } from 'lucide-react';
import { SearchModal } from './SearchModal';
import { productList } from '../data/payungDataset';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
  products: any[];
  onBuy: (id: number) => void;
}

export function ProductsPage({ onNavigate, products, onBuy }: ProductsPageProps) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('Semua');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortBy, setSortBy] = React.useState('Terbaru');

  const allProducts = productList;

  const productsPerPage = 12;

  const parsePrice = (priceString: string): number => {
    return parseInt(priceString.replace(/[^0-9]/g, ''));
  };

  const sortProducts = (products: typeof allProducts) => {
    const sorted = [...products];

    switch (sortBy) {
      case 'Harga Terendah':
        return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case 'Harga Tertinggi':
        return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case 'Terlaris':
        // Produk terlaris = stock rendah (banyak terjual) + harga tinggi (premium/populer)
        return sorted.sort((a, b) => {
          const scoreA = (100 - a.stock) + (parsePrice(a.price) / 10000);
          const scoreB = (100 - b.stock) + (parsePrice(b.price) / 10000);
          return scoreB - scoreA;
        });
      case 'Terbaru':
      default:
        return sorted;
    }
  };

  const getFilteredProducts = () => {
    let products = allProducts;

    if (selectedCategory !== 'Semua') {
      products = products.filter(product => product.category === selectedCategory);
    }

    return sortProducts(products);
  };

  const filteredProducts = getFilteredProducts();
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const getCurrentProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                className="text-amber-800 font-semibold border-b-2 border-amber-600 pb-1"
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-amber-600/10 rounded-full mb-4">
              <span className="text-amber-800 text-sm font-semibold">Koleksi Terbaru</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Katalog <span className="text-amber-700">Payung Geulis</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai pilihan payung geulis dengan motif batik yang indah dan kualitas terbaik
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Sort */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => handleCategoryChange('Semua')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === 'Semua'
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-600'
                }`}
              >
                Semua Produk
              </button>
              <button
                onClick={() => handleCategoryChange('Mini')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === 'Mini'
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-600'
                }`}
              >
                Payung Mini
              </button>
              <button
                onClick={() => handleCategoryChange('Sedang')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === 'Sedang'
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-600'
                }`}
              >
                Payung Sedang
              </button>
              <button
                onClick={() => handleCategoryChange('Besar')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === 'Besar'
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-600'
                }`}
              >
                Payung Besar
              </button>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-sm text-gray-600">Urutkan:</span>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="px-4 py-2 border-2 border-gray-200 rounded-lg text-gray-700 font-semibold focus:outline-none focus:border-amber-600 cursor-pointer hover:border-amber-400 transition-colors"
              >
                <option value="Terbaru">Terbaru</option>
                <option value="Harga Terendah">Harga Terendah</option>
                <option value="Harga Tertinggi">Harga Tertinggi</option>
                <option value="Terlaris">Terlaris</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {filteredProducts.length > 0 ? (
                <>
                  Menampilkan {((currentPage - 1) * productsPerPage) + 1} - {Math.min(currentPage * productsPerPage, filteredProducts.length)} dari {filteredProducts.length} produk
                  {selectedCategory !== 'Semua' && (
                    <span className="ml-2 text-amber-700 font-semibold">
                      (Kategori: {selectedCategory === 'Mini' ? 'Payung Mini' : selectedCategory === 'Sedang' ? 'Payung Sedang' : 'Payung Besar'})
                    </span>
                  )}
                  {sortBy !== 'Terbaru' && (
                    <span className="ml-2 text-emerald-700 font-semibold">
                      • Diurutkan: {sortBy}
                    </span>
                  )}
                </>
              ) : (
                <span className="text-red-600 font-semibold">Tidak ada produk dalam kategori ini</span>
              )}
            </p>
          </div>
          {filteredProducts.length === 0 ? (
            <div className="col-span-4 text-center py-20">
              <div className="text-6xl mb-4 opacity-30">☂️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada produk ditemukan</h3>
              <p className="text-gray-600 mb-6">Coba pilih kategori lain atau lihat semua produk</p>
              <button
                onClick={() => handleCategoryChange('Semua')}
                className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Lihat Semua Produk
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-4 gap-8">
              {getCurrentProducts().map((product, index) => {
                const globalIndex = (currentPage - 1) * productsPerPage + index;
                return (
                <button
                  key={globalIndex}
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
                    {globalIndex < 2 && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-amber-600 text-white text-xs rounded-full font-semibold">
                        Terlaris
                      </div>
                    )}
                  </div>

                {/* Product Info */}
                <div className="p-5 text-left">
                  <div className="text-xs text-amber-700 font-semibold mb-2">{product.category}</div>
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
            );
            })}
            </div>
          )}

          {/* Pagination */}
          {filteredProducts.length > 0 && totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-amber-600'
                }`}
              >
                ←
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                      currentPage === pageNum
                        ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-amber-600'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-amber-600'
                }`}
              >
                →
              </button>
            </div>
          )}
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