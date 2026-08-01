import { BrandProduct } from 'interfaces/brand-product';

/**
 * Gamas de lubricantes Repsol mostradas en el carrusel de la página de detalle
 * de "Lubricantes Repsol", según los catálogos por segmento del fabricante.
 *
 * A diferencia de la gama Castrol (nombres comerciales), estos nombres son
 * términos genéricos y por tanto traducibles: `name` es el valor por defecto en
 * español y las páginas lo sustituyen por `repsol.<slug>.name`. La descripción
 * vive en `repsol.<slug>.description`.
 */
export const REPSOL_GALLERY: BrandProduct[] = [
  { slug: 'car', name: 'Coche', image: '/images/repsol/car.jpg' },
  { slug: 'motorcycle', name: 'Moto', image: '/images/repsol/motorcycle.jpg' },
  { slug: 'truck-bus', name: 'Camión y autobús', image: '/images/repsol/truck-bus.jpg' },
  { slug: 'agriculture', name: 'Agro', image: '/images/repsol/agriculture.jpg' },
  { slug: 'industry', name: 'Industria', image: '/images/repsol/industry.jpg' },
  { slug: 'marine', name: 'Marinos', image: '/images/repsol/marine.jpg' },
  {
    slug: 'recreational-boating',
    name: 'Náutica de recreo',
    image: '/images/repsol/recreational-boating.jpg',
  },
  { slug: 'greases', name: 'Grasas', image: '/images/repsol/greases.jpg' },
];

export const getRepsolProduct = (slug: string) =>
  REPSOL_GALLERY.find((product) => product.slug === slug);
