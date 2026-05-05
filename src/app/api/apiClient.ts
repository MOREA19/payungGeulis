const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const api = {
  // Products
  getProducts: async () => {
    const res = await fetch(`${API_BASE_URL}/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  },

  getProduct: async (id: number) => {
    const res = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
  },

  // Users
  createUser: async (data: { 
    name: string; 
    email: string; 
    phone: string; 
    password: string;
    account_type?: 'customer' | 'seller';
  }) => {
    const res = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, account_type: data.account_type || 'customer' }),
    });
    if (!res.ok) throw new Error('Failed to create user');
    return res.json();
  },

  getUsers: async () => {
    const res = await fetch(`${API_BASE_URL}/users`);
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
  },

  // Authentication
  login: async (email: string, password?: string) => {
    const res = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('Failed to login');
    return res.json();
  },

  // Orders
  checkout: async (userId: number, items: Array<{ product_id: number; quantity: number }>) => {
    const res = await fetch(`${API_BASE_URL}/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, items }),
    });
    if (!res.ok) throw new Error('Checkout failed');
    return res.json();
  },

  getOrder: async (orderId: number) => {
    const res = await fetch(`${API_BASE_URL}/orders/${orderId}`);
    if (!res.ok) throw new Error('Failed to fetch order');
    return res.json();
  },

  getUserOrders: async (userId: number) => {
    const res = await fetch(`${API_BASE_URL}/users/${userId}/orders`);
    if (!res.ok) throw new Error('Failed to fetch user orders');
    return res.json();
  },

  // Test
  testDB: async () => {
    const res = await fetch(`${API_BASE_URL}/test-db`);
    if (!res.ok) throw new Error('DB test failed');
    return res.json();
  },
};
