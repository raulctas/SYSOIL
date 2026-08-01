import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { routes } from 'src/constants/routes';

import styles from './logo.module.css';

/** Logo de la empresa, enlazado al inicio. */
export const Logo = () => {
  const { t } = useTranslation();

  return (
    <Link to={routes.home} className={styles.logo} aria-label={t('common.homeLink')}>
      <img
        className={styles.image}
        src="/images/logo/logo-transparent.png"
        alt={t('common.companyName')}
      />
    </Link>
  );
};
