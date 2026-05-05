# Frontend Integration Guide - Supabase

## 📝 API Client Setup

File: `src/app/api/apiClient.ts` sudah siap dengan semua endpoints Supabase.

### Available Functions:

```typescript
// Products
api.getProducts()              // Get semua produk
api.getProduct(id)             // Get produk by ID

// Users
api.createUser({...})          // Create user baru (customer/seller)
api.getUsers()                 // Get semua users
api.login(email, password)     // Login user

// Orders
api.checkout(userId, items)    // Checkout order
api.getOrder(orderId)          // Get order details
api.getUserOrders(userId)      // Get user orders

// Utils
api.testDB()                   // Test DB connection
```

---

## 🔗 Frontend Components Integration

### 1. **HomePage - ProductsPage.tsx**
```typescript
import { api } from '@/app/api/apiClient';

export function ProductsPage() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### 2. **ProductDetail.tsx**
```typescript
export function ProductDetail({ productId }) {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const fetch = async () => {
      const data = await api.getProduct(productId);
      setProduct(data);
    };
    fetch();
  }, [productId]);

  return (
    <div>
      {product && (
        <>
          <h1>{product.name}</h1>
          <p>Rp {product.price.toLocaleString('id-ID')}</p>
          <p>Stock: {product.stock}</p>
          <img src={product.imageUrl} alt={product.name} />
        </>
      )}
    </div>
  );
}
```

### 3. **CustomerLogin.tsx - Integrasi Login**
```typescript
import { api } from '@/app/api/apiClient';

export function CustomerLogin({ onNavigate, onLogin }: CustomerLoginProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await api.createUser({
        ...formData,
        account_type: 'customer'
      });
      localStorage.setItem('user', JSON.stringify(user));
      onNavigate('homepage');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await api.login(formData.email, formData.password);
      localStorage.setItem('user', JSON.stringify(user));
      onNavigate('homepage');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={showRegister ? handleRegister : handleLogin}>
      {/* Form fields */}
      {error && <div className="text-red-500">{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : showRegister ? 'Daftar' : 'Masuk'}
      </button>
    </form>
  );
}
```

### 4. **SellerLogin.tsx**
```typescript
export function SellerLogin({ onNavigate }: SellerLoginProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await api.login(email, password);
      
      // Check if seller
      if (user.account_type !== 'seller') {
        throw new Error('Akun ini bukan akun penjual');
      }
      
      localStorage.setItem('user', JSON.stringify(user));
      onNavigate('seller-dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Form fields */}
      {error && <div className="text-red-500">{error}</div>}
      <button type="submit">Masuk</button>
    </form>
  );
}
```

### 5. **Cart.tsx - Checkout Integration**
```typescript
export function Cart({ userId, onCheckout }: CartProps) {
  const [items, setItems] = React.useState(JSON.parse(localStorage.getItem('cart') || '[]'));
  const [loading, setLoading] = React.useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const order = await api.checkout(userId, items);
      alert('Checkout berhasil!');
      localStorage.removeItem('cart');
      setItems([]);
      onCheckout(order.id);
    } catch (error) {
      alert('Error checkout: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Cart items */}
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? 'Processing...' : 'Checkout'}
      </button>
    </div>
  );
}
```

### 6. **CustomerProfile.tsx - User Orders**
```typescript
export function CustomerProfile({ userId }: CustomerProfileProps) {
  const [orders, setOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await api.getUserOrders(userId);
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h2>Riwayat Pembelian</h2>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
```

### 7. **SellerDashboard.tsx - Seller Orders**
```typescript
export function SellerDashboard({ sellerId }: SellerDashboardProps) {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    // Fetch seller's orders dari Supabase
    const fetchOrders = async () => {
      try {
        // TODO: Add endpoint untuk get seller orders
        // const data = await api.getSellerOrders(sellerId);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchOrders();
  }, [sellerId]);

  return (
    <div>
      <h2>Dashboard Penjual</h2>
      {/* Seller dashboard content */}
    </div>
  );
}
```

---

## 🛠️ Setup Steps

### 1. Add Environment Variables (Frontend)
Create `.env.local` di root project:
```
VITE_API_URL=http://localhost:3000
```

Update `src/app/api/apiClient.ts`:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
```

### 2. Test Connection
```bash
# Backend harus running
cd backend
npm run dev

# Frontend di terminal lain
npm run dev
```

Buka browser dan test: `http://localhost:5173`
Cek console jika ada error.

### 3. Setup Mock User (untuk testing)
```typescript
// Tambah di App.tsx
React.useEffect(() => {
  const testConnection = async () => {
    try {
      const result = await api.testDB();
      console.log('✅ DB Connected:', result);
    } catch (error) {
      console.error('❌ DB Connection Error:', error);
    }
  };
  testConnection();
}, []);
```

### 4. Add More Endpoints (Backend - Needed)
File: `backend/index.js` - Tambahkan endpoints baru jika diperlukan:

```javascript
// Get seller orders
app.get("/sellers/:id/orders", async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from("orders")
      .select(`
        *,
        users (id, name, email),
        order_items (*)
      `)
      .eq("seller_id", id)
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
});

// Update order status
app.patch("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  try {
    const { data, error } = await supabase
      .from("orders")
      .update({ status, updated_at: new Date() })
      .eq("id", id)
      .select();
    
    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
});

// Create product (seller only)
app.post("/products", async (req, res) => {
  const { seller_id, name, price, stock, category, description } = req.body;
  
  try {
    const { data, error } = await supabase
      .from("products")
      .insert({
        seller_id,
        name,
        price,
        stock,
        category,
        description
      })
      .select();
    
    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
});
```

---

## 📋 Checklist

- [ ] Backend running di localhost:3000
- [ ] Supabase project created dan credentials di `.env`
- [ ] Supabase tables created via SQL
- [ ] Sample data inserted (optional)
- [ ] Frontend dapat fetch `/products`
- [ ] Login/Register working
- [ ] Cart & Checkout working
- [ ] Customer profile showing orders
- [ ] Seller dashboard setup (optional)

---

## 🐛 Troubleshooting

### Products tidak load?
```bash
# Check backend
curl http://localhost:3000/products

# Check Supabase credentials di .env
# Check table permissions di Supabase
```

### Login error?
- Pastikan user sudah ada di database
- Cek Supabase credentials
- Cek CORS di backend (sudah enable)

### Checkout error?
- Pastikan stock cukup
- Pastikan seller_id valid
- Cek order creation di Supabase dashboard

---

## 📚 Next Features to Add

1. Search & Filter products
2. Product reviews
3. Seller shop page
4. Order tracking
5. Payment integration
6. Admin dashboard
7. Product analytics
