# 📱 PROTOTYPE DOCUMENTATION - PAYUNG GEULIS
## Website Penjualan Payung Kerajinan Khas Tasikmalaya

---

## 🎯 OVERVIEW PROJECT

**Nama Project:** Payung Geulis E-Commerce Website  
**Jumlah Halaman:** 15 Halaman (7 Customer + 8 Seller)  
**Platform:** Web (Desktop & Mobile Responsive)  
**Color Scheme:**
- **Customer Side:** Amber (#D97706), Orange (#EA580C), Cream (#FFF8F0)
- **Seller Side:** Emerald (#059669), Teal (#0D9488)

---

## 📐 DESIGN SYSTEM

### Color Palette

#### Customer Theme
```
Primary: #D97706 (Amber-600)
Secondary: #EA580C (Orange-600)  
Background: #FFF8F0 (Cream)
Text: #1F2937 (Gray-900)
Accent: #F59E0B (Amber-500)
```

#### Seller Theme
```
Primary: #059669 (Emerald-600)
Secondary: #0D9488 (Teal-600)
Background: #F0FDF4 (Emerald-50)
Text: #1F2937 (Gray-900)
Accent: #10B981 (Emerald-500)
```

### Typography
```
Headings:
- H1: 36px, Bold (Homepage Titles)
- H2: 30px, Bold (Section Headers)
- H3: 24px, Bold (Card Titles)
- H4: 20px, Semibold (Subsections)

Body:
- Large: 18px, Regular (Intro text)
- Base: 16px, Regular (Body text)
- Small: 14px, Regular (Captions)
- XSmall: 12px, Regular (Labels)

Buttons:
- Large: 18px, Semibold
- Medium: 16px, Semibold  
- Small: 14px, Medium
```

### Spacing System
```
Base Unit: 4px
- XS: 8px (2 units)
- S: 12px (3 units)
- M: 16px (4 units)
- L: 24px (6 units)
- XL: 32px (8 units)
- 2XL: 48px (12 units)
- 3XL: 64px (16 units)
```

### Border Radius
```
- Small: 8px (buttons, inputs)
- Medium: 12px (cards)
- Large: 16px (modals)
- XLarge: 24px (hero sections)
- Full: 9999px (pills, badges)
```

---

## 🎨 COMPONENT SPECIFICATIONS

### Header Component
**Size:** Full width x 80px height  
**Elements:**
- Logo: 48px x 48px (square with rounded corners)
- Navigation links: 16px font, 32px spacing
- Icons: 20px x 20px (Search, Cart, User)
- Cart badge: 20px circle, absolute positioned

**States:**
- Default: White background, subtle shadow
- Scroll: Sticky position with enhanced shadow
- Mobile: Hamburger menu (≤768px)

### Button Styles

#### Primary Button (Customer)
```
Background: Gradient from Amber-600 to Amber-800
Text: White, 16px Semibold
Padding: 16px 32px
Border Radius: 12px
Shadow: 0 4px 6px rgba(217, 119, 6, 0.3)

Hover:
- Scale: 1.05
- Shadow: 0 6px 12px rgba(217, 119, 6, 0.4)
```

#### Primary Button (Seller)
```
Background: Gradient from Emerald-600 to Teal-600
Text: White, 16px Semibold
Padding: 16px 32px
Border Radius: 12px
Shadow: 0 4px 6px rgba(5, 150, 105, 0.3)

Hover:
- Scale: 1.05
- Shadow: 0 6px 12px rgba(5, 150, 105, 0.4)
```

#### Secondary Button
```
Background: White
Text: Gray-700, 16px Semibold
Padding: 14px 28px
Border: 2px solid Gray-200
Border Radius: 12px

Hover:
- Background: Gray-50
- Border: Amber-300 (Customer) / Emerald-300 (Seller)
```

### Card Component
```
Background: White
Padding: 24px
Border Radius: 16px
Shadow: 0 1px 3px rgba(0, 0, 0, 0.1)

Hover:
- Shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
- Transform: translateY(-4px)
- Transition: 0.3s ease
```

### Product Card
```
Size: 300px x 400px (flexible)
Structure:
- Image Container: 300px x 300px (1:1 ratio)
- Content Padding: 20px
- Title: 18px Semibold (2 lines max)
- Price: 24px Bold (Amber-700)
- Rating: 14px with star icons
- Button: Full width

Hover Effect:
- Scale: 1.02
- Shadow enhanced
- Button background darkens
```

### Input Fields
```
Height: 48px
Padding: 12px 16px
Border: 2px solid Gray-200
Border Radius: 12px
Font: 16px Regular

Focus:
- Border: Amber-600 (Customer) / Emerald-600 (Seller)
- Outline: None
- Shadow: 0 0 0 3px rgba(color, 0.1)

With Icon:
- Padding Left: 48px
- Icon Position: Absolute left 16px, center vertically
```

---

## 📱 HALAMAN CUSTOMER (7 Pages)

### 1. HOMEPAGE

**URL:** `/` atau `/homepage`

#### Layout Structure
```
┌─────────────────────────────────┐
│         Header (Sticky)         │ 80px
├─────────────────────────────────┤
│      Hero Section               │ 600px
│   - Logo Placeholder            │
│   - Headline + Subheading       │
│   - 2 CTA Buttons               │
├─────────────────────────────────┤
│    Featured Products Grid       │ Auto
│   - 8 Product Cards (4x2)       │
├─────────────────────────────────┤
│      Why Choose Us              │ 400px
│   - 3 Feature Cards             │
├─────────────────────────────────┤
│     Customer Testimonials       │ 500px
│   - 3 Review Cards              │
├─────────────────────────────────┤
│          Footer                 │ 300px
└─────────────────────────────────┘
```

#### Hero Section Specifications
```
Background: Gradient from Amber-50 via Orange-50 to Amber-100
Height: 600px (Desktop), 500px (Mobile)
Container: Max-width 1280px, centered

Elements:
1. Badge
   - Text: "Kerajinan Khas Tasikmalaya"
   - Background: Amber-600/10
   - Padding: 8px 16px
   - Border Radius: Full (pill shape)

2. Main Headline
   - Font Size: 48px (Desktop), 32px (Mobile)
   - Font Weight: Bold
   - Color: Gray-900
   - Max Width: 800px
   - Line Height: 1.2

3. Subheading
   - Font Size: 20px (Desktop), 16px (Mobile)
   - Color: Gray-600
   - Max Width: 600px
   - Margin Top: 16px

4. CTA Buttons (Horizontal Stack)
   - Primary: "Lihat Koleksi" → Navigate to Products Page
   - Secondary: "Pelajari Lebih Lanjut" → Navigate to About Page
   - Gap: 16px
   - Margin Top: 32px

5. Decorative Elements
   - Background blur circles (Amber and Orange)
   - Opacity: 10%
   - Blur: 80px
```

#### Featured Products Section
```
Title: "Koleksi Unggulan"
Subtitle: "Payung geulis pilihan dengan motif batik terbaik"

Grid Layout:
- Desktop: 4 columns
- Tablet: 2 columns  
- Mobile: 1 column
- Gap: 24px

Product Card Data (8 items):
1. Payung Batik Parang - Rp 145.000
2. Payung Mini Bordir - Rp 85.000
3. Payung Batik Mega Mendung - Rp 165.000
4. Payung Jumbo Classic - Rp 185.000
5. Payung Mini Floral - Rp 75.000
6. Custom Design Premium - Rp 225.000
7. Payung Batik Kawung - Rp 155.000
8. Payung Travel Compact - Rp 95.000

Each Card Includes:
- Image placeholder (gradient Amber-100 to Orange-100)
- Product name
- Price (Bold, Amber-700)
- Star rating (4.5-5 stars)
- "Lihat Detail" button → Navigate to Product Detail
```

#### Features Section (3 Cards)
```
Card 1: Kualitas Premium
- Icon: Award (Lucide React)
- Title: "Kualitas Premium"
- Description: "Bahan pilihan tahan lama"

Card 2: Pengiriman Cepat
- Icon: Truck (Lucide React)
- Title: "Pengiriman Cepat"
- Description: "Kirim ke seluruh Indonesia"

Card 3: Garansi Produk
- Icon: Shield (Lucide React)
- Title: "Garansi Produk"
- Description: "Garansi 30 hari"

Layout: 3 columns, equal width
Card Style: White background, rounded-xl, shadow-sm
Icon Size: 48px, Amber-600 color
```

#### Testimonials Section
```
Title: "Apa Kata Pelanggan"
Subtitle: "Lebih dari 1000+ pelanggan puas"

3 Review Cards:
Card 1:
- Name: "Ibu Siti Nurhaliza"
- Location: "Jakarta"
- Rating: 5 stars
- Review: "Payung sangat cantik dan berkualitas..."

Card 2:
- Name: "Bapak Ahmad Yani"
- Location: "Bandung"
- Rating: 5 stars
- Review: "Pelayanan ramah dan pengiriman cepat..."

Card 3:
- Name: "Ibu Dewi Lestari"
- Location: "Surabaya"
- Rating: 5 stars
- Review: "Motif batiknya original dan unik..."

Card Style:
- Background: White
- Padding: 32px
- Border Radius: 16px
- Shadow: sm
- Avatar: 64px circle (initials)
```

#### Footer
```
Background: Gray-900
Color: White/Gray-300
Padding: 64px 24px

Sections:
1. Brand Info (Logo + Description)
2. Quick Links (Beranda, Produk, Tentang, Kontak)
3. Kategori (Mini, Sedang, Besar, Custom)
4. Kontak (Email, Phone, Address)
5. Portal Penjual Link

Bottom Bar:
- Copyright text
- Social media icons (placeholder)
```

#### Interactive Elements & Hotspots

**Header:**
- Logo → Navigate to Homepage
- "Beranda" link → Navigate to Homepage
- "Produk" link → Navigate to Products Page
- "Tentang" link → Navigate to About Page
- Search icon → Open Search Modal
- Cart icon → Navigate to Cart Page (badge shows "3")
- User icon → Navigate to Customer Login

**Hero Section:**
- "Lihat Koleksi" button → Navigate to Products Page
- "Pelajari Lebih Lanjut" button → Navigate to About Page

**Featured Products:**
- Each product card → Navigate to Product Detail Page
- "Lihat Semua Produk" button → Navigate to Products Page

**Footer:**
- "Portal Penjual" link → Navigate to Seller Login

---

### 2. PRODUCTS PAGE

**URL:** `/products`

#### Layout Structure
```
┌─────────────────────────────────┐
│         Header (Sticky)         │ 80px
├─────────────────────────────────┤
│      Hero/Title Section         │ 200px
│   - Badge + Title               │
│   - Breadcrumb                  │
├─────────────────────────────────┤
│   Filter Bar (Sticky)           │ 80px
│   - Category Tabs               │
│   - Sort Dropdown               │
├─────────────────────────────────┤
│    Products Grid (12 items)     │ Auto
│   - 4 columns x 3 rows          │
├─────────────────────────────────┤
│        Pagination               │ 80px
└─────────────────────────────────┘
```

#### Hero Section
```
Background: Gradient from Amber-50 via Orange-50 to Amber-100
Height: 200px
Content: Centered

Elements:
- Badge: "Koleksi Lengkap"
- Title: "Semua Produk Payung Geulis" (32px Bold)
- Subtitle: "Temukan payung favorit Anda" (16px)
```

#### Filter Bar
```
Background: White
Height: 80px
Position: Sticky (top: 80px)
Shadow: sm
Padding: 16px 24px

Left Side - Category Tabs:
- "Semua" (Active default)
- "Mini"
- "Sedang"
- "Besar"
- "Custom"

Tab Style:
- Default: Gray-600, background transparent
- Active: Amber-700, background Amber-50, border-bottom 2px

Right Side:
- Sort dropdown: "Urutkan: Terbaru"
```

#### Products Grid
```
12 Product Cards (same as Homepage cards)
Grid: 4 columns (Desktop), 2 (Tablet), 1 (Mobile)
Gap: 24px
Padding: 48px 24px

Products:
All 8 from homepage + 4 additional:
9. Payung Lipat Portable - Rp 105.000
10. Payung Couple Set - Rp 275.000
11. Payung Anak Karakter - Rp 65.000
12. Payung Golf Premium - Rp 195.000
```

#### Pagination
```
Alignment: Center
Margin: 48px 0

Elements:
- "Sebelumnya" button (disabled state)
- Page 1 (Active - Amber-600 background)
- Page 2 (Inactive - Gray-200)
- Page 3 (Inactive - Gray-200)
- "Selanjutnya" button

Button Style:
- Height: 40px
- Padding: 8px 16px
- Border Radius: 8px
- Gap: 8px between items
```

#### Interactive Elements & Hotspots

**Filter Bar:**
- Category tabs → Filter products by category (visual feedback only in prototype)
- Sort dropdown → Open dropdown menu (can be prototype modal)

**Products:**
- Each product card → Navigate to Product Detail Page

**Pagination:**
- Page number buttons → Change page (visual feedback)
- Next/Previous → Navigate between pages

---

### 3. ABOUT PAGE

**URL:** `/about`

#### Layout Structure
```
┌─────────────────────────────────┐
│         Header (Sticky)         │ 80px
├─────────────────────────────────┤
│         Hero Section            │ 300px
│   - Title + Description         │
├─────────────────────────────────┤
│      Story Section              │ 500px
│   - Text + Image Layout         │
├─────────────────────────────────┤
│      Values Section             │ 400px
│   - 3 Value Cards               │
├─────────────────────────────────┤
│     Process Section             │ 600px
│   - 4 Step Cards                │
├─────────────────────────────────┤
│         CTA Section             │ 300px
│   - "Lihat Katalog" Button      │
└─────────────────────────────────┘
```

#### Hero Section
```
Background: Gradient Amber-50 to Orange-50
Height: 300px
Content: Centered

Badge: "Tentang Kami"
Title: "Payung Geulis Tasikmalaya" (40px Bold)
Description: 
"Melestarikan budaya dan kerajinan tradisional 
Tasikmalaya sejak 1950. Setiap payung dibuat 
dengan penuh cinta dan ketelitian oleh pengrajin 
berpengalaman."
(18px, max-width 800px)
```

#### Story Section
```
Layout: 2 columns (Desktop), 1 column (Mobile)
Background: White
Padding: 96px 24px

Left Column - Image:
- Size: 600px x 400px
- Background: Gradient Amber-100 to Orange-100
- Border Radius: 16px
- Image placeholder text: "Workshop Pengrajin"

Right Column - Text:
Title: "Sejarah & Tradisi" (32px Bold)
Paragraphs: 3 paragraphs, 16px line-height 1.6
Content:
"Payung Geulis adalah warisan budaya Tasikmalaya 
yang telah diwariskan turun-temurun..."

"Setiap payung dibuat dengan teknik tradisional 
yang membutuhkan keahlian khusus..."

"Kami bangga melestarikan kerajinan ini sambil 
menghadirkan inovasi modern..."
```

#### Values Section
```
Title: "Nilai-Nilai Kami" (32px Bold, Centered)
Background: Gray-50
Padding: 96px 24px

3 Value Cards (horizontal layout):

Card 1: Kualitas
- Icon: Award (64px, Amber-600)
- Title: "Kualitas Terjamin"
- Description: "Bahan premium dan proses kontrol ketat"

Card 2: Tradisi
- Icon: Award (64px, Amber-600)
- Title: "Melestarikan Tradisi"
- Description: "Teknik turun-temurun pengrajin ahli"

Card 3: Inovasi
- Icon: Award (64px, Amber-600)
- Title: "Inovasi Modern"
- Description: "Desain kontemporer dengan sentuhan tradisional"

Card Style:
- Background: White
- Padding: 48px 32px
- Border Radius: 16px
- Text Align: Center
```

#### Process Section
```
Title: "Proses Pembuatan" (32px Bold, Centered)
Subtitle: "4 Tahap Utama"
Background: White
Padding: 96px 24px

4 Step Cards (2x2 grid):

Step 1: Pemilihan Bahan
- Number: "01" (48px Bold, Amber-600)
- Title: "Pemilihan Bahan"
- Description: "Memilih bambu, kain, dan bahan berkualitas"

Step 2: Pembuatan Rangka
- Number: "02"
- Title: "Pembuatan Rangka"
- Description: "Merakit rangka bambu dengan presisi"

Step 3: Pemasangan Kain
- Number: "03"
- Title: "Pemasangan Kain"
- Description: "Memasang kain batik dengan rapi"

Step 4: Finishing
- Number: "04"
- Title: "Finishing & QC"
- Description: "Pemeriksaan akhir dan quality control"

Card Style:
- Border: 2px solid Amber-200
- Padding: 32px
- Border Radius: 16px
- Hover: Border becomes Amber-600
```

#### CTA Section
```
Background: Gradient from Amber-600 to Orange-600
Height: 300px
Content: Centered
Color: White

Title: "Tertarik dengan Produk Kami?" (32px Bold)
Description: "Lihat katalog lengkap produk Payung Geulis"

Button: "Lihat Katalog Produk"
- Large size (20px font)
- White background
- Amber-700 text
- Shadow: large
```

#### Interactive Elements & Hotspots

**CTA Section:**
- "Lihat Katalog Produk" button → Navigate to Products Page

**Footer:**
- "Kembali ke Beranda" link → Navigate to Homepage

---

### 4. PRODUCT DETAIL PAGE

**URL:** `/product` (with ID parameter)

#### Layout Structure
```
┌─────────────────────────────────┐
│         Header (Sticky)         │ 80px
├─────────────────────────────────┤
│        Breadcrumb               │ 60px
├─────────────────────────────────┤
│    Product Detail Section       │
│  ┌──────────┬─────────────────┐ │
│  │  Image   │   Info Panel    │ │
│  │ Gallery  │   - Title       │ │
│  │  (Left)  │   - Price       │ │
│  │          │   - Rating      │ │
│  │          │   - Options     │ │
│  │          │   - Quantity    │ │
│  │          │   - Buttons     │ │
│  └──────────┴─────────────────┘ │
├─────────────────────────────────┤
│      Description Tabs           │
│  - Deskripsi | Spesifikasi     │
│  - Ulasan                       │
├─────────────────────────────────┤
│    Related Products             │
│  - 4 Product Cards              │
└─────────────────────────────────┘
```

#### Breadcrumb
```
Background: White
Border Bottom: 1px Gray-200
Padding: 16px 24px

Links:
Beranda / Produk / Payung Batik Parang

Style: Gray-600, hover Amber-700
Separator: "/" Gray-400
```

#### Product Detail Section
```
Background: White
Padding: 48px 24px
Max Width: 1280px

Left Side - Image Gallery (50%):
Main Image:
- Size: 600px x 600px (1:1)
- Background: Gradient Amber-100 to Orange-100
- Border Radius: 16px
- Border: 1px Gray-200

Thumbnails (Below):
- 4 thumbnails x 120px
- Gap: 16px
- Active: Border 2px Amber-600
- Inactive: Border 1px Gray-200

Right Side - Info Panel (50%):
Product Name:
- "Payung Batik Parang Klasik"
- Font: 32px Bold
- Color: Gray-900

Price:
- Original: "Rp 175.000" (16px, Gray-500, line-through)
- Sale: "Rp 145.000" (36px Bold, Amber-700)

Rating:
- 4.8 ★★★★★ (48 ulasan)
- Stars: Amber-500
- Text: Gray-600

Stock Status:
- Badge: "Stok: 15 pcs tersedia"
- Background: Green-50
- Text: Green-700

Variant Options:
Section: "Pilih Warna/Motif"
Options (Radio buttons):
- Merah (Active)
- Biru
- Hijau
- Kuning

Style: 
- Pill buttons
- Active: Amber-600 bg, White text
- Inactive: Gray-200 bg, Gray-700 text

Quantity Selector:
Label: "Jumlah"
Controls:
- Minus button (-)
- Number input (default: 1)
- Plus button (+)

Style:
- Height: 48px
- Border: 2px Gray-200
- Border Radius: 12px
- Buttons: 40px width

Action Buttons:
1. "Tambah ke Keranjang"
   - Secondary style (Amber outline)
   - Full width
   - Height: 56px
   - Icon: Shopping Cart

2. "Beli Sekarang"
   - Primary style (Gradient Amber)
   - Full width
   - Height: 56px
   - Margin Top: 12px

Features List:
- ✓ Gratis Ongkir (min. Rp 100.000)
- ✓ Garansi 30 Hari
- ✓ Original Tasikmalaya

Icons: Check Circle (Emerald-600)
```

#### Description Tabs
```
Background: Gray-50
Padding: 48px 24px

Tab Navigation:
- "Deskripsi" (Active)
- "Spesifikasi"
- "Ulasan (48)"

Style:
- Active: Amber-600, Border-bottom 2px
- Inactive: Gray-600

Tab Content: Deskripsi
Title: "Detail Produk" (24px Bold)
Paragraphs: 3-4 paragraphs about product
Font: 16px, Line-height 1.8

Tab Content: Spesifikasi
Table format:
- Bahan Rangka: Bambu Premium
- Bahan Kain: Katun Batik Cap
- Diameter: 95 cm
- Tinggi: 85 cm
- Berat: 400 gram
- Gagang: Kayu Jati

Tab Content: Ulasan
3 Review Cards with:
- Avatar + Name + Date
- 5 Star rating
- Review text
```

#### Related Products
```
Title: "Produk Terkait" (24px Bold)
Background: White
Padding: 48px 24px

4 Product Cards (horizontal scroll on mobile):
- Similar products from same category
- Same card style as homepage
```

#### Interactive Elements & Hotspots

**Breadcrumb:**
- "Beranda" → Navigate to Homepage
- "Produk" → Navigate to Products Page

**Image Gallery:**
- Thumbnails → Change main image (visual feedback)

**Variant Options:**
- Color buttons → Select variant (visual active state)

**Quantity:**
- Minus button → Decrease quantity
- Plus button → Increase quantity
- Input → Manual input

**Action Buttons:**
- "Tambah ke Keranjang" → Navigate to Cart Page
- "Beli Sekarang" → Navigate to Checkout Page

**Tabs:**
- Tab buttons → Switch content (overlay change)

**Related Products:**
- Product cards → Navigate to respective Product Detail

---

### 5. CART PAGE

**URL:** `/cart`

#### Layout Structure
```
┌─────────────────────────────────┐
│         Header (Sticky)         │ 80px
├─────────────────────────────────┤
│       Page Title Bar            │ 100px
│  "Keranjang Belanja" + Badge    │
├─────────────────────────────────┤
│    Main Content (2 columns)     │
│  ┌──────────┬─────────────────┐ │
│  │  Cart    │   Order         │ │
│  │  Items   │   Summary       │ │
│  │  (70%)   │   (30%)         │ │
│  │          │   [Sticky]      │ │
│  └──────────┴─────────────────┘ │
└─────────────────────────────────┘
```

#### Page Title Bar
```
Background: White
Border Bottom: 1px Gray-200
Padding: 24px

Elements:
- Shopping Cart icon (24px, Amber-700)
- Title: "Keranjang Belanja" (28px Bold)
- Badge: "3 item" (Amber-100 bg, Amber-700 text)
```

#### Cart Items Section (Left Column)
```
3 Cart Item Cards:

Card Structure:
Background: White
Padding: 24px
Border Radius: 16px
Shadow: sm
Margin Bottom: 16px

Each Card Contains:
1. Product Image
   - Size: 120px x 120px
   - Border Radius: 12px

2. Product Info (Middle)
   - Name: "Payung Batik Parang" (18px Semibold)
   - Variant: "Warna: Merah" (14px Gray-600)
   - Price: "Rp 145.000" (20px Bold, Amber-700)
   - Stock: "Stok: 15" (12px Green-600)

3. Quantity Controls (Right side)
   - Minus button (-)
   - Number input (1, 2, or 3)
   - Plus button (+)
   
   Style:
   - Height: 40px
   - Border: 1px Gray-300
   - Border Radius: 8px

4. Actions (Far Right)
   - Delete button (Trash icon)
   - Color: Red-600
   - Hover: Red-700 bg with opacity

Cart Items Data:
Item 1: Payung Batik Parang (Merah) - Rp 145.000 x 1
Item 2: Payung Mini Bordir (Biru) - Rp 85.000 x 2
Item 3: Payung Jumbo Classic (Hijau) - Rp 185.000 x 1

Bottom Actions:
- "Lanjut Belanja" button (Secondary)
  - Icon: Arrow Left
  - Navigate to Products Page
```

#### Order Summary (Right Column - Sticky)
```
Background: White
Padding: 24px
Border Radius: 16px
Shadow: md
Position: Sticky (top: 100px)

Title: "Ringkasan Pesanan" (20px Bold)
Divider

Price Breakdown:
Subtotal (3 items)         Rp 415.000
Diskon                     - Rp 15.000
Biaya Pengiriman          Rp 0
                          ─────────────
Total                     Rp 400.000

Style:
- Labels: 14px Gray-600
- Values: 14px Gray-900, align right
- Total: 20px Bold Amber-700

Promo Code Section:
Input field:
- Placeholder: "Kode promo"
- Height: 48px
- Button: "Terapkan" (attached)

Checkout Button:
- Text: "Lanjut ke Checkout"
- Style: Primary gradient Amber
- Width: Full
- Height: 56px
- Font: 18px Semibold
- Icon: Arrow Right

Security Badge:
- Icon: Shield Check (Green)
- Text: "Pembayaran aman & terpercaya"
- Font: 12px Gray-600
```

#### Interactive Elements & Hotspots

**Cart Items:**
- Minus button → Decrease quantity (min: 1)
- Plus button → Increase quantity (max: stock)
- Delete icon → Remove item from cart (with confirmation)

**Order Summary:**
- Promo code input → Apply discount code
- "Terapkan" button → Validate and apply promo
- "Lanjut ke Checkout" button → Navigate to Checkout Page

**Bottom Actions:**
- "Lanjut Belanja" button → Navigate to Products Page

---

### 6. CHECKOUT PAGE

**URL:** `/checkout`

#### Layout Structure
```
┌─────────────────────────────────┐
│         Header (Sticky)         │ 80px
├─────────────────────────────────┤
│      Progress Indicator         │ 100px
│  ○───○───○───○                  │
│  Cart Checkout Payment Done     │
├─────────────────────────────────┤
│    Main Content (2 columns)     │
│  ┌──────────┬─────────────────┐ │
│  │  Forms   │   Order         │ │
│  │  Section │   Summary       │ │
│  │  (65%)   │   (35%)         │ │
│  │          │   [Sticky]      │ │
│  └──────────┴─────────────────┘ │
└─────────────────────────────────┘
```

#### Progress Indicator
```
Background: White
Border Bottom: 1px Gray-200
Padding: 32px
Max Width: 800px
Centered

4 Steps (Horizontal):
1. Keranjang (Completed - Green check)
2. Checkout (Current - Amber highlight)
3. Pembayaran (Upcoming - Gray)
4. Selesai (Upcoming - Gray)

Step Style:
- Circle: 40px diameter
- Number or Icon
- Label below
- Connecting line: 2px

Active Step:
- Circle: Amber-600 bg
- Text: White
- Label: Amber-700

Completed Step:
- Circle: Green-600 bg with check
- Label: Green-700

Upcoming Step:
- Circle: Gray-200 bg
- Text: Gray-500
- Label: Gray-500
```

#### Forms Section (Left Column)
```
3 Form Cards (Vertical Stack):

CARD 1: Informasi Pengiriman
Background: White
Padding: 32px
Border Radius: 16px
Shadow: sm
Margin Bottom: 24px

Title: "Informasi Pengiriman" (20px Bold)
Icon: Map Pin

Form Fields:
1. Nama Lengkap *
   - Input text
   - Placeholder: "Masukkan nama lengkap"

2. Nomor Telepon *
   - Input tel
   - Placeholder: "08xx-xxxx-xxxx"
   - Icon: Phone

3. Email *
   - Input email
   - Placeholder: "email@contoh.com"
   - Icon: Mail

4. Alamat Lengkap *
   - Textarea (3 rows)
   - Placeholder: "Jalan, RT/RW, Kelurahan..."

5. Provinsi, Kota, Kecamatan (3 columns)
   - Select dropdown
   - Options: List of regions

6. Kode Pos *
   - Input text
   - Placeholder: "Contoh: 46126"

All inputs:
- Height: 48px (56px for textarea)
- Border: 2px Gray-200
- Border Radius: 12px
- Focus: Amber-600 border

---

CARD 2: Metode Pengiriman
Background: White
Padding: 32px
Border Radius: 16px
Margin Bottom: 24px

Title: "Pilih Pengiriman" (20px Bold)
Icon: Truck

4 Shipping Options (Radio cards):

Option 1: JNE Regular (Selected default)
- Radio button (Amber-600)
- Logo placeholder
- Name: "JNE Regular"
- Duration: "2-3 hari"
- Price: "Rp 15.000"

Option 2: J&T Express
- Name: "J&T Express"
- Duration: "2-3 hari"
- Price: "Rp 12.000"

Option 3: SiCepat
- Name: "SiCepat"
- Duration: "3-4 hari"
- Price: "Rp 10.000"

Option 4: Gratis Ongkir
- Badge: "Min. Rp 100k"
- Name: "Gratis Ongkir"
- Duration: "4-5 hari"
- Price: "Rp 0" (Green text)

Card Style:
- Border: 2px solid
- Selected: Amber-600 border, Amber-50 bg
- Unselected: Gray-200 border, White bg
- Padding: 20px
- Border Radius: 12px
- Margin: 8px 0

---

CARD 3: Metode Pembayaran
Background: White
Padding: 32px
Border Radius: 16px

Title: "Metode Pembayaran" (20px Bold)
Icon: Credit Card

3 Payment Method Groups:

Group 1: Transfer Bank
Radio card with bank options:
- BCA, Mandiri, BNI, BRI
- Small bank logos (40px)
- Grid: 2x2

Group 2: E-Wallet
Radio card with e-wallet options:
- OVO, GoPay, Dana, ShopeePay
- Small logos (40px)
- Grid: 2x2

Group 3: COD
Radio card:
- Icon: Cash
- "Bayar di Tempat (COD)"
- "Bayar saat produk diterima"
- Badge: "+Rp 5.000"

Card Style: Same as shipping options
```

#### Order Summary (Right Column - Sticky)
```
Background: White
Padding: 24px
Border Radius: 16px
Shadow: md
Position: Sticky (top: 100px)

Title: "Ringkasan Pesanan" (20px Bold)

Product List (3 items):
Each item:
- Mini image (60px x 60px)
- Name + Variant
- Quantity x Price

Product 1: Payung Batik x1
Product 2: Payung Mini x2
Product 3: Payung Jumbo x1

Divider

Price Summary:
Subtotal (3 items)         Rp 415.000
Diskon promo               - Rp 15.000
Biaya Pengiriman (JNE)     Rp 15.000
                          ─────────────
Total Pembayaran          Rp 415.000

Style:
- Labels: 14px Gray-600
- Values: 14px Gray-900
- Total: 24px Bold Amber-700
- Background total: Amber-50
- Padding: 16px

Confirmation Checkbox:
□ "Saya telah membaca dan menyetujui 
   syarat dan ketentuan yang berlaku"
- Size: 20px
- Required before proceeding

Action Buttons (Vertical Stack):
1. "Konfirmasi Pesanan"
   - Primary Amber gradient
   - Full width
   - Height: 56px
   - Font: 18px Semibold
   - Disabled until checkbox checked

2. "Kembali ke Keranjang"
   - Secondary (Outline)
   - Full width
   - Height: 48px
   - Icon: Arrow Left

Security Icons (Bottom):
- Shield icon + "Secure Payment"
- Lock icon + "SSL Encrypted"
- Font: 11px Gray-500
```

#### Interactive Elements & Hotspots

**Progress Bar:**
- Steps show completion status (visual only)

**Forms:**
- All input fields → Editable
- Select dropdowns → Open options list
- Shipping options → Select radio (visual feedback)
- Payment options → Select radio (visual feedback)

**Order Summary:**
- Checkbox → Enable/disable confirmation button
- "Konfirmasi Pesanan" → Navigate to success state or payment page
- "Kembali ke Keranjang" → Navigate to Cart Page

**Responsive Behavior:**
- Mobile: Stack columns vertically
- Order summary appears after forms on mobile

---

### 7. CUSTOMER LOGIN PAGE

**URL:** `/customerLogin`

#### Layout Structure
```
┌─────────────────────────────────┐
│       Simple Header             │ 80px
│  Logo + "Kembali ke Beranda"    │
├─────────────────────────────────┤
│                                 │
│     Centered Login Card         │
│     (Max width 480px)           │
│                                 │
│  - Welcome Message              │
│  - Login Form                   │
│  - OR divider                   │
│  - Social Login                 │
│  - Register Link                │
│                                 │
└─────────────────────────────────┘
```

#### Header
```
Background: White
Height: 80px
Shadow: sm

Left: Logo (same as other pages)
Right: "Kembali ke Beranda" link
- Icon: Arrow Left
- Color: Gray-700
- Hover: Amber-700
```

#### Login Card
```
Background: White
Max Width: 480px
Padding: 48px
Border Radius: 24px
Shadow: xl
Position: Centered (margin: 80px auto)

Welcome Section:
- Icon: User Circle (64px, Amber-600)
- Title: "Selamat Datang!" (28px Bold)
- Subtitle: "Masuk ke akun Payung Geulis Anda"
- Text Align: Center
- Margin Bottom: 40px

Login Form:
Field 1: Email / Username
- Label: "Email atau Username" *
- Icon: Mail (inside input, left)
- Placeholder: "Masukkan email atau username"
- Height: 52px
- Border Radius: 12px

Field 2: Password
- Label: "Password" *
- Icon: Lock (inside input, left)
- Icon: Eye (inside input, right) - Toggle show/hide
- Placeholder: "Masukkan password"
- Type: password (toggleable to text)
- Height: 52px

Remember Me & Forgot Password Row:
- Left: Checkbox "Ingat saya"
- Right: "Lupa password?" link (Amber-600)
- Margin: 16px 0

Login Button:
- Text: "Masuk"
- Style: Primary gradient Amber
- Full width
- Height: 52px
- Font: 17px Semibold
- Margin Top: 24px

OR Divider:
- Line with text "atau masuk dengan"
- Gray-300 lines
- Gray-500 text
- Margin: 32px 0

Social Login Buttons (2 columns):
Button 1: Google
- Icon: Google logo
- Text: "Google"
- Background: White
- Border: 2px Gray-200
- Height: 48px

Button 2: Facebook
- Icon: Facebook logo
- Text: "Facebook"
- Background: White
- Border: 2px Gray-200
- Height: 48px

Guest Option:
- Divider
- Text: "Belum punya akun?"
- Link: "Daftar sekarang" (Amber-600, Bold)
- Text: "atau"
- Link: "Lanjut sebagai tamu" (Gray-600)
- Text Align: Center
```

#### Interactive Elements & Hotspots

**Header:**
- "Kembali ke Beranda" → Navigate to Homepage

**Login Form:**
- Eye icon → Toggle password visibility
- "Lupa password?" → Navigate to password reset (overlay)
- "Masuk" button → Navigate to Homepage (logged in state)

**Social Login:**
- "Google" button → Social auth flow (prototype: navigate to Homepage)
- "Facebook" button → Social auth flow (prototype: navigate to Homepage)

**Registration:**
- "Daftar sekarang" → Navigate to registration page (overlay)
- "Lanjut sebagai tamu" → Navigate to Products or Cart

---

## 📱 HALAMAN SELLER (8 Pages)

### 8. SELLER LOGIN PAGE

**URL:** `/sellerLogin`

#### Layout Structure
```
┌─────────────────────────────────┐
│       Header (Seller Brand)     │ 80px
│  Logo + "Kembali ke Toko"       │
├─────────────────────────────────┤
│                                 │
│     Centered Login Card         │
│     (Max width 500px)           │
│                                 │
│  - Emerald Header Section       │
│  - Login Form                   │
│  - Action Buttons               │
│                                 │
└─────────────────────────────────┘
```

#### Page Background
```
Background: Gradient from Emerald-50 via Teal-50 to Cyan-50
Min Height: 100vh
```

#### Header
```
Background: White/80 (backdrop blur)
Height: 80px
Shadow: sm

Left: Logo + "Dashboard Penjual" text
Right: "Kembali ke Toko" button
- Icon: Arrow Left
- Style: Gray-700
- Hover: Amber-700
```

#### Login Card
```
Max Width: 500px
Border Radius: 24px
Shadow: 2xl
Overflow: Hidden
Position: Centered
Margin: 60px auto

Header Section:
Background: Gradient from Emerald-600 via Teal-600 to Cyan-600
Padding: 48px
Color: White
Text Align: Center
Position: Relative

Decorative Elements:
- 2 blur circles (white opacity 10%)
- Top right and bottom left

Icon: Shield (80px, White)
- Background: White/20 backdrop blur
- Size: 80px x 80px
- Border Radius: 16px
- Margin: auto

Title: "Portal Penjual" (28px Bold)
Subtitle: "Kelola toko Payung Geulis Anda"
- Font: 15px
- Color: Emerald-100

Form Section:
Background: White
Padding: 48px

Field 1: Email / Username
- Label: "Email / Username" *
- Icon: Mail (left)
- Placeholder: "admin@payunggeulis.com"
- Height: 52px
- Border: 2px Gray-200
- Focus: Emerald-600

Field 2: Password
- Label: "Password" *
- Icon: Lock (left)
- Icon: Eye (right) - Toggle
- Placeholder: "••••••••"
- Height: 52px

Options Row:
- Left: Checkbox "Ingat saya"
- Right: "Lupa password?" link (Emerald-600)

Login Button:
- Text: "Masuk ke Dashboard"
- Background: Gradient Emerald-600 to Teal-600
- Full width
- Height: 52px
- Shadow: lg
- Hover: Shadow xl, scale 1.02

Divider:
- Gray-200 line
- Margin: 32px 0

Footer Links:
- "Belum punya akun penjual?"
- Link: "Daftar sekarang" (Emerald-600 Bold)
- Text Align: Center
```

#### Interactive Elements & Hotspots

**Header:**
- "Kembali ke Toko" → Navigate to Homepage

**Login Form:**
- Eye icon → Toggle password visibility
- "Lupa password?" → Password reset overlay
- "Masuk ke Dashboard" → Navigate to Seller Dashboard

**Registration:**
- "Daftar sekarang" → Seller registration overlay

---

### 9. SELLER DASHBOARD

**URL:** `/sellerDashboard`

#### Layout Structure
```
┌──────────────────────────────────────────┐
│         Dashboard Header                 │ 80px
│  Logo + User Info + Logout               │
├────────┬─────────────────────────────────┤
│        │                                 │
│ Side   │      Main Content Area          │
│ bar    │                                 │
│ Nav    │  - Stats Cards (4)              │
│ 280px  │  - Charts Section (2)           │
│        │  - Recent Orders                │
│        │  - Quick Actions                │
│        │                                 │
└────────┴─────────────────────────────────┘
```

#### Dashboard Header
```
Background: White
Height: 80px
Border Bottom: 1px Gray-200
Shadow: sm
Padding: 0 24px

Left Side:
- Logo: Emerald gradient (48px x 48px)
- Text: "Dashboard Penjual" (20px Bold Emerald-800)
- Subtext: "Payung Geulis Tasikmalaya" (12px Gray-600)

Right Side:
- User info text (right aligned):
  "Login sebagai:" (14px Gray-600)
  "Admin Payung Geulis" (16px Semibold Gray-900)
- Logout button:
  Icon: Log Out
  Text: "Logout"
  Style: White bg, Gray-200 border
  Hover: Gray-50
```

#### Sidebar Navigation
```
Background: White
Width: 280px
Border Right: 1px Gray-200
Min Height: 100vh
Position: Sticky (top: 0)
Padding: 24px

Section 1: Menu Utama
Label: "MENU UTAMA" (12px Gray-500 uppercase)
Margin Bottom: 12px

Menu Items:
1. Dashboard (Active)
   - Icon: Bar Chart (20px)
   - Text: "Dashboard"
   - Background: Gradient Emerald-600 to Teal-600
   - Color: White
   - Shadow: lg

2. Kelola Produk
   - Icon: Package
   - Navigate to Manage Products

3. Kelola Pesanan
   - Icon: Shopping Bag
   - Navigate to Manage Orders

4. Kelola Pelanggan
   - Icon: Users
   - Navigate to Manage Customers

5. Laporan Penjualan
   - Icon: Trending Up
   - Navigate to Sales Report

6. Pengaturan
   - Icon: Settings
   - Navigate to Settings

Style:
- Default: Gray-700, hover Emerald-50 bg
- Height: 48px
- Padding: 12px 16px
- Border Radius: 8px
- Gap: 4px

---

Divider (Gray-200)

Section 2: Akses Cepat
Label: "AKSES CEPAT" (12px Gray-500 uppercase)

Quick Actions:
1. Tambah Produk
   - Icon: Plus
   - Background: Emerald-50
   - Text: Emerald-700 Bold
   - Navigate to Add Product

2. Lihat Toko
   - Icon: Store
   - Background: White
   - Text: Gray-700
   - Navigate to Homepage
```

#### Main Content Area
```
Background: Emerald-50 (subtle)
Padding: 32px
Min Height: calc(100vh - 80px)

SECTION 1: Stats Cards
Grid: 4 columns (responsive)
Gap: 24px
Margin Bottom: 32px

Card 1: Total Penjualan
- Icon: Dollar Sign (Emerald-600)
- Value: "Rp 45.8M" (32px Bold)
- Label: "Total Penjualan" (14px Gray-600)
- Trend: "↑ 23.5% dari bulan lalu" (12px Emerald-600)
- Border Left: 4px Emerald-600
- Background: White
- Shadow: sm

Card 2: Total Pesanan
- Icon: Shopping Bag (Blue-600)
- Value: "1,284" (32px Bold)
- Label: "Total Pesanan"
- Trend: "↑ 18.2%"
- Border Left: 4px Blue-600

Card 3: Produk Aktif
- Icon: Package (Amber-600)
- Value: "87" (32px Bold)
- Label: "Produk Aktif"
- Trend: "↑ 12.5%"
- Border Left: 4px Amber-600

Card 4: Total Pelanggan
- Icon: Users (Purple-600)
- Value: "2,847" (32px Bold)
- Label: "Total Pelanggan"
- Trend: "↑ 15.3%"
- Border Left: 4px Purple-600

Style:
- Padding: 24px
- Border Radius: 16px
- Hover: Shadow md, translateY(-2px)

---

SECTION 2: Charts Row
Grid: 2 columns
Gap: 24px
Margin Bottom: 32px

Chart 1: Penjualan Bulanan
Background: White
Padding: 24px
Border Radius: 16px

Title: "Penjualan 12 Bulan Terakhir" (18px Bold)
Subtitle: "Total: Rp 458.5M"

Chart Type: Bar Chart
- 12 bars (Jan - Dec)
- Color: Gradient Emerald to Teal
- Height: 300px
- Y-axis: Currency
- Hover: Show value

Chart 2: Produk Terpopuler
Background: White
Padding: 24px
Border Radius: 16px

Title: "Top 5 Produk Terlaris" (18px Bold)

List Items (5):
Each item:
- Rank number (Badge: 1-5)
- Product name
- Sales number
- Progress bar (Emerald gradient)
- Percentage

Example:
1. Payung Batik Parang - 458 terjual (85%)
2. Payung Mini Bordir - 392 terjual (70%)
...

---

SECTION 3: Recent Orders Table
Background: White
Padding: 32px
Border Radius: 16px

Header:
- Title: "Pesanan Terbaru" (20px Bold)
- Button: "Lihat Semua" (Emerald-600)
- Space Between

Table:
Columns: ID Pesanan | Customer | Produk | Total | Status | Aksi

5 Rows of recent orders

Status Badges:
- Pending: Yellow-100 bg, Yellow-700 text
- Processing: Blue-100 bg, Blue-700 text
- Shipped: Purple-100 bg, Purple-700 text
- Completed: Emerald-100 bg, Emerald-700 text

Action Buttons:
- "Detail" (small button with Eye icon)

Style:
- Headers: 12px Gray-600 uppercase Semibold
- Cells: 14px Gray-900
- Row Height: 64px
- Hover: Gray-50 bg

---

SECTION 4: Quick Stats & Actions
Grid: 3 columns
Gap: 24px

Card 1: Stok Menipis
- Icon: Alert Triangle (Orange-600)
- Number: "12 produk"
- Label: "Perlu Restock"
- Button: "Lihat Detail"

Card 2: Pending Orders
- Icon: Clock (Yellow-600)
- Number: "38 pesanan"
- Label: "Menunggu Konfirmasi"
- Button: "Kelola"

Card 3: New Customers
- Icon: User Plus (Green-600)
- Number: "342 orang"
- Label: "Pelanggan Baru (30 hari)"
- Button: "Lihat"

Style: Same as stat cards
```

#### Interactive Elements & Hotspots

**Header:**
- Logo → Navigate to Seller Dashboard
- "Logout" → Navigate to Seller Login

**Sidebar:**
- All menu items → Navigate to respective pages
- "Tambah Produk" → Navigate to Add Product
- "Lihat Toko" → Navigate to Homepage

**Stats Cards:**
- Click cards → Navigate to detailed view (contextual)

**Charts:**
- Hover bars → Show tooltip with data

**Recent Orders:**
- "Lihat Semua" → Navigate to Manage Orders
- "Detail" buttons → Navigate to order detail overlay

**Quick Actions:**
- "Lihat Detail" (Stok Menipis) → Navigate to Manage Products (low stock filter)
- "Kelola" (Pending) → Navigate to Manage Orders (pending filter)
- "Lihat" (Customers) → Navigate to Manage Customers

---

### 10. MANAGE PRODUCTS PAGE

**URL:** `/manageProducts`

#### Layout Structure
```
┌──────────────────────────────────────────┐
│         Dashboard Header                 │ 80px
├────────┬─────────────────────────────────┤
│        │  Page Header                    │
│ Side   │  - Title + Add Product Button   │
│ bar    ├─────────────────────────────────┤
│        │  Filter & Search Bar            │
│        ├─────────────────────────────────┤
│        │  Products Table                 │
│        │  - List of all products         │
│        │  - Actions per row              │
│        ├─────────────────────────────────┤
│        │  Pagination                     │
└────────┴─────────────────────────────────┘
```

#### Page Header
```
Padding: 32px
Background: Emerald-50

Left Side:
- Title: "Kelola Produk" (28px Bold Gray-900)
- Subtitle: "Kelola semua produk Payung Geulis"

Right Side:
- Button: "Tambah Produk Baru"
  Icon: Plus
  Style: Primary Emerald gradient
  Height: 48px
  Font: 16px Semibold
  Navigate to Add Product
```

#### Filter & Search Bar
```
Background: White
Padding: 24px
Border Radius: 16px
Shadow: sm
Margin Bottom: 24px

Layout: Horizontal (responsive stack on mobile)
Gap: 16px

Search Input (50% width):
- Icon: Search (left)
- Placeholder: "Cari nama produk, SKU..."
- Height: 48px
- Border: 2px Gray-200
- Focus: Emerald-600

Category Filter:
- Dropdown select
- Options: "Semua", "Mini", "Sedang", "Besar", "Custom"
- Width: 200px
- Height: 48px

Stock Filter:
- Dropdown select
- Options: "Semua Stok", "Stok Tersedia", "Stok Menipis", "Habis"
- Width: 200px
- Height: 48px

Filter Button:
- Icon: Filter
- Style: Secondary (Gray-200 border)
- Height: 48px
- Opens advanced filter panel
```

#### Products Table
```
Background: White
Border Radius: 16px
Shadow: sm
Overflow: Hidden

Table Headers:
Background: Gray-50
Border Bottom: 2px Gray-200
Padding: 16px 24px

Columns:
1. Produk (40%) - Image + Name + SKU
2. Kategori (15%)
3. Harga (15%)
4. Stok (10%)
5. Status (10%)
6. Aksi (10%)

Header Style:
- Font: 12px Semibold Gray-600 Uppercase
- Letter Spacing: 0.05em

---

Table Rows (10 items per page):

Row Structure:
Height: 80px
Padding: 16px 24px
Border Bottom: 1px Gray-200
Hover: Gray-50 bg

Cell 1 - Product:
- Image: 60px x 60px (rounded-lg)
- Name: 16px Semibold Gray-900
- SKU: 14px Gray-600

Cell 2 - Category:
- Badge style
- Background: Category color/10
- Text: Category color/700
- Examples: "Mini", "Sedang", "Besar"

Cell 3 - Price:
- Font: 16px Semibold Gray-900
- Format: "Rp 145.000"

Cell 4 - Stock:
- Number: 16px Semibold
- Color: 
  * Green-700 if > 10
  * Orange-700 if 5-10
  * Red-700 if < 5

Cell 5 - Status:
- Badge: "Aktif" or "Nonaktif"
- Active: Emerald-100 bg, Emerald-700 text
- Inactive: Gray-100 bg, Gray-700 text

Cell 6 - Actions:
Dropdown menu (3 dots icon)
Options:
- Lihat Detail (Eye icon)
- Edit Produk (Edit icon) → Navigate to Edit Product
- Restock (Package icon) → Open restock modal
- Hapus (Trash icon) → Confirmation dialog

---

Sample Products (10 items):
1. Payung Batik Parang | PG-001 | Besar | Rp 145.000 | 15 | Aktif
2. Payung Mini Bordir | PG-002 | Mini | Rp 85.000 | 8 | Aktif
3. Payung Batik Mega Mendung | PG-003 | Sedang | Rp 165.000 | 3 | Aktif (Low Stock)
4. Payung Jumbo Classic | PG-004 | Besar | Rp 185.000 | 22 | Aktif
5. Payung Mini Floral | PG-005 | Mini | Rp 75.000 | 0 | Nonaktif (Out of Stock)
6. Custom Design Premium | PG-006 | Custom | Rp 225.000 | 12 | Aktif
7. Payung Batik Kawung | PG-007 | Sedang | Rp 155.000 | 18 | Aktif
8. Payung Travel Compact | PG-008 | Mini | Rp 95.000 | 25 | Aktif
9. Payung Couple Set | PG-009 | Besar | Rp 275.000 | 6 | Aktif
10. Payung Golf Premium | PG-010 | Besar | Rp 195.000 | 14 | Aktif
```

#### Pagination
```
Background: Gray-50
Padding: 16px 24px
Border Top: 1px Gray-200

Layout: Space between
Left: "Menampilkan 1-10 dari 87 produk"
Right: Pagination controls

Pagination Controls:
- "Sebelumnya" button (disabled on page 1)
- Page numbers: 1, 2, 3, ..., 9
- "Selanjutnya" button

Active Page:
- Background: Emerald-600
- Text: White
- Border Radius: 8px

Inactive Pages:
- Background: White
- Border: 1px Gray-300
- Hover: Gray-50
```

#### Interactive Elements & Hotspots

**Header:**
- "Tambah Produk Baru" → Navigate to Add Product

**Filter Bar:**
- Search input → Filter products (real-time or on submit)
- Category dropdown → Filter by category
- Stock dropdown → Filter by stock status
- Filter button → Open advanced filters

**Table:**
- Product row → Highlight on hover
- Product image/name → Navigate to Product Detail (customer view)
- Actions dropdown → Show menu options
  * "Lihat Detail" → Customer product view overlay
  * "Edit Produk" → Navigate to Edit Product (same as Add Product form)
  * "Restock" → Open restock modal
  * "Hapus" → Confirmation dialog, then remove from list

**Pagination:**
- Page numbers → Navigate to page
- Next/Previous → Navigate pages

---

### 11. ADD PRODUCT PAGE

**URL:** `/addProduct`

#### Layout Structure
```
┌──────────────────────────────────────────┐
│         Dashboard Header                 │ 80px
│  Back Button + Title                     │
├──────────────────┬───────────────────────┤
│                  │                       │
│   Form Sections  │   Preview Panel       │
│   (Left 65%)     │   (Right 35%)         │
│                  │   [Sticky]            │
│  - Basic Info    │                       │
│  - Images        │   - Product Preview   │
│  - Pricing       │   - Price Display     │
│  - Stock         │   - Actions           │
│  - Variants      │                       │
│  - Description   │                       │
│                  │                       │
└──────────────────┴───────────────────────┘
```

#### Page Header
```
Background: White
Height: 80px
Padding: 0 24px
Border Bottom: 1px Gray-200

Left Side:
- Back button:
  Icon: Arrow Left
  Text: "Kembali"
  Style: Gray-200 border
  Navigate to Manage Products

- Title: "Tambah Produk Baru" (20px Bold Emerald-800)
- Subtitle: "Payung Geulis Tasikmalaya" (12px Gray-600)

Right Side: (Same as other seller pages)
- User info
- Logout button
```

#### Left Column - Form Sections
```
Padding: 32px
Max Width: 800px

All Cards:
- Background: White
- Padding: 24px
- Border Radius: 16px
- Border: 1px Gray-200
- Margin Bottom: 24px
- Shadow: sm

---

CARD 1: Informasi Dasar
Title: "Informasi Dasar" (18px Bold Gray-900)
Icon: Package

Fields:
1. Nama Produk *
   - Input text
   - Placeholder: "Contoh: Payung Geulis Motif Batik Merah"
   - Height: 48px

2. SKU * | Kategori * (2 columns)
   - SKU: Input text (e.g., "PG-001")
   - Kategori: Select dropdown
     Options: "Pilih Kategori", "Payung Mini", "Payung Sedang", "Payung Besar", "Custom Design"

3. Deskripsi Produk *
   - Textarea (5 rows)
   - Placeholder: "Jelaskan detail produk..."
   - Border Radius: 12px

---

CARD 2: Gambar Produk
Title: "Gambar Produk" (18px Bold)
Icon: Image

Upload Area:
- Dashed border (2px Gray-300)
- Border Radius: 12px
- Padding: 48px
- Background: Gray-50
- Text Align: Center

Content:
- Icon: Upload (48px Gray-400)
- Text: "Klik untuk upload atau drag & drop"
- Subtext: "PNG, JPG up to 5MB (Minimal 3 gambar)"
- Button: "Pilih Gambar" (Emerald-600)

Image Preview Grid (after upload):
- Grid: 3 columns
- Gap: 16px
- Each preview: 200px x 200px
- Remove button (X) on hover
- First image badge: "Utama"

---

CARD 3: Harga & Stok
Title: "Harga & Stok" (18px Bold)
Icon: Dollar Sign

Fields:
1. Harga Normal * | Harga Diskon (2 columns)
   - Input number
   - Prefix: "Rp"
   - Placeholder: "0"

2. Stok Awal * | Stok Minimum (2 columns)
   - Input number
   - Suffix: "pcs"

3. Berat (gram) *
   - Input number
   - For shipping calculation

---

CARD 4: Varian Produk (Optional)
Title: "Varian Produk" (18px Bold)
Icon: Grid

Toggle: "Produk ini memiliki varian"

If enabled:
Variant Type: "Warna/Motif"
Add Variant Button: "+ Tambah Varian"

Variant Items (List):
Each item:
- Name input: "Merah"
- Price adjustment: "+Rp 0"
- Stock: "15 pcs"
- Remove button

Example variants:
- Merah | +Rp 0 | 15 pcs
- Biru | +Rp 0 | 12 pcs
- Hijau | +Rp 5.000 | 10 pcs

---

CARD 5: Deskripsi & Spesifikasi
Title: "Deskripsi Detail" (18px Bold)
Icon: File Text

Tabs:
- "Deskripsi" (Active)
- "Spesifikasi"

Tab 1 Content:
- Rich text editor (simplified)
- Placeholder: "Tulis deskripsi lengkap produk..."
- Height: 300px

Tab 2 Content:
Table format:
Add Specification Button: "+ Tambah Spesifikasi"

Spec Items:
- Label input: "Bahan Rangka"
- Value input: "Bambu Premium"
- Remove button

Example specs:
- Bahan Rangka: Bambu Premium
- Bahan Kain: Katun Batik Cap
- Diameter: 95 cm
- Tinggi: 85 cm
```

#### Right Column - Preview Panel
```
Position: Sticky (top: 100px)
Max Width: 400px

Preview Card:
Background: White
Padding: 24px
Border Radius: 16px
Shadow: lg
Border: 1px Gray-200

Title: "Preview Produk" (16px Bold)

Product Preview:
- Image placeholder: 
  Aspect ratio 1:1
  Background: Gradient Amber-100 to Orange-100
  Border Radius: 12px
  Margin Bottom: 16px
  Text: "Unggah Foto" (centered)

- Product Name:
  "Nama Produk" (18px Semibold)
  or filled from form

- Price:
  "Rp 0" (24px Bold Amber-700)
  Original price (if discount): "Rp 0" (line-through Gray-500)

- Category:
  "Kategori: -" (14px Gray-600)

- Stock:
  "Stok: 0 pcs" (14px Gray-600)

Divider (Gray-200)

Action Buttons (Vertical Stack):
1. "Simpan Produk"
   - Primary Emerald gradient
   - Full width
   - Height: 48px
   - Icon: Check
   - Navigate to Manage Products (with success message)

2. "Simpan sebagai Draft"
   - Secondary (Gray-200 border)
   - Full width
   - Height: 44px

3. "Batal"
   - Tertiary (text only)
   - Full width
   - Height: 44px
   - Navigate to Manage Products
```

#### Interactive Elements & Hotspots

**Header:**
- Back button → Navigate to Manage Products (with confirmation if form filled)

**Form Fields:**
- All inputs → Editable, update preview in real-time
- Category dropdown → Select options
- Upload area → Open file browser or drag & drop
- Image previews → Show remove button on hover
- Variant toggle → Show/hide variant section
- Add variant button → Add new variant row
- Remove variant → Delete variant row
- Tab buttons → Switch between description/specs
- Add specification → Add new spec row

**Preview Panel:**
- Updates in real-time as form is filled
- "Simpan Produk" → Validate form, save, navigate to Manage Products
- "Simpan sebagai Draft" → Save without validation
- "Batal" → Confirm discard, navigate to Manage Products

---

### 12. MANAGE ORDERS PAGE

**URL:** `/manageOrders`

#### Layout Structure
```
┌──────────────────────────────────────────┐
│         Dashboard Header                 │ 80px
├────────┬─────────────────────────────────┤
│        │  Page Header                    │
│ Side   │  - Title + Stats Cards (5)      │
│ bar    ├─────────────────────────────────┤
│        │  Filters & Search               │
│        ├─────────────────────────────────┤
│        │  Orders List                    │
│        │  - Order Cards (5)              │
│        ├─────────────────────────────────┤
│        │  Pagination                     │
└────────┴─────────────────────────────────┘
```

#### Page Header with Stats
```
Padding: 32px
Background: Emerald-50

Title: "Daftar Pesanan" (24px Bold Gray-900)
Margin Bottom: 24px

Stats Cards (5 tabs/cards):
Grid: 5 columns (responsive)
Gap: 16px

Card Style:
- Clickable/Selectable
- Padding: 16px
- Border Radius: 12px
- Border: 2px solid
- Transition: all 0.3s

Card 1: Semua Pesanan (Active Default)
- Label: "Semua Pesanan" (14px Gray-600)
- Number: "245" (32px Bold Gray-900)
- Border: Emerald-600
- Background: Gradient Emerald-50 to Teal-50

Card 2: Pending
- Label: "Pending"
- Number: "38" (Yellow-600)
- Border: Gray-200 (Active: Yellow-600)
- Background: White (Active: Yellow-50)

Card 3: Diproses
- Number: "52" (Blue-600)
- Border/Active: Blue-600/Blue-50

Card 4: Dikirim
- Number: "89" (Purple-600)
- Border/Active: Purple-600/Purple-50

Card 5: Selesai
- Number: "66" (Emerald-600)
- Border/Active: Emerald-600/Emerald-50

Hover Effect:
- Border color brightens
- Slight scale (1.02)
- Cursor: pointer
```

#### Filters & Search
```
Background: White
Padding: 24px
Border Radius: 16px
Shadow: sm
Margin Bottom: 24px

Grid: 4 columns (responsive)
Gap: 16px

Column 1-2: Search (Span 2)
- Icon: Search (left)
- Placeholder: "Cari ID pesanan, nama customer, produk..."
- Height: 48px

Column 3: Date Filter
- Dropdown select
- Options: "Semua Tanggal", "Hari Ini", "7 Hari", "30 Hari", "Custom"

Column 4: Sort
- Dropdown select
- Options: "Terbaru", "Terlama", "Nilai Tertinggi", "Terendah"
```

#### Orders List
```
Layout: Vertical stack
Gap: 16px
Padding: 0 32px 32px

5 Order Cards per page

---

Order Card Structure:
Background: White
Padding: 24px
Border Radius: 16px
Border: 1px Gray-200
Shadow: sm
Hover: Shadow md

Layout: Horizontal (responsive stack)

Left Section:
- Product image placeholder (80px x 80px)
  Background: Gradient Amber-100 to Orange-100
  Border Radius: 12px

Middle Section (Flex grow):
Order ID & Status:
- ID: "#ORD-12345" (16px Bold Gray-900)
- Status Badge (right aligned):
  * Pending: Yellow-100 bg, Yellow-700 text
  * Diproses: Blue-100 bg, Blue-700 text
  * Dikirim: Purple-100 bg, Purple-700 text
  * Selesai: Emerald-100 bg, Emerald-700 text

Customer Info:
- Name: "John Doe" (14px Semibold Gray-900)
- Email: "• john@email.com" (14px Gray-600)

Product Info:
- Product: "Payung Geulis Motif 1"
- Quantity: "• Qty: 2" (14px Gray-600)

Right Section:
Price & Time:
- Price: "Rp 290.000" (24px Bold Gray-900)
- Time: "25 Nov 2024, 14:30" (12px Gray-600)
  Icon: Clock

---

Bottom Actions Bar:
Border Top: 1px Gray-200
Padding Top: 16px
Margin Top: 16px
Gap: 12px

Buttons (Conditional based on status):

If Pending:
- "Lihat Detail" (Emerald-50 bg, Emerald-700 text, Eye icon)
- "Terima Pesanan" (Blue-50 bg, Blue-700 text, Check icon)
- "Tolak" (Red-50 bg, Red-700 text, X icon)

If Diproses:
- "Lihat Detail"
- "Kirim Pesanan" (Purple-50 bg, Purple-700 text, Truck icon)

If Dikirim:
- "Lihat Detail"
- "Tandai Selesai" (Emerald-50 bg, Emerald-700 text, Check icon)

If Selesai:
- "Lihat Detail"
- (No other actions)

All buttons:
- Height: 44px
- Flex: 1 (equal width)
- Border Radius: 8px
- Font: 14px Medium

---

Sample Orders (5 items):
1. #ORD-12345 | John Doe | Payung Motif 1 x2 | Rp 290.000 | Pending
2. #ORD-12344 | Jane Smith | Payung Motif 2 x1 | Rp 155.000 | Diproses
3. #ORD-12343 | Ahmad Yani | Payung Motif 3 x3 | Rp 405.000 | Dikirim
4. #ORD-12342 | Siti Nurhaliza | Payung Motif 4 x1 | Rp 165.000 | Selesai
5. #ORD-12341 | Budi Santoso | Payung Motif 5 x2 | Rp 310.000 | Pending
```

#### Pagination
```
Margin Top: 32px
Padding: 0 32px

Layout: Space between

Left: "Menampilkan 1-5 dari 245 pesanan"

Right: Pagination controls
- "Previous" button
- Pages: 1, 2, 3, ..., 49
- "Next" button

Style: Same as Manage Products pagination
```

#### Interactive Elements & Hotspots

**Stats Cards:**
- Click any card → Filter orders by status (visual feedback)

**Filters:**
- Search input → Filter orders
- Date dropdown → Filter by date range
- Sort dropdown → Change sort order

**Order Cards:**
- "Lihat Detail" → Open order detail modal/overlay
- "Terima Pesanan" → Change status to Processing (confirmation)
- "Tolak" → Cancel order (confirmation + reason dialog)
- "Kirim Pesanan" → Change status to Shipped (add tracking info dialog)
- "Tandai Selesai" → Change status to Completed (confirmation)

**Pagination:**
- Page numbers → Navigate to page
- Next/Previous → Navigate pages

---

### 13. MANAGE CUSTOMERS PAGE

**URL:** `/manageCustomers`

#### Layout Structure
```
┌──────────────────────────────────────────┐
│         Dashboard Header                 │ 80px
├────────┬─────────────────────────────────┤
│        │  Page Header                    │
│ Side   │  - Title + Subtitle             │
│ bar    ├─────────────────────────────────┤
│        │  Stats Cards (4)                │
│        ├─────────────────────────────────┤
│        │  Filter & Search Bar            │
│        ├─────────────────────────────────┤
│        │  Customers Table                │
│        ├─────────────────────────────────┤
│        │  Pagination                     │
└────────┴─────────────────────────────────┘
```

#### Page Header
```
Padding: 32px
Background: Emerald-50

Title: "Kelola Pelanggan" (28px Bold Gray-900)
Subtitle: "Lihat dan kelola data pelanggan Payung Geulis"
```

#### Stats Cards
```
Grid: 4 columns
Gap: 24px
Padding: 0 32px 32px
Background: Emerald-50

Card 1: Total Pelanggan
- Icon: Users (Emerald-600)
- Value: "2,847" (32px Bold)
- Label: "Total Pelanggan"
- Trend: "↑ 12% dari bulan lalu" (12px Emerald-600)
- Border Left: 4px Emerald-600

Card 2: Pelanggan Aktif
- Icon: Users (Blue-600)
- Value: "1,456"
- Label: "Pelanggan Aktif"
- Trend: "↑ 8%"
- Border Left: 4px Blue-600

Card 3: Pelanggan Baru
- Icon: Users (Amber-600)
- Value: "342"
- Label: "Pelanggan Baru"
- Trend: "Bulan ini"
- Border Left: 4px Amber-600

Card 4: Rata-rata Pembelian
- Icon: Trending Up (Purple-600)
- Value: "4.2x"
- Label: "Rata-rata Pembelian"
- Trend: "Per pelanggan"
- Border Left: 4px Purple-600

Style: Same as Dashboard stats cards
```

#### Filter & Search Bar
```
Background: White
Padding: 24px
Border Radius: 16px
Shadow: sm
Margin: 0 32px 24px

Layout: Horizontal
Gap: 16px

Search (Flex: 1):
- Icon: Search (left)
- Placeholder: "Cari nama, email, atau nomor telepon..."
- Height: 48px

Filter Button:
- Icon: Filter
- Text: "Filter"
- Style: Gray-200 border
- Height: 48px
- Width: 120px

Export Button:
- Icon: Download
- Text: "Export Data"
- Style: Emerald-600 gradient
- Height: 48px
- Min Width: 160px
```

#### Customers Table
```
Background: White
Border Radius: 16px
Shadow: sm
Overflow: Hidden
Margin: 0 32px

Table Headers:
Background: Gray-50
Padding: 16px 24px
Border Bottom: 2px Gray-200

Columns:
1. Nama Pelanggan (25%)
2. Kontak (30%)
3. Total Pembelian (15%)
4. Total Belanja (15%)
5. Status (10%)
6. Aksi (5%)

---

Table Rows (6 customers):

Row Height: 80px
Padding: 16px 24px
Border Bottom: 1px Gray-200
Hover: Gray-50

Cell 1 - Customer Name:
- Avatar: 40px circle
  Background: Gradient Emerald-100 to Teal-100
  Text: Initials (Emerald-700)
- Name: 16px Semibold Gray-900

Cell 2 - Contact:
- Email with icon (14px Gray-600)
- Phone with icon (14px Gray-600)
- Vertical stack

Cell 3 - Total Orders:
- Number: 16px Semibold Gray-900
- Label: "pesanan" (14px Gray-600)

Cell 4 - Total Spent:
- Amount: 16px Semibold Emerald-700
- Format: "Rp X.XXX.000"

Cell 5 - Status:
Badge:
- VIP: Purple-100 bg, Purple-700 text
- Aktif: Emerald-100 bg, Emerald-700 text
- Baru: Blue-100 bg, Blue-700 text

Cell 6 - Actions:
- "Detail" button
  Icon: Eye
  Style: Emerald-50 bg, Emerald-700 text
  Size: Small (36px x 36px)

---

Sample Data (6 customers):
1. Budi Santoso | budi@email.com, 0812-3456-7890 | 12 | Rp 4.500.000 | VIP
2. Siti Nurhaliza | siti@email.com, 0813-4567-8901 | 8 | Rp 2.850.000 | Aktif
3. Ahmad Dahlan | ahmad@email.com, 0821-5678-9012 | 5 | Rp 1.750.000 | Aktif
4. Dewi Lestari | dewi@email.com, 0822-6789-0123 | 3 | Rp 950.000 | Baru
5. Eko Prasetyo | eko@email.com, 0823-7890-1234 | 15 | Rp 6.250.000 | VIP
6. Fitri Handayani | fitri@email.com, 0831-8901-2345 | 6 | Rp 2.100.000 | Aktif
```

#### Pagination
```
Background: Gray-50
Padding: 16px 24px
Border Top: 1px Gray-200

Layout: Space between

Left: "Menampilkan 1-6 dari 2,847 pelanggan"

Right: Pagination controls (same as other pages)
```

#### Interactive Elements & Hotspots

**Header:**
- Stats cards → Visual feedback only

**Filter Bar:**
- Search input → Filter customers
- "Filter" button → Open advanced filter panel
- "Export Data" button → Download CSV/Excel (confirmation)

**Table:**
- Customer row → Highlight on hover
- "Detail" button → Open customer detail modal/overlay
  * Shows: Full profile, order history, purchase patterns

**Pagination:**
- Page numbers → Navigate to page
- Next/Previous → Navigate pages

---

### 14. SALES REPORT PAGE

**URL:** `/salesReport`

#### Layout Structure
```
┌──────────────────────────────────────────┐
│         Dashboard Header                 │ 80px
├────────┬─────────────────────────────────┤
│        │  Page Header + Actions          │
│ Side   ├─────────────────────────────────┤
│ bar    │  Time Period Selector           │
│        ├─────────────────────────────────┤
│        │  Revenue Stats (4)              │
│        ├─────────────────────────────────┤
│        │  Charts Section (2)             │
│        ├─────────────────────────────────┤
│        │  Top Products Table             │
└────────┴─────────────────────────────────┘
```

#### Page Header
```
Padding: 32px
Background: Emerald-50

Layout: Space between

Left:
- Title: "Laporan Penjualan" (28px Bold Gray-900)
- Subtitle: "Analisis performa penjualan Payung Geulis"

Right:
- "Filter Periode" button (Gray-200 border, Calendar icon)
- "Export Laporan" button (Emerald-600 gradient, Download icon)
- Gap: 12px
```

#### Time Period Selector
```
Background: White
Padding: 24px
Border Radius: 16px
Shadow: sm
Margin: 0 32px 32px

Horizontal button group:
5 period buttons + custom option

Buttons:
1. "Hari Ini" (Active)
2. "Minggu Ini"
3. "Bulan Ini"
4. "Tahun Ini"
5. "Custom"

Style:
- Active: Emerald-600 bg, White text
- Inactive: Gray-200 border, Gray-700 text
- Height: 40px
- Padding: 8px 24px
- Border Radius: 8px
- Gap: 12px
```

#### Revenue Stats
```
Grid: 4 columns
Gap: 24px
Padding: 0 32px 32px
Background: Emerald-50

Card 1: Total Pendapatan
- Icon: Dollar Sign (Emerald-600)
- Value: "Rp 45.8M" (32px Bold)
- Label: "Total Pendapatan"
- Trend: "↑ 23.5% dari bulan lalu" (Emerald-600)
- Border Left: 4px Emerald-600

Card 2: Total Pesanan
- Icon: Shopping Bag (Blue-600)
- Value: "1,284"
- Label: "Total Pesanan"
- Trend: "↑ 18.2%"
- Border Left: 4px Blue-600

Card 3: Rata-rata Order
- Icon: Trending Up (Amber-600)
- Value: "Rp 357K"
- Label: "Rata-rata Order"
- Trend: "↑ 12.8%"
- Border Left: 4px Amber-600

Card 4: Produk Terjual
- Icon: Package (Purple-600)
- Value: "2,847"
- Label: "Produk Terjual"
- Trend: "↑ 15.3%"
- Border Left: 4px Purple-600

Style: Same as other stat cards
```

#### Charts Section
```
Grid: 2 columns
Gap: 24px
Padding: 0 32px 32px

CHART 1: Grafik Penjualan
Background: White
Padding: 24px
Border Radius: 16px
Shadow: sm

Title: "Grafik Penjualan" (18px Bold)

Bar Chart:
- Type: Vertical bars
- Data: 12 months (Jan - Dec)
- Color: Gradient Emerald-600 to Teal-500
- Height: 300px
- Bars: 12 items
- X-axis: Month numbers (1-12)
- Y-axis: Hidden (show on hover)

Hover Effect:
- Bar darkens
- Tooltip shows exact value

Bottom Label:
- "12 Bulan Terakhir" (12px Gray-500, centered)

---

CHART 2: Performa Kategori
Background: White
Padding: 24px
Border Radius: 16px
Shadow: sm

Title: "Performa Kategori" (18px Bold)

4 Category Items:
Each item (Vertical stack):
- Top row: Category name | Revenue amount
- Progress bar (Full width)
- Height: 12px
- Border Radius: Full
- Background: Gray-200

Item 1: Payung Batik
- Revenue: "Rp 18.5M"
- Progress: 85% (Emerald gradient)

Item 2: Payung Mini
- Revenue: "Rp 12.3M"
- Progress: 65% (Blue gradient)

Item 3: Payung Jumbo
- Revenue: "Rp 9.8M"
- Progress: 55% (Amber gradient)

Item 4: Custom Design
- Revenue: "Rp 5.2M"
- Progress: 35% (Purple gradient)

Gap between items: 20px
```

#### Top Products Table
```
Background: White
Padding: 24px
Border Radius: 16px
Shadow: sm
Margin: 0 32px 32px

Title: "Produk Terlaris" (18px Bold Gray-900)
Margin Bottom: 24px

Table:
Headers: Ranking | Produk | Terjual | Pendapatan | Pertumbuhan
Background: Gray-50
Border Bottom: 2px Gray-200

5 Product Rows:

Row Height: 64px

Cell 1 - Ranking:
Circle badge (40px diameter):
- Rank 1: Gold gradient (Amber-400 to Yellow-500)
- Rank 2: Silver gradient (Gray-300 to Gray-400)
- Rank 3: Bronze gradient (Orange-400 to Orange-500)
- Rank 4-5: Emerald gradient (Emerald-500 to Teal-600)
Number: White text, Bold

Cell 2 - Product:
- Name: 16px Semibold Gray-900

Cell 3 - Sold:
- Number: 16px Semibold Gray-900
- Label: "unit"

Cell 4 - Revenue:
- Amount: 16px Semibold Emerald-700

Cell 5 - Growth:
- Percentage with arrow icon
- Color: Emerald-600
- Font: 14px Medium

Sample Data:
1. Payung Batik Parang | 458 | Rp 15.4M | ↑ 23.5%
2. Payung Mini Bordir | 392 | Rp 9.8M | ↑ 18.2%
3. Payung Batik Mega Mendung | 347 | Rp 15.6M | ↑ 15.8%
4. Payung Jumbo Classic | 289 | Rp 18.8M | ↑ 12.4%
5. Custom Design Premium | 234 | Rp 17.6M | ↑ 9.7%
```

#### Interactive Elements & Hotspots

**Header:**
- "Filter Periode" → Open date range picker modal
- "Export Laporan" → Download PDF/Excel (confirmation)

**Time Period:**
- Period buttons → Change time range, update all stats/charts

**Charts:**
- Bar chart bars → Hover to see tooltip with exact values
- Category bars → Visual feedback only

**Table:**
- Product rows → Hover highlight
- Product name → Navigate to Product Detail (customer view)

---

### 15. SETTINGS PAGE

**URL:** `/settings`

#### Layout Structure
```
┌──────────────────────────────────────────┐
│         Dashboard Header                 │ 80px
├────────┬────────────┬────────────────────┤
│        │  Settings  │   Settings Content │
│ Side   │   Menu     │   Area             │
│ bar    │  (25%)     │   (75%)            │
│        │            │                    │
│        │  - Profil  │   Form Sections:   │
│        │  - Keamanan│   - Store Profile  │
│        │  - Notif   │   - Business Hours │
│        │  - Tampilan│   - Payment Methods│
│        │  - Bahasa  │   - Action Buttons │
│        │            │                    │
└────────┴────────────┴────────────────────┘
```

#### Page Header
```
Padding: 32px
Background: Emerald-50

Title: "Pengaturan" (28px Bold Gray-900)
Subtitle: "Kelola preferensi dan konfigurasi toko Anda"
```

#### Settings Menu (Left Sidebar)
```
Background: White
Padding: 16px
Border Radius: 16px
Shadow: sm
Position: Sticky (top: 24px)
Margin: 0 0 0 32px
Width: 280px

Menu Items (Vertical):
1. Profil Toko (Active)
   - Icon: User (20px)
   - Background: Emerald-50
   - Text: Emerald-700 Semibold

2. Keamanan
   - Icon: Lock
   - Background: Transparent
   - Text: Gray-700
   - Hover: Gray-50

3. Notifikasi
   - Icon: Bell
   - Hover: Gray-50

4. Tampilan
   - Icon: Palette
   - Hover: Gray-50

5. Bahasa & Region
   - Icon: Globe
   - Hover: Gray-50

Button Style:
- Full width
- Height: 48px
- Padding: 12px 16px
- Border Radius: 8px
- Gap: 12px (icon to text)
```

#### Settings Content Area
```
Padding: 0 32px 32px 24px
Max Width: 900px

All Cards:
- Background: White
- Padding: 24px
- Border Radius: 16px
- Shadow: sm
- Margin Bottom: 24px

---

CARD 1: Profil Toko
Title: "Profil Toko" (20px Bold Gray-900)

Section 1: Store Logo
Label: "Logo Toko"
Layout: Horizontal

Left: Logo Display
- Size: 96px x 96px
- Background: Gradient Amber-600 to Amber-800
- Border Radius: 12px
- Text: "PG" (32px Bold White)

Right: Upload Actions
- "Upload Logo Baru" button (Emerald-600)
- Help text: "Format: PNG, JPG. Maksimal 2MB"

Divider (Gray-200)

Section 2: Store Information
Fields (Vertical stack):

1. Nama Toko *
   - Input text
   - Value: "Payung Geulis"
   - Height: 48px

2. Deskripsi Toko
   - Textarea (4 rows)
   - Value: "Pusat kerajinan payung geulis..."

3. Email Toko * | Nomor Telepon * (2 columns)
   - Email with Mail icon
   - Phone with Phone icon
   - Height: 48px

4. Alamat Lengkap *
   - Textarea (3 rows)
   - Icon: Map Pin (top-left)
   - Value: "Jl. Pahlawan No. 123, Kecamatan Cihideung..."

All inputs:
- Border: 2px Gray-200
- Border Radius: 12px
- Focus: Emerald-600

---

CARD 2: Jam Operasional
Title: "Jam Operasional" (20px Bold)

7 Day Items (Vertical list):
Each item:
- Checkbox (left) - Checked = Open
- Day name (120px width)
- Hours text (right)
- Background: Gray-50
- Padding: 16px
- Border Radius: 8px
- Gap: 8px

Days:
- Senin: ☑ 08:00 - 17:00
- Selasa: ☑ 08:00 - 17:00
- Rabu: ☑ 08:00 - 17:00
- Kamis: ☑ 08:00 - 17:00
- Jumat: ☑ 08:00 - 17:00
- Sabtu: ☑ 08:00 - 14:00
- Minggu: ☐ Tutup

---

CARD 3: Metode Pembayaran
Title: "Metode Pembayaran" (20px Bold)

Grid: 2 columns
Gap: 16px

4 Payment Method Cards:
Each card:
- Padding: 16px
- Border: 2px Gray-200
- Border Radius: 12px
- Layout: Space between

Left: Method name
Right: Toggle switch

Toggle Style:
- Width: 48px
- Height: 24px
- Background: Gray-200 (off) / Emerald-600 (on)
- Circle: 20px diameter, White
- Transition: 0.3s

Methods:
1. Transfer Bank ☑ (ON)
2. E-Wallet (OVO, GoPay) ☑ (ON)
3. COD ☑ (ON)
4. Kartu Kredit/Debit ☐ (OFF)

---

BOTTOM ACTIONS:
Layout: Right aligned
Gap: 16px
Margin Top: 32px

Button 1: "Batal"
- Style: Gray-200 border
- Height: 48px
- Padding: 12px 24px
- Navigate to Dashboard

Button 2: "Simpan Perubahan"
- Icon: Save
- Style: Emerald-600 gradient
- Height: 48px
- Padding: 12px 32px
- Shadow: lg
```

#### Interactive Elements & Hotspots

**Settings Menu:**
- Menu items → Switch content panel (overlay change)
- Each item shows different settings section

**Store Profile:**
- "Upload Logo Baru" → Open file browser
- All inputs → Editable
- Form validation on save

**Business Hours:**
- Checkboxes → Enable/disable day
- Hours text → Click to edit (time picker)

**Payment Methods:**
- Toggle switches → Enable/disable payment method
- Smooth animation

**Action Buttons:**
- "Batal" → Discard changes, navigate to Dashboard (with confirmation)
- "Simpan Perubahan" → Validate, save, show success message

---

## 🔄 COMPONENT INTERACTIONS & OVERLAYS

### Search Modal
**Trigger:** Search icon in header (all customer pages)
**Overlay:** Full screen modal with backdrop

```
Modal Structure:
- Width: 600px
- Max Height: 80vh
- Position: Centered
- Animation: Fade in + scale

Header:
- Title: "Cari Produk" (20px Bold)
- Close button (X icon)
- Border Bottom: Gray-200

Search Input:
- Auto-focus on open
- Icon: Search
- Placeholder: "Cari payung geulis..."
- Height: 56px
- Large font (18px)

Popular Searches:
- Title: "Pencarian Populer"
- 4 suggestion chips:
  * "Payung Batik"
  * "Payung Mini"
  * "Motif Parang"
  * "Promo"
- Click → Fill search input

Results Section:
- Shows after typing (min 2 characters)
- 4-6 product results
- Each result:
  * Small image (60px)
  * Name + Price
  * Click → Navigate to Product Detail

Empty State:
- Icon: Search with question mark
- Text: "Tidak ada hasil"

Close Triggers:
- X button
- Click backdrop
- ESC key
```

### Product Quick View
**Trigger:** Product image hover or Quick View button
**Overlay:** Modal dialog

```
Modal: 900px width
2 columns layout (40% / 60%)

Left: Image carousel
Right: Quick info
- Name, Price, Rating
- Variant selector
- Quantity selector
- Add to Cart button
- "Lihat Detail Lengkap" link
```

### Confirmation Dialogs
**Triggers:** Delete actions, logout, discard changes

```
Modal: 400px width
Centered

Icon: Alert/Question (color based on action)
- Warning: Yellow/Orange
- Danger: Red
- Info: Blue

Title: "Apakah Anda yakin?"
Message: Specific action description

Buttons (horizontal):
- "Batal" (secondary)
- "Ya, [Action]" (primary/danger)
```

### Toast Notifications
**Triggers:** Success/error feedback

```
Position: Top right
Width: 360px
Auto-dismiss: 3-5 seconds

Success:
- Background: Emerald-50
- Border Left: 4px Emerald-600
- Icon: Check Circle

Error:
- Background: Red-50
- Border Left: 4px Red-600
- Icon: X Circle

Info:
- Background: Blue-50
- Border Left: 4px Blue-600
- Icon: Info Circle
```

---

## 📲 RESPONSIVE BREAKPOINTS

```
Desktop Large: ≥1280px (1440px optimal)
Desktop: 1024px - 1279px
Tablet: 768px - 1023px
Mobile: ≤767px (375px optimal)
```

### Responsive Behaviors

#### Header
- Desktop: Full navigation visible
- Tablet: Navigation visible, compact spacing
- Mobile: Hamburger menu, logo + icons only

#### Grid Layouts
```
4 columns → 2 columns → 1 column
3 columns → 2 columns → 1 column
2 columns → 1 column
```

#### Sidebar (Seller)
- Desktop: Always visible (280px)
- Tablet: Always visible (240px)
- Mobile: Hidden, hamburger menu overlay

#### Cards
- Desktop: Side-by-side layouts
- Mobile: Stacked vertically

#### Tables
- Desktop: Full table
- Tablet: Scroll horizontal
- Mobile: Card format (stack cells)

---

## 🎬 ANIMATION SPECIFICATIONS

### Page Transitions
```
Fade In:
- Duration: 300ms
- Easing: ease-out
- Opacity: 0 → 1
```

### Hover States
```
Scale:
- Transform: scale(1.02 to 1.05)
- Duration: 200ms
- Easing: ease-out

Shadow:
- Transition: 200ms
- From: shadow-sm
- To: shadow-lg

Color:
- Transition: 150ms
- From: Original
- To: Darker/Lighter variant
```

### Button Press
```
Scale: 0.98
Duration: 100ms
Easing: ease-in-out
```

### Modal Open
```
Backdrop:
- Opacity: 0 → 1 (300ms)

Modal:
- Scale: 0.95 → 1 (300ms)
- Opacity: 0 → 1 (300ms)
- Easing: ease-out
```

### Scroll Animations (Optional)
```
Fade In Up:
- Start: translateY(20px), opacity 0
- End: translateY(0), opacity 1
- Trigger: Element enters viewport
- Duration: 600ms
```

---

## 🔗 NAVIGATION FLOW MAP

```
[CUSTOMER SIDE]

Homepage
├─→ Products Page
│   └─→ Product Detail
│       ├─→ Cart
│       └─→ Checkout
├─→ About Page
├─→ Cart Page
│   ├─→ Products (Continue Shopping)
│   └─→ Checkout
├─→ Checkout Page
│   ├─→ Cart (Back)
│   └─→ Success/Payment
└─→ Customer Login
    ├─→ Homepage (After login)
    └─→ Register

---

[SELLER SIDE]

Homepage (Portal Link)
└─→ Seller Login
    └─→ Seller Dashboard
        ├─→ Manage Products
        │   ├─→ Add Product
        │   │   └─→ Manage Products (Save)
        │   └─→ Edit Product (same as Add)
        ├─→ Manage Orders
        │   └─→ Order Detail (Modal)
        ├─→ Manage Customers
        │   └─→ Customer Detail (Modal)
        ├─→ Sales Report
        └─→ Settings
            └─→ Dashboard (Save)
```

---

## 📦 DESIGN ASSETS NEEDED

### Logo & Branding
- Logo file (SVG preferred)
- Logo variations (white, color)
- Favicon (32x32, 48x48)

### Product Images
- Product photos (square, min 800x800px)
- Multiple angles (3-5 per product)
- Lifestyle shots
- Detail shots

### Icons
- Using Lucide React icon library
- Consistent 20-24px size
- Stroke width: 2px

### Illustrations (Optional)
- Empty states
- Error states
- Success states
- Onboarding graphics

### Photography
- Workshop/artisan photos
- Process photos
- Team photos
- Store/facility photos

---

## 🛠️ FIGMA SETUP GUIDE

### 1. Create Project Structure
```
📁 Payung Geulis Website
├─ 🎨 Design System
│  ├─ Colors
│  ├─ Typography
│  ├─ Spacing
│  └─ Components
├─ 📱 Customer Pages (7)
│  ├─ Homepage
│  ├─ Products
│  ├─ About
│  ├─ Product Detail
│  ├─ Cart
│  ├─ Checkout
│  └─ Customer Login
└─ 💼 Seller Pages (8)
   ├─ Seller Login
   ├─ Dashboard
   ├─ Manage Products
   ├─ Add Product
   ├─ Manage Orders
   ├─ Manage Customers
   ├─ Sales Report
   └─ Settings
```

### 2. Set Up Design Tokens

**Color Styles:**
- Customer/Primary/600: #D97706
- Customer/Primary/700: #B45309
- Customer/Primary/800: #92400E
- Customer/Secondary/600: #EA580C
- Customer/Background: #FFF8F0
- Seller/Primary/600: #059669
- Seller/Primary/700: #047857
- Seller/Secondary/600: #0D9488
- Seller/Background: #F0FDF4
- Gray scale (50-900)
- Success, Warning, Error colors

**Text Styles:**
- Heading/H1: 36px Bold
- Heading/H2: 30px Bold
- Heading/H3: 24px Bold
- Body/Large: 18px Regular
- Body/Base: 16px Regular
- Body/Small: 14px Regular
- Caption: 12px Regular

**Effect Styles:**
- Shadow/sm
- Shadow/md
- Shadow/lg
- Shadow/xl

### 3. Create Components

**Atoms:**
- Button (5 variants)
- Input Field
- Dropdown
- Checkbox
- Radio Button
- Badge
- Tag
- Avatar
- Icon Button

**Molecules:**
- Product Card
- Stat Card
- Order Card
- Customer Card
- Navigation Item
- Breadcrumb

**Organisms:**
- Header (Customer)
- Header (Seller)
- Sidebar (Seller)
- Footer
- Product Grid
- Order Table
- Search Modal

### 4. Set Up Auto Layout
- Use auto layout for all components
- Set spacing rules
- Make responsive (min/max widths)
- Add padding/margin

### 5. Create Variants
- Button: Primary, Secondary, Tertiary, Danger, Ghost
- Input: Default, Focus, Error, Disabled
- Card: Default, Hover, Active

### 6. Add Interactions
**Prototype Mode:**

For each page, link:
- Header logo → Homepage
- Navigation links → Respective pages
- Buttons → Target pages
- Cards/Images → Detail pages

**Interaction Settings:**
- On Click → Navigate to
- Animation: Dissolve or Smart Animate
- Duration: 300ms
- Easing: Ease Out

**Smart Animate:**
- Use same layer names across frames
- Smooth transitions for modals
- Hover states with "While Hovering"

### 7. Add Overlays
**Modal Dialogs:**
- Type: Overlay
- Position: Center
- Background: Black 40% opacity
- Close on click outside: Yes

**Search Modal:**
- Same overlay settings
- Include backdrop blur

### 8. Test Prototype
- Start from Homepage
- Test all navigation paths
- Verify all buttons work
- Check responsive frames
- Test modal interactions

---

## 📋 PROTOTYPE TESTING CHECKLIST

### Customer Side
- [ ] Homepage loads correctly
- [ ] All header links work
- [ ] Search modal opens and closes
- [ ] Product cards navigate to detail
- [ ] Products page filters work (visual)
- [ ] About page sections display
- [ ] Product detail shows all info
- [ ] Add to cart navigates
- [ ] Cart shows items and actions
- [ ] Checkout form is complete
- [ ] Login form displays
- [ ] Mobile responsive works

### Seller Side
- [ ] Seller login accessible
- [ ] Dashboard loads with all stats
- [ ] Sidebar navigation works
- [ ] Manage Products shows table
- [ ] Add Product form complete
- [ ] Manage Orders displays cards
- [ ] Manage Customers shows table
- [ ] Sales Report charts display
- [ ] Settings form loads
- [ ] All sidebar links work
- [ ] Logout returns to login

### Interactions
- [ ] Hover states work
- [ ] Button clicks provide feedback
- [ ] Modals open/close properly
- [ ] Form inputs are editable
- [ ] Dropdowns expand
- [ ] Tabs switch content
- [ ] Pagination navigates

---

## 📤 EXPORT & DELIVERY

### For Development Team
```
Export from Figma:
1. Entire prototype as PDF
2. Style guide page as PDF
3. Components library link
4. Prototype sharing link (View only)
5. Design specs (Inspect mode enabled)
```

### For Client/Stakeholders
```
Share:
1. Prototype presentation link
2. Interactive prototype demo
3. User flow diagrams
4. Feature specification document
```

### Assets Export
```
Export:
1. Icons: SVG (24x24)
2. Logos: SVG + PNG (@2x, @3x)
3. Images: WebP optimized
4. Mockup screenshots: PNG (1920x1080)
```

---

## 📞 SUPPORT & FEEDBACK

Untuk memaksimalkan prototype:

1. **Presentasi Prototype:**
   - Jelaskan user flow
   - Demo interaksi utama
   - Highlight key features

2. **Gathering Feedback:**
   - Catat feedback per halaman
   - Note usability issues
   - Document change requests

3. **Iteration:**
   - Update designs
   - Re-test interactions
   - Final approval

---

**END OF PROTOTYPE DOCUMENTATION**

This documentation provides complete specifications for recreating the Payung Geulis mockup in Figma with full prototype functionality. Follow the structure, use the exact measurements, and implement all interactions for a production-ready prototype.
