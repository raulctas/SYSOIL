import { useTranslation } from 'react-i18next';

import { Button } from 'components/button';
import { Container } from 'components/container';
import { routes } from 'src/constants/routes';

import styles from './not-found.module.css';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.code}>404</div>
          <h1 className={styles.title}>{t('notFound.title')}</h1>
          <p className={styles.text}>{t('notFound.text')}</p>
          <Button to={routes.home} variant="primary">
            {t('notFound.cta')}
          </Button>
        </div>
      </div>
    </Container>
  );
};
