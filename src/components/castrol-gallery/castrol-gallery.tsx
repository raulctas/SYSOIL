import { useTranslation } from 'react-i18next';

import { CASTROL_GALLERY } from 'data/castrol-gallery';

import styles from './castrol-gallery.module.css';

/**
 * Galería de productos Castrol. Rejilla de tarjetas (imagen + nombre), un formato
 * más limpio y usable que el de la web de origen.
 */
export const CastrolGallery = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.gallery} aria-label={t('castrolGallery.title')}>
      <h3 className={styles.title}>{t('castrolGallery.title')}</h3>
      <p className={styles.subtitle}>{t('castrolGallery.subtitle')}</p>
      <div className={styles.grid}>
        {CASTROL_GALLERY.map((product) => (
          <article key={product.name} className={styles.card}>
            <div className={styles.media}>
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <p className={styles.name}>{product.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
