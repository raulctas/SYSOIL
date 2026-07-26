import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { routes } from 'src/constants/routes';

import styles from './logo.module.css';

interface Props {
  size?: 'default' | 'large';
  /** Usa la versión con fondo transparente (para superficies oscuras). */
  transparent?: boolean;
}

export const Logo = ({ size = 'default', transparent }: Props) => {
  const { t } = useTranslation();
  const src = transparent ? '/images/logo-transparent.png' : '/images/logo.png';

  return (
    <Link
      to={routes.home}
      className={[styles.logo, size === 'large' && styles.large]
        .filter(Boolean)
        .join(' ')}
      aria-label={t('common.homeLink')}
    >
      <img className={styles.image} src={src} alt={t('common.companyName')} />
    </Link>
  );
};
