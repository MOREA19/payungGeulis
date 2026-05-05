import React, { useState, useEffect } from 'react';
import { Homepage } from './components/Homepage';
import { ProductsPage } from './components/ProductsPage';
import { AboutPage } from './components/AboutPage';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Payment } from './components/customer/Payment';
import { OrderSuccess } from './components/customer/OrderSuccess';
import { CustomerLogin } from './components/CustomerLogin';
import { CustomerProfile } from './components/CustomerProfile';
import { SellerLogin } from './components/SellerLogin';
import { SellerDashboard } from './components/SellerDashboard';
import { ManageProducts } from './components/ManageProducts';
import { AddProduct } from './components/AddProduct';
import { ManageOrders } from './components/ManageOrders';
import { ManageCustomers } from './components/ManageCustomers';
import { SalesReport } from './components/SalesReport';
import { Settings } from './components/Settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState('customerLogin');

  // ⬇️ TAMBAHAN: state produk dari backend
  const [products, setProducts] = useState<any[]>([]);

  // ⬇️ TAMBAHAN: ambil data dari backend
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  // ⬇️ TAMBAHAN: fungsi beli (checkout)
  const handleBuy = async (productId: number) => {
    const res = await fetch('http://localhost:3000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: 1,
        items: [
          { product_id: productId, quantity: 1 }
        ]
      })
    });

    const data = await res.json();
    console.log(data);
    alert('Checkout berhasil');

    // refresh produk biar stock update
    const updated = await fetch('http://localhost:3000/products');
    const newData = await updated.json();
    setProducts(newData);
  };

  const pages = {
    homepage: <Homepage onNavigate={setCurrentPage} />,
    
    // ⬇️ DI SINI KITA KIRIM DATA + FUNGSI
    products: (
      <ProductsPage
        onNavigate={setCurrentPage}
        products={products}
        onBuy={handleBuy}
      />
    ),

    about: <AboutPage onNavigate={setCurrentPage} />,
    product: <ProductDetail onNavigate={setCurrentPage} />,
    cart: <Cart onNavigate={setCurrentPage} />,
    checkout: <Checkout onNavigate={setCurrentPage} />,
    payment: <Payment onNavigate={setCurrentPage} />,
    orderSuccess: <OrderSuccess onNavigate={setCurrentPage} />,
    customerLogin: <CustomerLogin onNavigate={setCurrentPage} />,
    customerProfile: <CustomerProfile onNavigate={setCurrentPage} />,
    sellerLogin: <SellerLogin onNavigate={setCurrentPage} />,
    sellerDashboard: <SellerDashboard onNavigate={setCurrentPage} />,
    manageProducts: <ManageProducts onNavigate={setCurrentPage} />,
    addProduct: <AddProduct onNavigate={setCurrentPage} />,
    manageOrders: <ManageOrders onNavigate={setCurrentPage} />,
    manageCustomers: <ManageCustomers onNavigate={setCurrentPage} />,
    salesReport: <SalesReport onNavigate={setCurrentPage} />,
    settings: <Settings onNavigate={setCurrentPage} />
  };

  return (
    <div className="min-h-screen">
      {pages[currentPage as keyof typeof pages]}
    </div>
  );
}