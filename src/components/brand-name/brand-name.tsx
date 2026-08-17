import styles from './brand-name.module.css';

// Partes del wordmark de marca (no traducibles: es el nombre de la empresa).
const BRAND = { name: 'SYSOIL', suffix: 'INVESTMENT' };

/**
 * Nombre de marca en línea: "SYSOIL" en oro, como en el logo, y "INVESTMENT"
 * heredando el color del texto para que funcione sobre fondos claros y oscuros.
 * Pensado para insertarse dentro de textos (p. ej. títulos).
 */
export const BrandName = () => (
  <span className={styles.brand}>
    <span className={styles.name}>{BRAND.name}</span>{' '}
    <span className={styles.suffix}>{BRAND.suffix}</span>
  </span>
);
