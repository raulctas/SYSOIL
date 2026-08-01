import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { BrandProductDetail } from 'components/brand-product-detail';
import { NotFound } from 'pages/not-found';
import { getCastrolProduct } from 'data/castrol-gallery';
import { productDetailPath } from 'src/constants/routes';

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
    <BrandProductDetail
      product={product}
      brandLabel={BRAND_LABEL}
      rangeTitle={t('castrolGallery.title')}
      description={t(`castrol.${product.slug}.description`)}
      backTo={productDetailPath('lubricants-castrol')}
      backLabel={t('castrol.back')}
    />
  );
};
