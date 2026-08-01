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
    image: '/images/services/wholesale-hydrocarbons.jpg',
    featureCount: 3,
  },
  {
    slug: 'strategic-intermediation',
    category: 'service',
    image: '/images/services/strategic-intermediation.jpg',
    featureCount: 3,
  },
  {
    slug: 'logistics-supply-chain',
    category: 'service',
    image: '/images/services/logistics-supply-chain.jpg',
    featureCount: 3,
  },
  {
    slug: 'consulting-risk-management',
    category: 'service',
    image: '/images/services/consulting-risk-management.jpg',
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
    featured: true,
  },
  {
    slug: 'lubricants-castrol',
    category: 'product',
    image: '/images/products/lubricants.jpg',
    featureCount: 2,
    featured: true,
  },
  {
    slug: 'lubricants-repsol',
    category: 'product',
    image: '/images/products/repsol/repsol-hero.jpg',
    featureCount: 3,
    featured: true,
  },
  {
    slug: 'antifriction-additives',
    category: 'product',
    image: '/images/products/fuel-additives.jpg',
    featureCount: 2,
  },
  {
    slug: 'renewable-energy-projects',
    category: 'product',
    image: '/images/products/renewable-energy.jpg',
    featureCount: 3,
    featured: true,
  },
];

export const getCatalogItem = (slug: string) =>
  CATALOG.find((item) => item.slug === slug);

export const getCatalogByCategory = (category: CatalogItem['category']) =>
  CATALOG.filter((item) => item.category === category);

export const getFeaturedCatalog = () => CATALOG.filter((item) => item.featured);
