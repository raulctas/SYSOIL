import { ReactNode } from 'react';

import { Container } from 'components/container';
import { HERO_SLIDES } from 'data/hero-slides';
import { useSlideshow } from 'hooks/use-slideshow';

import styles from './page-hero.module.css';

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  /** Amplía el ancho del contenido (útil para títulos largos que deben ir en una línea). */
  wide?: boolean;
}

export const PageHero = ({ eyebrow, title, subtitle, wide }: Props) => {
  const slide = useSlideshow(HERO_SLIDES);

  return (
    <section className={styles.hero}>
      {HERO_SLIDES.map((image, index) => (
        <div
          key={image}
          className={[styles.bg, index === slide && styles.bgActive]
            .filter(Boolean)
            .join(' ')}
          style={{ backgroundImage: `url('${image}')` }}
          aria-hidden
        />
      ))}
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
};
