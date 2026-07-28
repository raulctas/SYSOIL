import { Container } from 'components/container';

import styles from './page-hero.module.css';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Imagen de fondo opcional (ruta en /public). */
  image?: string;
  /** Amplía el ancho del contenido (útil para títulos largos que deben ir en una línea). */
  wide?: boolean;
}

export const PageHero = ({ eyebrow, title, subtitle, image, wide }: Props) => (
  <section className={styles.hero}>
    {image && (
      <div className={styles.bg} style={{ backgroundImage: `url('${image}')` }} />
    )}
    <div className={styles.overlay} />
    <Container>
      <div className={[styles.inner, wide && styles.wide].filter(Boolean).join(' ')}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </Container>
  </section>
);
