import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, User, Search, Minus, Plus, Heart } from 'lucide-react';
import { SearchModal } from './SearchModal';
import { detailImages } from '../data/payungDataset';

interface ProductDetailProps {
  onNavigate: (page: string) => void;
  onAddToCart?: (product: any, quantity: number) => void;
}

export function ProductDetail({ onNavigate, onAddToCart }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const product = {
    id: 1,
    name: 'Payung Batik Parang Premium',
    price: 350000,
    category: 'Sedang',
    description: 'Payung berkualitas tinggi dengan motif batik parang yang elegan.',
    stock: 25,
    imageUrl: detailImages[0]?.src || ''
  };

  const handleBuy = () => {
    if (onAddToCart) onAddToCart(product, quantity);
    alert(`${quantity} x ${product.name} ditambahkan ke keranjang`);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} onNavigate={onNavigate} />

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
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
            <button onClick={() => setSearchOpen(true)} className="p-2 hover:bg-amber-50 rounded-lg">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={() => onNavigate('cart')} className="p-2 hover:bg-amber-50 rounded-lg">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={() => onNavigate('customerProfile')} className="p-2 hover:bg-amber-50 rounded-lg">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="rounded-2xl h-[500px] mb-4 overflow-hidden relative group bg-white shadow-lg">
              <img src={product.imageUrl} alt={product.name} className="object-cover w-full h-full" />
              <button className="absolute top-4 right-4 p-3 bg-white/80 rounded-full">
                <Heart className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {detailImages.map((img, idx) => (
                <button key={idx} onClick={() => setSelectedImage(idx)} className={`rounded-xl h-24 overflow-hidden ${selectedImage === idx ? 'ring-2 ring-amber-600' : ''}`}>
                  <img src={img.src} alt={img.alt} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold rounded-full mb-3">
              {product.category}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            <div className="text-2xl font-bold text-amber-700 mb-6">{formatPrice(product.price)}</div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Jumlah</label>
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 bg-gray-100 rounded"> <Minus className="w-4 h-4" /> </button>
                <div className="px-4 py-2 border rounded">{quantity}</div>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 bg-gray-100 rounded"> <Plus className="w-4 h-4" /> </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={handleBuy} className="flex-1 py-3 bg-amber-600 text-white rounded-xl"> <ShoppingCart className="w-4 h-4 inline mr-2" /> Tambah ke Keranjang</button>
              <button onClick={() => onNavigate('checkout')} className="flex-1 py-3 bg-white border border-amber-600 text-amber-700 rounded-xl">Beli Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
