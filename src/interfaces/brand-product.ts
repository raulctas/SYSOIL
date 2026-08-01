/**
 * Producto de una gama de marca (Castrol, Repsol) mostrado en el carrusel de la
 * página de detalle del lubricante y en su propia ficha. `name` es el nombre
 * comercial (no traducible); la descripción vive en `translation.json`.
 */
export interface BrandProduct {
  slug: string;
  name: string;
  image: string;
}
