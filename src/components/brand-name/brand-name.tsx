import styles from './brand-name.module.css';

// Partes del wordmark de marca (no traducibles: es el nombre de la empresa).
const BRAND = { name: 'PARRI', suffix: 'GROUP' };

/**
 * Nombre de marca en línea: "PARRI" en verde y "GROUP" en dorado, con los
 * colores de marca. Pensado para insertarse dentro de textos (p. ej. títulos).
 */
export const BrandName = () => (
  <span className={styles.brand}>
    <span className={styles.name}>{BRAND.name}</span>{' '}
    <span className={styles.suffix}>{BRAND.suffix}</span>
  </span>
);
