import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { BrandProductDetail } from 'components/brand-product-detail';
import { NotFound } from 'pages/not-found';
import { getRepsolProduct } from 'data/repsol-gallery';
import { productDetailPath } from 'src/constants/routes';

// Nombre de marca (no traducible).
const BRAND_LABEL = 'Repsol';

export const RepsolProduct = () => {
  const { t } = useTranslation();
  const { slug = '' } = useParams();
  const product = getRepsolProduct(slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <BrandProductDetail
      product={{ ...product, name: t(`repsol.${product.slug}.name`) }}
      brandLabel={BRAND_LABEL}
      rangeTitle={t('repsolGallery.title')}
      description={t(`repsol.${product.slug}.description`)}
      backTo={productDetailPath('lubricants-repsol')}
      backLabel={t('repsol.back')}
      photo
    />
  );
};
