import { BrandProduct } from 'interfaces/brand-product';

/**
 * Gama de productos de la marca Castrol mostrada en el carrusel de la página de
 * detalle de "Lubricantes Castrol". Los nombres son nombres comerciales de
 * producto (marca Castrol), por lo que no se traducen. La descripción de cada
 * producto está en `translation.json` → `castrol.<slug>.description`.
 */
export const CASTROL_GALLERY: BrandProduct[] = [
  {
    slug: 'vecton-15w40',
    name: 'Castrol VECTON 15W-40 CK-4/E9',
    image: '/images/products/castrol/castrol-vecton-15w40.png',
  },
  {
    slug: 'vecton-fuel-saver-5w30',
    name: 'Castrol VECTON Fuel Saver 5W-30 E6/E9',
    image: '/images/products/castrol/castrol-vecton-fuel-saver-5w30.png',
  },
  {
    slug: 'moly-grease',
    name: 'Castrol Moly Grease',
    image: '/images/products/castrol/castrol-moly-grease.jpg',
  },
  {
    slug: 'radicool-sf',
    name: 'Castrol RADICOOL SF',
    image: '/images/products/castrol/castrol-radicool-sf.png',
  },
  {
    slug: 'transmax-axle-75w90',
    name: 'Castrol TRANSMAX Axle Long Life 75W-90',
    image: '/images/products/castrol/castrol-transmax-axle-75w90.png',
  },
  {
    slug: 'transmax-manual-fe-75w',
    name: 'Castrol TRANSMAX Manual FE 75W',
    image: '/images/products/castrol/castrol-transmax-manual-fe-75w.png',
  },
  {
    slug: 'edge-supercar-5w50',
    name: 'Castrol EDGE Supercar 5W-50',
    image: '/images/products/castrol/castrol-edge-supercar-5w50.png',
  },
  {
    slug: 'edge-5w30-ll',
    name: 'Castrol EDGE 5W-30 LL',
    image: '/images/products/castrol/castrol-edge-5w30-ll.png',
  },
];

export const getCastrolProduct = (slug: string) =>
  CASTROL_GALLERY.find((product) => product.slug === slug);
