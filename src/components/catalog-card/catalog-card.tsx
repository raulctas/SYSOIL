import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

import { CatalogItem } from 'interfaces/catalog';
import { productDetailPath } from 'src/constants/routes';

import styles from './catalog-card.module.css';

interface Props {
  item: CatalogItem;
}

export const CatalogCard = ({ item }: Props) => {
  const { t } = useTranslation();
  const title = t(`catalog.${item.slug}.title`);

  return (
    <Link to={productDetailPath(item.slug)} className={styles.card}>
      {item.image ? (
        <div className={styles.media}>
          <img src={item.image} alt={title} loading="lazy" />
          <span className={styles.badge}>{t(`catalog.categories.${item.category}`)}</span>
        </div>
      ) : (
        <div className={styles.noMedia}>
          <Layers size={40} aria-hidden />
        </div>
      )}

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{t(`catalog.${item.slug}.summary`)}</p>
        <span className={styles.more}>
          {t('common.readMore')}
          <ArrowRight size={16} aria-hidden />
        </span>
      </div>
    </Link>
  );
};
