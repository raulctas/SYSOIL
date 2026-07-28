import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Layers } from 'lucide-react';

import { Button } from 'components/button';
import { CastrolGallery } from 'components/castrol-gallery';
import { PageHero } from 'components/page-hero';
import { Section } from 'components/section';
import { NotFound } from 'pages/not-found';
import { getCatalogItem } from 'data/catalog';
import { routes } from 'src/constants/routes';

import styles from './product-detail.module.css';

export const ProductDetail = () => {
  const { t } = useTranslation();
  const { slug = '' } = useParams();
  const item = getCatalogItem(slug);

  if (!item) {
    return <NotFound />;
  }

  const features = t(`catalog.${item.slug}.features`, {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <PageHero
        eyebrow={t(`catalog.categories.${item.category}`)}
        title={t(`catalog.${item.slug}.title`)}
        subtitle={t(`catalog.${item.slug}.summary`)}
        image={item.image}
      />

      <Section>
        <Link to={routes.productsServices} className={styles.breadcrumb}>
          <ArrowLeft size={16} aria-hidden />
          {t('common.backToList')}
        </Link>

        <div className={styles.layout}>
          <div>
            <span className={styles.category}>
              {t(`catalog.categories.${item.category}`)}
            </span>
            <h2 className={styles.title}>{t(`catalog.${item.slug}.title`)}</h2>
            <p className={styles.description}>
              {t(`catalog.${item.slug}.description`)}
            </p>

            <h3 className={styles.featuresTitle}>{t('catalog.detail.featuresTitle')}</h3>
            <ul className={styles.features}>
              {features.map((feature) => (
                <li key={feature} className={styles.feature}>
                  <Check size={20} className={styles.featureIcon} aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {item.image ? (
              <div className={styles.media}>
                <img src={item.image} alt={t(`catalog.${item.slug}.title`)} />
              </div>
            ) : (
              <div className={styles.noMedia}>
                <Layers size={56} aria-hidden />
              </div>
            )}
          </div>
        </div>

        {item.slug === 'lubricants' && <CastrolGallery />}

        <div className={styles.cta}>
          <h3>{t('catalog.detail.ctaTitle')}</h3>
          <p>{t('catalog.detail.ctaText')}</p>
          <Button to={routes.contact} variant="primary">
            {t('catalog.detail.ctaButton')}
          </Button>
        </div>
      </Section>
    </>
  );
};
