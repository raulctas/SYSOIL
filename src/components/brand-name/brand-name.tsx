import styles from './brand-name.module.css';

/**
 * Nombre de la empresa (no traducible). El espacio antes de "S.L" es duro
 * (\u00A0, escapado para que se vea en el código) y así la forma societaria no
 * se queda sola al final de una línea.
 */
const BRAND_NAME = 'SYSOIL INVESTMENT\u00A0S.L';

/**
 * Nombre de marca en línea, entero en el oro del logo. Pensado para insertarse
 * dentro de textos (p. ej. títulos), de los que hereda el tamaño.
 */
export const BrandName = () => <span className={styles.brand}>{BRAND_NAME}</span>;
