/**
 * Imágenes de fondo del hero de la Home. Se van deslizando en bucle detrás del
 * texto, manteniendo el degradado de la capa superior (`heroOverlay`) que les da
 * la transparencia. Son decorativas: no llevan texto alternativo.
 */
export const HERO_SLIDES: string[] = [
  '/images/about-us.jpg',
  '/images/growth.jpg',
  '/images/products/renewable-energy.jpg',
  '/images/products/wholesale-fuels.jpg',
  '/images/products/fuel-additives.jpg',
];

/** Milisegundos que permanece visible cada imagen antes de pasar a la siguiente. */
export const HERO_SLIDE_INTERVAL = 6000;
