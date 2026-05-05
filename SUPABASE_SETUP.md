# Setup Supabase untuk Payung Geulis

## 1. Create Supabase Project
- Go to https://supabase.com
- Create new project
- Copy `Project URL` dan `Anon Key` ke `.env` file di backend

## 2. Create Tables di Supabase SQL Editor

### Users Table
```sql
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  password TEXT,
  account_type TEXT DEFAULT 'customer' CHECK (account_type IN ('customer', 'seller')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Sellers Table
```sql
CREATE TABLE sellers (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  shop_name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Products Table
```sql
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  seller_id BIGINT NOT NULL REFERENCES sellers(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  price BIGINT NOT NULL,
  stock BIGINT DEFAULT 0,
  category TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Orders Table
```sql
CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  seller_id BIGINT NOT NULL REFERENCES sellers(id) ON DELETE CASCADE,
  total BIGINT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'shipped', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Order Items Table
```sql
CREATE TABLE order_items (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  quantity BIGINT NOT NULL,
  price BIGINT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## 3. Setup Environment
Di folder `backend`, update file `.env`:
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-anon-key
PORT=3000
```

## 4. Install Dependencies
```bash
cd backend
npm install
```

## 5. Run Backend
```bash
npm run dev
```

## 6. Test Connection
```bash
curl http://localhost:3000/test-db
```

## 7. Sample Data (Optional)
Insert sample data ke Supabase:

### 1. Create a seller user first
```sql
INSERT INTO users (name, email, account_type) 
VALUES ('Admin Payung', 'admin@payunggeulis.com', 'seller')
RETURNING id;
```

### 2. Create seller profile
```sql
INSERT INTO sellers (user_id, shop_name, description)
VALUES (1, 'Payung Geulis Official', 'Toko payung batik terpercaya')
RETURNING id;
```

### 3. Insert sample products (use seller_id from step 2)
```sql
INSERT INTO products (seller_id, name, price, stock, category, description)
VALUES 
  (1, 'Payung Batik Parang', 350000, 25, 'Sedang', 'Payung batik parang klasik'),
  (1, 'Payung Batik Mega Mendung', 450000, 18, 'Besar', 'Payung batik mega mendung'),
  (1, 'Payung Batik Kawung', 400000, 30, 'Sedang', 'Payung batik kawung'),
  (1, 'Payung Batik Sekar Jagad', 500000, 12, 'Besar', 'Payung batik sekar jagad'),
  (1, 'Payung Mini Bordir', 250000, 40, 'Mini', 'Payung mini dengan bordir'),
  (1, 'Payung Jumbo Classic', 650000, 8, 'Besar', 'Payung jumbo ukuran classic'),
  (1, 'Payung Custom Design', 750000, 5, 'Sedang', 'Payung custom sesuai desain'),
  (1, 'Payung Eksklusif Gold', 850000, 3, 'Besar', 'Payung eksklusif dengan aksen emas'),
  (1, 'Payung Mini Floral', 275000, 35, 'Mini', 'Payung mini dengan motif bunga'),
  (1, 'Payung Batik Truntum', 425000, 20, 'Sedang', 'Payung batik truntum indah');
```

## API Endpoints

- `GET /test-db` - Test koneksi database
- `GET /products` - Get semua produk
- `GET /products/:id` - Get produk by ID
- `POST /login` - Login user
- `POST /users` - Create user baru
- `GET /users` - Get semua user
- `POST /checkout` - Checkout order
- `GET /orders/:id` - Get order details
- `GET /users/:id/orders` - Get user orders
