import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { BrandProductDetail } from 'components/brand-product-detail';
import { NotFound } from 'pages/not-found';
import { getCatalogItem } from 'data/catalog';
import { getCastrolProduct } from 'data/castrol-gallery';
import { getCatalogHeroSlides } from 'data/hero-slides';
import { productDetailPath } from 'src/constants/routes';

// Nombre de marca (no traducible).
const BRAND_LABEL = 'Castrol';

/** Ficha del catálogo a la que pertenece la gama, de la que cuelgan estas páginas. */
const PARENT_SLUG = 'lubricants-castrol';
const PARENT_ITEM = getCatalogItem(PARENT_SLUG);
const HERO_SLIDES = PARENT_ITEM ? getCatalogHeroSlides(PARENT_ITEM) : [];

export const CastrolProduct = () => {
  const { t } = useTranslation();
  const { slug = '' } = useParams();
  const product = getCastrolProduct(slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <BrandProductDetail
      product={product}
      brandLabel={BRAND_LABEL}
      rangeTitle={t('castrolGallery.title')}
      description={t(`castrol.${product.slug}.description`)}
      backTo={productDetailPath(PARENT_SLUG)}
      backLabel={t('castrol.back')}
      heroImages={HERO_SLIDES}
    />
  );
};
