/**
 * Imágenes de fondo de las cabeceras (hero). En cada página se van deslizando en
 * bucle por detrás del texto, manteniendo la capa de degradado superior que les
 * da la transparencia. Son decorativas: no llevan texto alternativo.
 *
 * Las páginas de detalle de producto no aparecen aquí: su hero muestra la imagen
 * del propio producto, que lo identifica.
 */

/** Milisegundos que permanece visible cada imagen antes de pasar a la siguiente. */
export const HERO_SLIDE_INTERVAL = 6000;

export const HOME_HERO_SLIDES: string[] = [
  '/images/about-us.jpg',
  '/images/growth.jpg',
  '/images/products/renewable-energy.jpg',
  '/images/products/wholesale-fuels.jpg',
  '/images/products/fuel-additives.jpg',
];

export const ABOUT_US_HERO_SLIDES: string[] = [
  '/images/about-us.jpg',
  '/images/growth.jpg',
  '/images/services/strategic-intermediation.jpg',
  '/images/services/consulting-risk-management.jpg',
];

export const TEAM_HERO_SLIDES: string[] = [
  '/images/products/chemicals-gases.jpg',
  '/images/about-us.jpg',
  '/images/growth.jpg',
  '/images/services/strategic-intermediation.jpg',
];

export const PRODUCTS_SERVICES_HERO_SLIDES: string[] = [
  '/images/products/mobile-fuel-stations.jpg',
  '/images/products/wholesale-fuels.jpg',
  '/images/products/lubricants.jpg',
  '/images/products/chemicals-gases.jpg',
  '/images/products/renewable-energy.jpg',
  '/images/services/logistics-supply-chain.jpg',
];

export const CONTACT_HERO_SLIDES: string[] = [
  '/images/services/strategic-intermediation.jpg',
  '/images/services/logistics-supply-chain.jpg',
  '/images/about-us.jpg',
];
