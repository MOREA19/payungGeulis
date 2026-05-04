export interface PayungProduct {
  id: string;
  name: string;
  price: string;
  stock: number;
  category: 'Mini' | 'Sedang' | 'Besar';
  imageUrl: string;
  alt: string;
}

const svgToDataUrl = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const createPayungSvg = (
  background: string,
  canopy: string,
  handle: string,
  accent: string,
  label: string
) => svgToDataUrl(`
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

export const heroImageUrl = createPayungSvg('#FFEDD5', '#F59E0B', '#92400E', '#FBBF24', 'Payung Geulis');
export const aboutImageUrl = createPayungSvg('#DEF7EC', '#10B981', '#065F46', '#6EE7B7', 'Kerajinan Tasik');

export const productList: PayungProduct[] = [
  {
    id: 'PG-001',
    name: 'Payung Batik Parang',
    price: 'Rp 350.000',
    stock: 25,
    category: 'Sedang',
    imageUrl: createPayungSvg('#FEF3C7', '#F59E0B', '#87360C', '#D97706', 'Batik Parang'),
    alt: 'Payung Geulis motif Batik Parang'
  },
  {
    id: 'PG-002',
    name: 'Payung Batik Mega Mendung',
    price: 'Rp 450.000',
    stock: 18,
    category: 'Besar',
    imageUrl: createPayungSvg('#E0F2FE', '#1D4ED8', '#1E40AF', '#60A5FA', 'Mega Mendung'),
    alt: 'Payung Geulis motif Mega Mendung'
  },
  {
    id: 'PG-003',
    name: 'Payung Batik Kawung',
    price: 'Rp 400.000',
    stock: 30,
    category: 'Sedang',
    imageUrl: createPayungSvg('#F3E8FF', '#8B5CF6', '#6D28D9', '#C4B5FD', 'Batik Kawung'),
    alt: 'Payung Geulis motif Kawung'
  },
  {
    id: 'PG-004',
    name: 'Payung Batik Sekar Jagad',
    price: 'Rp 500.000',
    stock: 12,
    category: 'Besar',
    imageUrl: createPayungSvg('#FEE2E2', '#DC2626', '#991B1B', '#FCA5A5', 'Sekar Jagad'),
    alt: 'Payung Geulis motif Sekar Jagad'
  },
  {
    id: 'PG-005',
    name: 'Payung Mini Bordir',
    price: 'Rp 250.000',
    stock: 40,
    category: 'Mini',
    imageUrl: createPayungSvg('#DCFCE7', '#22C55E', '#166534', '#86EFAC', 'Mini Bordir'),
    alt: 'Payung Geulis mini dengan bordir'
  },
  {
    id: 'PG-006',
    name: 'Payung Jumbo Classic',
    price: 'Rp 650.000',
    stock: 8,
    category: 'Besar',
    imageUrl: createPayungSvg('#EDE9FE', '#7C3AED', '#5B21B6', '#C4B5FD', 'Jumbo Classic'),
    alt: 'Payung Geulis jumbo klasik'
  },
  {
    id: 'PG-007',
    name: 'Payung Custom Design',
    price: 'Rp 750.000',
    stock: 5,
    category: 'Sedang',
    imageUrl: createPayungSvg('#FEF9C3', '#F59E0B', '#B45309', '#FCD34D', 'Custom Design'),
    alt: 'Payung Geulis desain custom'
  },
  {
    id: 'PG-008',
    name: 'Payung Eksklusif Gold',
    price: 'Rp 850.000',
    stock: 3,
    category: 'Besar',
    imageUrl: createPayungSvg('#FAF5FF', '#A855F7', '#7E22CE', '#E9D5FF', 'Eksklusif Gold'),
    alt: 'Payung Geulis eksklusif warna emas'
  },
  {
    id: 'PG-009',
    name: 'Payung Mini Floral',
    price: 'Rp 275.000',
    stock: 35,
    category: 'Mini',
    imageUrl: createPayungSvg('#FEE7F8', '#EC4899', '#BE185D', '#F9A8D4', 'Mini Floral'),
    alt: 'Payung Geulis mini motif floral'
  },
  {
    id: 'PG-010',
    name: 'Payung Batik Truntum',
    price: 'Rp 425.000',
    stock: 20,
    category: 'Sedang',
    imageUrl: createPayungSvg('#EFF6FF', '#2563EB', '#1D4ED8', '#93C5FD', 'Batik Truntum'),
    alt: 'Payung Geulis motif Batik Truntum'
  }
];

export const detailImages = [
  {
    src: createPayungSvg('#FFFBEB', '#F59E0B', '#92400E', '#FBBF24', 'Detail 1'),
    alt: 'Detail Payung Geulis 1'
  },
  {
    src: createPayungSvg('#ECFDF5', '#10B981', '#065F46', '#6EE7B7', 'Detail 2'),
    alt: 'Detail Payung Geulis 2'
  },
  {
    src: createPayungSvg('#F0F9FF', '#0EA5E9', '#075985', '#7DD3FC', 'Detail 3'),
    alt: 'Detail Payung Geulis 3'
  },
  {
    src: createPayungSvg('#FCE7F3', '#EC4899', '#9D174D', '#F9A8D4', 'Detail 4'),
    alt: 'Detail Payung Geulis 4'
  }
];

export const cartItems = [
  productList[0],
  productList[4],
  productList[5]
];

export const checkoutItems = [
  productList[0],
  productList[1],
  productList[2]
];
