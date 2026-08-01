import { CATALOG } from 'data/catalog';
import { CatalogItem } from 'interfaces/catalog';

/**
 * Imágenes de fondo de las cabeceras (hero). En cada página se van deslizando en
 * bucle por detrás del texto, manteniendo la capa de degradado superior que les
 * da la transparencia. Son decorativas: no llevan texto alternativo.
 */

/** Milisegundos que permanece visible cada imagen antes de pasar a la siguiente. */
export const HERO_SLIDE_INTERVAL = 6000;

/**
 * Imágenes por hero en las fichas de detalle. Se limita porque cada imagen se
 * descarga aunque aún no se vea, y las fichas son las páginas más numerosas.
 */
const DETAIL_SLIDE_COUNT = 4;

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

/**
 * Imágenes del hero de una ficha de detalle: primero la del propio producto o
 * servicio, que es la que lo identifica, y después las de otros de su misma
 * categoría. Se empieza por el siguiente del catálogo para que dos fichas
 * vecinas no muestren la misma secuencia.
 */
export const getCatalogHeroSlides = (item: CatalogItem): string[] => {
  const sameCategory = CATALOG.filter((other) => other.category === item.category);
  const start = sameCategory.indexOf(item);
  return [...sameCategory.slice(start), ...sameCategory.slice(0, start)]
    .map((other) => other.image)
    .filter((image): image is string => Boolean(image))
    .slice(0, DETAIL_SLIDE_COUNT);
};
