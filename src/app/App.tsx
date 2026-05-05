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
import { api } from './api/apiClient';

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

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('customerLogin');
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await api.getProducts();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Add product to cart
  const handleAddToCart = (product: any, quantity: number = 1) => {
    const existingItem = cart.find(item => item.product_id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.product_id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, {
        id: Date.now(),
        product_id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        imageUrl: product.imageUrl,
        stock: product.stock,
        category: product.category
      }]);
    }
  };

  // Remove from cart
  const handleRemoveFromCart = (itemId: number) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // Update cart quantity
  const handleUpdateCartQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(itemId);
    } else {
      setCart(cart.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      ));
    }
  };

  // Handle login
  const handleLogin = async (email: string) => {
    try {
      const userData = await api.login(email);
      setUser(userData);
      setCurrentPage('homepage');
    } catch (err) {
      console.error('Login error:', err);
      alert('Login gagal: ' + (err instanceof Error ? err.message : 'Unknown error'));
    }
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setCart([]);
    setCurrentPage('customerLogin');
  };

  // Handle checkout
  const handleCheckout = async () => {
    if (!user) {
      alert('Silakan login terlebih dahulu');
      setCurrentPage('customerLogin');
      return;
    }

    if (cart.length === 0) {
      alert('Keranjang belanja kosong');
      return;
    }

    try {
      const checkoutItems = cart.map(item => ({
        product_id: item.product_id || item.id,
        quantity: item.quantity
      }));

      const result = await api.checkout(user.id, checkoutItems);
      alert('Checkout berhasil! Order ID: ' + result.order.id);
      setCart([]);
      setCurrentPage('orderSuccess');
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Checkout gagal: ' + (err instanceof Error ? err.message : 'Unknown error'));
    }
  };

  const handleLogin = async (email: string) => {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    setUser(data);

    alert("Login berhasil sebagai " + data.name);
    setCurrentPage("homepage");
  };

  const pages = {
    homepage: <Homepage onNavigate={setCurrentPage} />,
    products: (
      <ProductsPage
        onNavigate={setCurrentPage}
        products={products}
        onBuy={handleAddToCart}
      />
    ),
    about: <AboutPage onNavigate={setCurrentPage} />,
    product: <ProductDetail onNavigate={setCurrentPage} onAddToCart={handleAddToCart} />,
    cart: (
      <Cart 
        onNavigate={setCurrentPage} 
        cartItems={cart}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onCheckout={handleCheckout}
      />
    ),
    checkout: (
      <Checkout 
        onNavigate={setCurrentPage} 
        cartItems={cart}
        user={user}
        onCheckout={handleCheckout}
      />
    ),
    payment: <Payment onNavigate={setCurrentPage} />,
    orderSuccess: <OrderSuccess onNavigate={setCurrentPage} />,
    customerLogin: (
  <CustomerLogin
    onNavigate={setCurrentPage}
    onLogin={handleLogin}
  />
),,
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