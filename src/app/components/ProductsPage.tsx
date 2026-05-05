import React from 'react';
import { Search, ShoppingCart, User, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SearchModal } from './SearchModal';

interface Product {
  id: string;
  name: string;
  price: string | number;
  stock: number;
  category: string;
  imageUrl: string;
  alt?: string;
}

interface ProductsPageProps {
  onNavigate: (page: string) => void;
  products: Product[];
  onBuy: (product: Product, quantity?: number) => void;
  cartCount?: number;
}

export function ProductsPage({ onNavigate, products, onBuy, cartCount = 0 }: ProductsPageProps) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('Semua');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortBy, setSortBy] = React.useState('Terbaru');

  const productsPerPage = 12;

  // Helper function to parse price
  const parsePrice = (price: string | number): number => {
    if (typeof price === 'number') return price;
    return parseInt(price.toString().replace(/[^0-9]/g, ''));
  };

  // Helper function to format price to Indonesian currency
  const formatPrice = (price: string | number): string => {
    const numPrice = parsePrice(price);
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(numPrice);
  };

  // Sort products based on selected sort option
  const sortProducts = (productsToSort: Product[]): Product[] => {
    const sorted = [...productsToSort];

    switch (sortBy) {
      case 'Harga Terendah':
        return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case 'Harga Tertinggi':
        return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case 'Terlaris':
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

  // Get filtered products based on category
  const getFilteredProducts = (): Product[] => {
    let filtered = products;

    if (selectedCategory !== 'Semua') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    return sortProducts(filtered);
  };

  const filteredProducts = getFilteredProducts();
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get current page products
  const getCurrentProducts = (): Product[] => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentProducts = getCurrentProducts();

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
            {/* Logo */}
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

            {/* Navigation */}
            <nav className="hidden md:flex gap-8">
              <button
                onClick={() => onNavigate('homepage')}
                className="text-gray-700 hover:text-amber-800 transition-colors font-medium"
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
                className="text-gray-700 hover:text-amber-800 transition-colors font-medium"
              >
                Tentang
              </button>
            </nav>

            {/* Action Icons */}
            <div className="flex gap-3">
              <button
                className="p-2 hover:bg-amber-50 rounded-lg transition-colors"
                onClick={() => setSearchOpen(true)}
                aria-label="Search products"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button
                className="p-2 hover:bg-amber-50 rounded-lg transition-colors relative"
                onClick={() => onNavigate('cart')}
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="p-2 hover:bg-amber-50 rounded-lg transition-colors"
                onClick={() => onNavigate('customerProfile')}
                aria-label="User profile"
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

      {/* Filter & Sort Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            {/* Category Filters */}
            <div className="flex gap-3 flex-wrap">
              {['Semua', 'Mini', 'Sedang', 'Besar'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-600'
                  }`}
                >
                  {cat === 'Semua' ? 'Semua Produk' : `Payung ${cat}`}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <label htmlFor="sort-select" className="text-gray-700 font-semibold">
                Urutkan:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={handleSortChange}
                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none font-medium"
              >
                <option>Terbaru</option>
                <option>Harga Terendah</option>
                <option>Harga Tertinggi</option>
                <option>Terlaris</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {currentProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg font-medium">Tidak ada produk yang ditemukan</p>
              <p className="text-gray-500 text-sm mt-2">Coba ubah filter atau kategori yang dipilih</p>
            </div>
          ) : (
            <>
              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all group cursor-pointer overflow-hidden"
                  >
                    {/* Product Image Container */}
                    <div className="relative h-64 overflow-hidden rounded-t-2xl bg-gray-100">
                      <img
                        src={product.imageUrl}
                        alt={product.alt || product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />

                      {/* Stock Status Badge */}
                      {product.stock === 0 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">Habis Terjual</span>
                        </div>
                      )}

                      {product.stock > 0 && product.stock < 5 && (
                        <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                          Sisa {product.stock}
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full inline-block">
                        {product.category}
                      </span>

                      <h3 className="text-lg font-bold text-gray-900 mt-3 line-clamp-2 min-h-14">
                        {product.name}
                      </h3>

                      {/* Star Rating */}
                      <div className="flex items-center gap-1 mt-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Price and Buy Button */}
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-xl font-bold text-amber-700">
                          {formatPrice(product.price)}
                        </p>
                        <button
                          onClick={() => onBuy(product)}
                          disabled={product.stock === 0}
                          className="px-4 py-2 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
                        >
                          Beli
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12 pb-8">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 border-2 border-gray-200 rounded-lg hover:border-amber-600 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>

                  {/* Page Numbers */}
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter((page) => {
                        // Show first page, last page, and pages around current page
                        return (
                          page === 1 ||
                          page === totalPages ||
                          Math.abs(page - currentPage) <= 1
                        );
                      })
                      .map((page, index, array) => (
                        <React.Fragment key={page}>
                          {/* Show ellipsis if there's a gap */}
                          {index > 0 && array[index - 1] !== page - 1 && (
                            <span className="px-2 py-1 text-gray-500">...</span>
                          )}

                          <button
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                              currentPage === page
                                ? 'bg-amber-600 text-white shadow-md'
                                : 'border-2 border-gray-200 text-gray-700 hover:border-amber-600 hover:bg-amber-50'
                            }`}
                            aria-label={`Go to page ${page}`}
                            aria-current={currentPage === page ? 'page' : undefined}
                          >
                            {page}
                          </button>
                        </React.Fragment>
                      ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 border-2 border-gray-200 rounded-lg hover:border-amber-600 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
