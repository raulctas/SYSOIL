/**
 * Mapa central de rutas de la aplicación. Cualquier navegación (Link, useNavigate)
 * debe usar estas constantes en lugar de strings literales.
 */
export const routes = {
  home: '/',
  aboutUs: '/about-us',
  productsServices: '/products-services',
  productDetail: '/products-services/:slug',
  team: '/team',
  contact: '/contact',
} as const;

/** Construye la ruta de detalle de un producto/servicio a partir de su slug. */
export const productDetailPath = (slug: string) => `/products-services/${slug}`;
