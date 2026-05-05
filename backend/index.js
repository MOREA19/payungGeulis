import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.send("DB error");
  }
});
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.send("DB error");
  }
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
  );

  res.json(result.rows[0]);
});

app.post("/checkout", async (req, res) => {
  const { user_id, items } = req.body;

  let total = 0;

  // 1. HITUNG TOTAL + CEK STOCK
  for (let item of items) {
    const product = await pool.query("SELECT * FROM products WHERE id = $1", [
      item.product_id,
    ]);

    const data = product.rows[0];

    if (!data) {
      return res.status(404).json({ message: "Produk tidak ditemukan" });
    }

    // ⬅️ TAMBAHAN DI SINI (validasi stock)
    if (data.stock < item.quantity) {
      return res.status(400).json({ message: "Stock tidak cukup" });
    }

    total += data.price * item.quantity;
  }

  // 2. INSERT ORDER
  const order = await pool.query(
    "INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING *",
    [user_id, total],
  );

  // 3. INSERT ORDER ITEMS + KURANGI STOCK
  for (let item of items) {
    await pool.query(
      "INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3)",
      [order.rows[0].id, item.product_id, item.quantity],
    );

    // ⬅️ TAMBAHAN DI SINI (update stock)
    await pool.query("UPDATE products SET stock = stock - $1 WHERE id = $2", [
      item.quantity,
      item.product_id,
    ]);
  }

  res.json({ message: "Checkout berhasil", order: order.rows[0] });
});

app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.send("DB error");
  }
});

app.get("/orders/:id", async (req, res) => {
  const { id } = req.params;

  const order = await pool.query("SELECT * FROM orders WHERE id = $1", [id]);

  const items = await pool.query(
    `SELECT oi.*, p.name, p.price
     FROM order_items oi
     JOIN products p ON oi.product_id = p.id
     WHERE oi.order_id = $1`,
    [id],
  );

  const itemsWithSubtotal = items.rows.map((item) => ({
    ...item,
    subtotal: item.price * item.quantity,
  }));

  res.json({
    order: order.rows[0],
    items: itemsWithSubtotal,
  });
});

app.get("/", (req, res) => {
  res.send("Backend jalan");
});

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});
