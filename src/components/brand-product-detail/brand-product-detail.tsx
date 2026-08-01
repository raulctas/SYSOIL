import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Button } from 'components/button';
import { PageHero } from 'components/page-hero';
import { Section } from 'components/section';
import { BrandProduct } from 'interfaces/brand-product';
import { routes } from 'src/constants/routes';

import styles from './brand-product-detail.module.css';

interface Props {
  product: BrandProduct;
  /** Nombre de la marca (Castrol, Repsol). No traducible. */
  brandLabel: string;
  /** Título de la gama, mostrado como eyebrow del hero. */
  rangeTitle: string;
  description: string;
  /** Ruta y texto del enlace de vuelta al producto de lubricantes. */
  backTo: string;
  backLabel: string;
  /** Imágenes de fondo del hero, que se van deslizando en bucle. */
  heroImages?: string[];
  /** La imagen es una fotografía (llena el marco) en lugar de un render de producto. */
  photo?: boolean;
}

/**
 * Ficha de un producto de marca: imagen grande, título, descripción y CTA.
 * Compartida por las páginas de producto Castrol y Repsol.
 */
export const BrandProductDetail = ({
  product,
  brandLabel,
  rangeTitle,
  description,
  backTo,
  backLabel,
  heroImages,
  photo,
}: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero eyebrow={rangeTitle} title={product.name} image={heroImages} wide />

      <Section>
        <Link to={backTo} className={styles.breadcrumb}>
          <ArrowLeft size={16} aria-hidden />
          {backLabel}
        </Link>

        <div className={styles.layout}>
          <div className={styles.mediaWrap}>
            <div className={[styles.media, photo && styles.photo].filter(Boolean).join(' ')}>
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div>
            <span className={styles.brand}>{brandLabel}</span>
            <h2 className={styles.title}>{product.name}</h2>
            <p className={styles.description}>{description}</p>
            <Button to={routes.contact} variant="primary">
              {t('catalog.detail.ctaButton')}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};
