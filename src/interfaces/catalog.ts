export type CatalogCategory = 'service' | 'product';

/**
 * Entrada del catálogo de productos/servicios. La estructura vive en código y el
 * texto (título, resumen, descripción, características) en `translation.json` bajo
 * la clave `catalog.<slug>.*`, de forma que sea traducible.
 */
export interface CatalogItem {
  slug: string;
  category: CatalogCategory;
  /** Ruta de la imagen dentro de /public. Opcional para servicios sin imagen. */
  image?: string;
  /** Nº de características listadas en translation.json (catalog.<slug>.features.N). */
  featureCount: number;
  /** Destacar en la home. */
  featured?: boolean;
}
