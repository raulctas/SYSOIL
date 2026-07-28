import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

import { CASTROL_GALLERY } from 'data/castrol-gallery';
import { castrolProductPath } from 'src/constants/routes';

import styles from './castrol-gallery.module.css';

/**
 * Carrusel horizontal de productos Castrol (embla-carousel): desplazamiento
 * suave y circular (loop), con botones a ambos lados. Cada producto enlaza a su
 * página de detalle (foto grande + descripción).
 */
export const CastrolGallery = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className={styles.gallery} aria-label={t('castrolGallery.title')}>
      <div className={styles.header}>
        <h3 className={styles.title}>{t('castrolGallery.title')}</h3>
        <p className={styles.subtitle}>{t('castrolGallery.subtitle')}</p>
      </div>

      <div className={styles.carousel}>
        <button
          type="button"
          className={styles.control}
          aria-label={t('castrolGallery.prev')}
          onClick={scrollPrev}
        >
          <ChevronLeft size={22} aria-hidden />
        </button>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {CASTROL_GALLERY.map((product) => (
              <div key={product.slug} className={styles.slide}>
                <Link to={castrolProductPath(product.slug)} className={styles.card}>
                  <div className={styles.media}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <p className={styles.name}>{product.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={styles.control}
          aria-label={t('castrolGallery.next')}
          onClick={scrollNext}
        >
          <ChevronRight size={22} aria-hidden />
        </button>
      </div>
    </section>
  );
};
