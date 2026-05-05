# 🚀 Quick Start - Frontend + Backend + Supabase

## 🔧 Setup Frontend

### 1. Create `.env.local` di root project
```
VITE_API_URL=http://localhost:3000
```

### 2. Backend sudah pake Supabase ✅
Check: `backend/.env` sudah ada template

---

## 🎯 Step-by-Step

### Step 1: Setup Supabase (PERTAMA KALI SAJA)
```bash
# 1. Go to https://supabase.com
# 2. Create new project
# 3. Copy credentials ke backend/.env
# 4. Run SQL setup dari SUPABASE_SETUP.md di Supabase SQL Editor
```

### Step 2: Start Backend
```bash
cd backend
npm install  # Jika belum
npm run dev
```

Backend akan running di: `http://localhost:3000`

### Step 3: Start Frontend  
```bash
# Di terminal baru
npm run dev
```

Frontend akan running di: `http://localhost:5173`

### Step 4: Test Connection
Buka browser console dan cek:
- Klik halaman dengan products
- Lihat di network tab apakah fetch ke `http://localhost:3000/products` berhasil

---

## 📁 File Structure

```
payungGeulis/
├── .env.example                    # Template .env frontend
├── .env.local                      # (Create this) - Env frontend
├── SUPABASE_SETUP.md              # Setup guide Supabase
├── FRONTEND_INTEGRATION.md        # Integration guide
├── src/
│   └── app/
│       ├── api/
│       │   └── apiClient.ts       # ✅ Ready - All endpoints
│       └── components/
│           ├── Homepage.tsx
│           ├── ProductsPage.tsx
│           ├── ProductDetail.tsx
│           ├── CustomerLogin.tsx  # Add login logic
│           ├── SellerLogin.tsx    # Add login logic
│           ├── Cart.tsx           # Add checkout
│           └── ...
├── backend/
│   ├── .env                       # Supabase credentials
│   ├── .env.example               # Template
│   ├── db.js                      # ✅ Ready - Supabase client
│   ├── index.js                   # ✅ Ready - All endpoints
│   └── package.json               # ✅ Updated
```

---

## ✅ Checklist

### Backend Setup
- [ ] Backend `.env` punya Supabase credentials
- [ ] Backend `npm install` done
- [ ] Backend running: `npm run dev`
- [ ] Test: `curl http://localhost:3000/test-db`

### Frontend Setup  
- [ ] Frontend `.env.local` ada
- [ ] Frontend `npm install` done (jika belum)
- [ ] Frontend running: `npm run dev`
- [ ] Test: Buka homepage, cek products load

### Supabase Setup
- [ ] Project created di supabase.com
- [ ] Tables created via SQL
- [ ] Sample data inserted (optional)
- [ ] Credentials di backend/.env

---

## 🎮 Components Integration Status

| Component | Status | Notes |
|-----------|--------|-------|
| ProductsPage | ✅ Ready | Fetch dari /products |
| ProductDetail | ✅ Ready | Fetch dari /products/:id |
| Cart | 📝 Need to add | handleCheckout logic |
| CustomerLogin | 📝 Need to add | handleRegister & handleLogin |
| SellerLogin | 📝 Need to add | handleLogin with seller check |
| CustomerProfile | 📝 Need to add | Fetch user orders |
| SellerDashboard | 📝 Need to add | Fetch seller orders |

See `FRONTEND_INTEGRATION.md` untuk kode detail setiap component.

---

## 🔗 API Endpoints Summary

| Method | Endpoint | Body | Response |
|--------|----------|------|----------|
| GET | `/test-db` | - | Test connection |
| GET | `/products` | - | Array of products |
| GET | `/products/:id` | - | Single product |
| POST | `/login` | `{email, password}` | User object |
| POST | `/users` | `{name, email, phone, password, account_type}` | User object |
| GET | `/users/:id/orders` | - | Array of orders |
| POST | `/checkout` | `{user_id, items}` | Order object |
| GET | `/orders/:id` | - | Order with items |

---

## 🐛 Common Issues

### "Cannot find API_BASE_URL"
→ Buka `src/app/api/apiClient.ts`, pastikan line 1:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
```

### "Products tidak load"
→ Cek:
1. Backend running? `curl http://localhost:3000/test-db`
2. Supabase credentials benar? Check `backend/.env`
3. Products table ada di Supabase? Check dashboard

### "Login error"
→ Cek:
1. User sudah ada di database?
2. Password benar?
3. CORS di backend? (Sudah di-enable)

---

## 📚 Documentation Files

- **SUPABASE_SETUP.md** - Database setup & SQL
- **FRONTEND_INTEGRATION.md** - Component integration guide
- **README.md** - Project overview

---

## 💡 Tips

1. Use Supabase dashboard untuk test queries
2. Check backend console untuk error logs
3. Use browser DevTools Network tab untuk debug API calls
4. Test endpoints dengan `curl` dulu sebelum integrate ke component

---

## 🚀 Next Steps (Opsional)

1. Add authentication middleware
2. Add product search/filter
3. Add payment integration
4. Add product reviews
5. Add seller shop page
6. Add admin dashboard
7. Add email notifications
