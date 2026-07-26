import { useTranslation } from 'react-i18next';
import { useRouteError } from 'react-router-dom';

import { Button } from 'components/button';
import { Container } from 'components/container';
import { routes } from 'src/constants/routes';

import styles from './route-error.module.css';

/**
 * Frontera de error de las rutas. Evita la pantalla de error por defecto de
 * React Router y ofrece una salida amable al usuario.
 */
export const RouteError = () => {
  const { t } = useTranslation();
  const error = useRouteError();

  if (import.meta.env.DEV) {
    // Ayuda a depurar en desarrollo sin exponer nada en producción.
    console.error('Route error:', error);
  }

  return (
    <Container>
      <div className={styles.wrapper}>
        <div>
          <h1 className={styles.title}>{t('error.title')}</h1>
          <p className={styles.text}>{t('error.text')}</p>
          <Button href={routes.home}>{t('error.cta')}</Button>
        </div>
      </div>
    </Container>
  );
};
