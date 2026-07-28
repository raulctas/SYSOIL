import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { CASTROL_GALLERY } from 'data/castrol-gallery';
import { castrolProductPath } from 'src/constants/routes';

import styles from './castrol-gallery.module.css';

const getPerView = (width: number) => {
  if (width >= 1100) return 5;
  if (width >= 850) return 4;
  if (width >= 600) return 3;
  if (width >= 430) return 2;
  return 1;
};

/**
 * Carrusel horizontal de productos Castrol. Muestra 4-5 productos a la vez y
 * permite recorrer la colección de forma circular con los botones. Cada producto
 * enlaza a su página de detalle (foto grande + descripción).
 */
export const CastrolGallery = () => {
  const { t } = useTranslation();
  const items = CASTROL_GALLERY;
  const [perView, setPerView] = useState(5);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const update = () => setPerView(getPerView(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const count = Math.min(perView, items.length);
  const visible = Array.from({ length: count }, (_, i) => items[(start + i) % items.length]);

  const prev = () => setStart((s) => (s - 1 + items.length) % items.length);
  const next = () => setStart((s) => (s + 1) % items.length);

  return (
    <section className={styles.gallery} aria-label={t('castrolGallery.title')}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{t('castrolGallery.title')}</h3>
          <p className={styles.subtitle}>{t('castrolGallery.subtitle')}</p>
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.control}
            aria-label={t('castrolGallery.prev')}
            onClick={prev}
          >
            <ChevronLeft size={22} aria-hidden />
          </button>
          <button
            type="button"
            className={styles.control}
            aria-label={t('castrolGallery.next')}
            onClick={next}
          >
            <ChevronRight size={22} aria-hidden />
          </button>
        </div>
      </div>

      <div
        className={styles.track}
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {visible.map((product, i) => (
          <Link
            key={`${product.slug}-${i}`}
            to={castrolProductPath(product.slug)}
            className={styles.card}
          >
            <div className={styles.media}>
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <p className={styles.name}>{product.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
