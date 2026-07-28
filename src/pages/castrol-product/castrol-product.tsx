import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Button } from 'components/button';
import { PageHero } from 'components/page-hero';
import { Section } from 'components/section';
import { NotFound } from 'pages/not-found';
import { getCastrolProduct } from 'data/castrol-gallery';
import { productDetailPath, routes } from 'src/constants/routes';

import styles from './castrol-product.module.css';

// Nombre de marca (no traducible).
const BRAND_LABEL = 'Castrol';

export const CastrolProduct = () => {
  const { t } = useTranslation();
  const { slug = '' } = useParams();
  const product = getCastrolProduct(slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <PageHero eyebrow={t('castrolGallery.title')} title={product.name} wide />

      <Section>
        <Link to={productDetailPath('lubricants')} className={styles.breadcrumb}>
          <ArrowLeft size={16} aria-hidden />
          {t('castrol.back')}
        </Link>

        <div className={styles.layout}>
          <div className={styles.mediaWrap}>
            <div className={styles.media}>
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div>
            <span className={styles.brand}>{BRAND_LABEL}</span>
            <h2 className={styles.title}>{product.name}</h2>
            <p className={styles.description}>{t(`castrol.${product.slug}.description`)}</p>
            <Button to={routes.contact} variant="primary">
              {t('catalog.detail.ctaButton')}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};
