import { ReactNode, useMemo } from 'react';

import { Container } from 'components/container';
import { useSlideshow } from 'hooks/use-slideshow';

import styles from './page-hero.module.css';

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  /**
   * Imagen de fondo opcional (ruta en /public). Si se pasan varias, se van
   * deslizando en bucle con un fundido entre ellas.
   */
  image?: string | string[];
  /** Amplía el ancho del contenido (útil para títulos largos que deben ir en una línea). */
  wide?: boolean;
}

export const PageHero = ({ eyebrow, title, subtitle, image, wide }: Props) => {
  const images = useMemo(() => {
    if (!image) {
      return [];
    }
    return Array.isArray(image) ? image : [image];
  }, [image]);
  const slide = useSlideshow(images);

  return (
    <section className={styles.hero}>
      {images.map((src, index) => (
        <div
          key={src}
          className={[styles.bg, index === slide && styles.bgActive]
            .filter(Boolean)
            .join(' ')}
          style={{ backgroundImage: `url('${src}')` }}
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
