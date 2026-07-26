import { CatalogItem } from 'interfaces/catalog';

/**
 * Catálogo de servicios y productos de Parri Group (contenido del brochure).
 * El texto correspondiente a cada `slug` está en `translation.json` → `catalog.<slug>`.
 */
export const CATALOG: CatalogItem[] = [
  // --- Servicios ---
  {
    slug: 'wholesale-hydrocarbons',
    category: 'service',
    image: '/images/products/wholesale-fuels.jpg',
    featureCount: 3,
    featured: true,
  },
  {
    slug: 'fuel-additives',
    category: 'service',
    image: '/images/products/fuel-additives.jpg',
    featureCount: 2,
  },
  {
    slug: 'mobile-fuel-stations',
    category: 'service',
    image: '/images/products/mobile-fuel-stations.jpg',
    featureCount: 2,
    featured: true,
  },
  {
    slug: 'chemicals-refrigerant-gases',
    category: 'service',
    image: '/images/products/chemicals-gases.jpg',
    featureCount: 3,
  },
  {
    slug: 'strategic-intermediation',
    category: 'service',
    featureCount: 3,
  },
  {
    slug: 'logistics-supply-chain',
    category: 'service',
    featureCount: 3,
  },
  {
    slug: 'consulting-risk-management',
    category: 'service',
    featureCount: 3,
  },

  // --- Productos ---
  {
    slug: 'chemicals-gases',
    category: 'product',
    image: '/images/products/chemicals-gases.jpg',
    featureCount: 3,
  },
  {
    slug: 'mobile-service-stations',
    category: 'product',
    image: '/images/products/mobile-fuel-stations.jpg',
    featureCount: 2,
  },
  {
    slug: 'wholesale-fuels',
    category: 'product',
    image: '/images/products/wholesale-fuels.jpg',
    featureCount: 3,
  },
  {
    slug: 'lubricants',
    category: 'product',
    image: '/images/products/lubricants.jpg',
    featureCount: 2,
    featured: true,
  },
  {
    slug: 'antifriction-additives',
    category: 'product',
    image: '/images/products/fuel-additives.jpg',
    featureCount: 2,
  },
];

export const getCatalogItem = (slug: string) =>
  CATALOG.find((item) => item.slug === slug);

export const getCatalogByCategory = (category: CatalogItem['category']) =>
  CATALOG.filter((item) => item.category === category);

export const getFeaturedCatalog = () => CATALOG.filter((item) => item.featured);
