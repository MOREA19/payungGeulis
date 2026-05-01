import React, { useState } from 'react';
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

  const pages = {
    homepage: <Homepage onNavigate={setCurrentPage} />,
    products: <ProductsPage onNavigate={setCurrentPage} />,
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