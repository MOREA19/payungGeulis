import express from "express";
import cors from "cors";
import supabase from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

// Helper function untuk membuat SVG
const svgToDataUrl = (svg) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const createPayungSvg = (background, canopy, handle, accent, label) =>
  svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${background}" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.18" />
    </linearGradient>
  </defs>
  <rect width="500" height="500" rx="40" fill="url(#grad)" />
  <circle cx="130" cy="130" r="70" fill="${accent}" opacity="0.15" />
  <circle cx="390" cy="110" r="50" fill="${accent}" opacity="0.12" />
  <path d="M70 250 C130 140 370 140 430 250 Q420 270 250 330 Q80 270 70 250 Z" fill="${canopy}" stroke="${accent}" stroke-width="14" />
  <path d="M250 330 L250 420" stroke="${handle}" stroke-width="18" stroke-linecap="round" />
  <path d="M180 250 C180 290 200 320 230 330" stroke="${accent}" stroke-width="12" fill="none" stroke-linecap="round" />
  <path d="M320 250 C320 290 300 320 270 330" stroke="${accent}" stroke-width="12" fill="none" stroke-linecap="round" />
  <text x="250" y="460" text-anchor="middle" font-family="Inter, sans-serif" font-size="32" fill="#ffffff" font-weight="700">${label}</text>
</svg>
`);

// Sample product data dengan images
const sampleProducts = [
  {
    id: 1,
    name: "Payung Batik Parang",
    price: 350000,
    stock: 25,
    category: "Sedang",
    svg: {
      background: "#FEF3C7",
      canopy: "#F59E0B",
      handle: "#87360C",
      accent: "#D97706",
      label: "Batik Parang",
    },
  },
  {
    id: 2,
    name: "Payung Batik Mega Mendung",
    price: 450000,
    stock: 18,
    category: "Besar",
    svg: {
      background: "#E0F2FE",
      canopy: "#1D4ED8",
      handle: "#1E40AF",
      accent: "#60A5FA",
      label: "Mega Mendung",
    },
  },
  {
    id: 3,
    name: "Payung Batik Kawung",
    price: 400000,
    stock: 30,
    category: "Sedang",
    svg: {
      background: "#F3E8FF",
      canopy: "#8B5CF6",
      handle: "#6D28D9",
      accent: "#C4B5FD",
      label: "Batik Kawung",
    },
  },
  {
    id: 4,
    name: "Payung Batik Sekar Jagad",
    price: 500000,
    stock: 12,
    category: "Besar",
    svg: {
      background: "#FEE2E2",
      canopy: "#DC2626",
      handle: "#991B1B",
      accent: "#FCA5A5",
      label: "Sekar Jagad",
    },
  },
  {
    id: 5,
    name: "Payung Mini Bordir",
    price: 250000,
    stock: 40,
    category: "Mini",
    svg: {
      background: "#DCFCE7",
      canopy: "#22C55E",
      handle: "#166534",
      accent: "#86EFAC",
      label: "Mini Bordir",
    },
  },
  {
    id: 6,
    name: "Payung Jumbo Classic",
    price: 650000,
    stock: 8,
    category: "Besar",
    svg: {
      background: "#EDE9FE",
      canopy: "#7C3AED",
      handle: "#5B21B6",
      accent: "#C4B5FD",
      label: "Jumbo Classic",
    },
  },
  {
    id: 7,
    name: "Payung Custom Design",
    price: 750000,
    stock: 5,
    category: "Sedang",
    svg: {
      background: "#FEF9C3",
      canopy: "#F59E0B",
      handle: "#B45309",
      accent: "#FCD34D",
      label: "Custom Design",
    },
  },
  {
    id: 8,
    name: "Payung Eksklusif Gold",
    price: 850000,
    stock: 3,
    category: "Besar",
    svg: {
      background: "#FAF5FF",
      canopy: "#A855F7",
      handle: "#7E22CE",
      accent: "#E9D5FF",
      label: "Eksklusif Gold",
    },
  },
  {
    id: 9,
    name: "Payung Mini Floral",
    price: 275000,
    stock: 35,
    category: "Mini",
    svg: {
      background: "#FEE7F8",
      canopy: "#EC4899",
      handle: "#BE185D",
      accent: "#F9A8D4",
      label: "Mini Floral",
    },
  },
  {
    id: 10,
    name: "Payung Batik Truntum",
    price: 425000,
    stock: 20,
    category: "Sedang",
    svg: {
      background: "#EFF6FF",
      canopy: "#2563EB",
      handle: "#1D4ED8",
      accent: "#93C5FD",
      label: "Batik Truntum",
    },
  },
];

// Test DB
app.get("/test-db", async (req, res) => {
  try {
    const { data, error } = await supabase.from("users").select("id").limit(1);
    if (error) throw error;
    res.json({ message: "Connection OK", data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "DB error", error: err.message });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "DB error", error: err.message });
  }
});

// Create user
app.post("/users", async (req, res) => {
  const { name, email, phone, password, account_type = "customer" } = req.body;

  try {
    const { data, error } = await supabase
      .from("users")
      .insert({
        name,
        email,
        phone,
        password,
        account_type,
      })
      .select("id, name, email, phone, account_type");

    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
});

// Get all products dengan images
app.get("/products", async (req, res) => {
  try {
    const { data, error } = await supabase.from("products").select("*");

    if (error) throw error;

    if (data && data.length > 0) {
      const productsWithImages = data.map((p) => ({
        ...p,
        imageUrl: sampleProducts.find((sp) => sp.id === p.id)?.svg
          ? createPayungSvg(
              sampleProducts.find((sp) => sp.id === p.id).svg.background,
              sampleProducts.find((sp) => sp.id === p.id).svg.canopy,
              sampleProducts.find((sp) => sp.id === p.id).svg.handle,
              sampleProducts.find((sp) => sp.id === p.id).svg.accent,
              sampleProducts.find((sp) => sp.id === p.id).svg.label,
            )
          : "",
      }));
      res.json(productsWithImages);
    } else {
      // Return sample products if DB is empty
      const productsWithImages = sampleProducts.map((p) => ({
        ...p,
        imageUrl: createPayungSvg(
          p.svg.background,
          p.svg.canopy,
          p.svg.handle,
          p.svg.accent,
          p.svg.label,
        ),
        alt: `Payung Geulis - ${p.name}`,
      }));
      res.json(productsWithImages);
    }
  } catch (err) {
    console.error(err);
    // Return sample products as fallback
    const productsWithImages = sampleProducts.map((p) => ({
      ...p,
      imageUrl: createPayungSvg(
        p.svg.background,
        p.svg.canopy,
        p.svg.handle,
        p.svg.accent,
        p.svg.label,
      ),
      alt: `Payung Geulis - ${p.name}`,
    }));
    res.json(productsWithImages);
  }
});

// Get product by ID
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      // Return from sample data
      const product = sampleProducts.find((p) => p.id === parseInt(id));
      if (product) {
        return res.json({
          ...product,
          imageUrl: createPayungSvg(
            product.svg.background,
            product.svg.canopy,
            product.svg.handle,
            product.svg.accent,
            product.svg.label,
          ),
          alt: `Payung Geulis - ${product.name}`,
        });
      }
      return res.status(404).json({ message: "Product not found" });
    }

    const product = data;
    const sampleProduct = sampleProducts.find((sp) => sp.id === product.id);
    res.json({
      ...product,
      imageUrl: sampleProduct
        ? createPayungSvg(
            sampleProduct.svg.background,
            sampleProduct.svg.canopy,
            sampleProduct.svg.handle,
            sampleProduct.svg.accent,
            sampleProduct.svg.label,
          )
        : "",
      alt: `Payung Geulis - ${product.name}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching product", error: err.message });
  }
});

// Login user
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, phone, account_type")
      .eq("email", email)
      .single();

    if (error) {
      // Untuk demo, create user jika tidak ada
      const { data: newUser, error: insertError } = await supabase
        .from("users")
        .insert({
          name: email.split("@")[0],
          email,
          account_type: "customer",
        })
        .select("id, name, email, phone, account_type");

      if (insertError) throw insertError;
      return res.json(newUser[0]);
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
});

// Checkout
app.post("/checkout", async (req, res) => {
  const { user_id, items } = req.body;

  try {
    let total = 0;
    let seller_id = null;

    // 1. Validate stock & calculate total
    for (let item of items) {
      const { data: product, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", item.product_id)
        .single();

      if (error) {
        return res.status(404).json({ message: "Produk tidak ditemukan" });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({ message: "Stock tidak cukup" });
      }

      seller_id = product.seller_id;
      total += product.price * item.quantity;
    }

    // 2. Create order
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id,
        seller_id,
        total,
        status: "pending",
      })
      .select();

    if (orderError) throw orderError;

    // 3. Add order items & update stock
    for (let item of items) {
      const { data: product } = await supabase
        .from("products")
        .select("price")
        .eq("id", item.product_id)
        .single();

      await supabase.from("order_items").insert({
        order_id: order[0].id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: product.price,
      });

      await supabase
        .from("products")
        .update({ stock: item.quantity - item.quantity })
        .eq("id", item.product_id);
    }

    res.json({ message: "Checkout berhasil", order: order[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Checkout error", error: err.message });
  }
});

// Get order details
app.get("/orders/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .eq("id", id)
      .single();

    if (orderError) {
      return res.status(404).json({ message: "Order not found" });
    }

    const { data: items, error: itemsError } = await supabase
      .from("order_items")
      .select(`
        id,
        quantity,
        price,
        product_id,
        products (name)
      `)
      .eq("order_id", id);

    if (itemsError) throw itemsError;

    const itemsWithSubtotal = items.map((item) => ({
      ...item,
      subtotal: item.price * item.quantity,
    }));

    res.json({
      order,
      items: itemsWithSubtotal,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching order", error: err.message });
  }
});

// Get user orders
app.get("/users/:id/orders", async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", id)
      .order("created_at", { ascending: false });

    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching orders", error: err.message });
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("Backend jalan dengan baik!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
