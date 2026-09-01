import { useTranslation } from 'react-i18next';

import { CatalogCard } from 'components/catalog-card';
import { PageHero } from 'components/page-hero';
import { Section } from 'components/section';
import { getCatalogByCategory } from 'data/catalog';

import styles from './products-services.module.css';

export const ProductsServices = () => {
  const { t } = useTranslation();
  const services = getCatalogByCategory('service');
  const products = getCatalogByCategory('product');

  return (
    <>
      <PageHero
        eyebrow={t('productsServices.hero.eyebrow')}
        title={t('productsServices.hero.title')}
        subtitle={t('productsServices.hero.subtitle')}
        wide
      />

      <Section
        title={t('productsServices.products.title')}
        subtitle={t('productsServices.products.subtitle')}
        wideHeader
      >
        <div className={styles.grid}>
          {products.map((item) => (
            <CatalogCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>

      <Section
        background="sand"
        title={t('productsServices.services.title')}
        subtitle={t('productsServices.services.subtitle')}
      >
        <div className={styles.grid}>
          {services.map((item) => (
            <CatalogCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
};
