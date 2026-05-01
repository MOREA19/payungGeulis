import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export function SearchModal({ isOpen, onClose, onNavigate }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  if (!isOpen) return null;

  const products = [
    { name: 'Payung Batik Parang', price: 'Rp 350.000' },
    { name: 'Payung Batik Mega Mendung', price: 'Rp 450.000' },
    { name: 'Payung Batik Kawung', price: 'Rp 400.000' },
    { name: 'Payung Mini Bordir', price: 'Rp 250.000' },
    { name: 'Payung Jumbo Classic', price: 'Rp 650.000' },
    { name: 'Payung Custom Design', price: 'Rp 750.000' }
  ];

  const filteredProducts = searchQuery.length > 0
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl animate-in fade-in slide-in-from-top-4 duration-300">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Cari payung geulis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="flex-1 text-lg outline-none"
            />
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          {searchQuery.length === 0 ? (
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-4">PENCARIAN POPULER</h3>
              <div className="space-y-2">
                {['Payung Batik', 'Payung Mini', 'Custom Design', 'Payung Jumbo'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term);
                      onClose();
                      onNavigate('products');
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-amber-50 rounded-xl transition-colors flex items-center gap-3"
                  >
                    <Search className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{term}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-4">
                {filteredProducts.length > 0 ? 'HASIL PENCARIAN' : 'TIDAK ADA HASIL'}
              </h3>
              {filteredProducts.length > 0 ? (
                <div className="space-y-3">
                  {filteredProducts.map((product, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        onClose();
                        onNavigate('product');
                      }}
                      className="w-full flex items-center gap-4 p-4 hover:bg-amber-50 rounded-xl transition-colors"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">☂️</span>
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-gray-900">{product.name}</div>
                        <div className="text-sm text-amber-700 font-medium">{product.price}</div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-3">🔍</div>
                  <p>Tidak ada hasil untuk "{searchQuery}"</p>
                  <button 
                    onClick={() => {
                      onClose();
                      onNavigate('products');
                    }}
                    className="mt-4 text-amber-700 font-semibold hover:text-amber-800"
                  >
                    Lihat Semua Produk
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
