import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Container } from 'components/container';
import { routes } from 'src/constants/routes';
import { COMPANY, COMPANY_ADDRESS_LINES } from 'src/constants/company';

import styles from './footer.module.css';

/**
 * Partes del wordmark de marca (no traducibles: es el nombre de la empresa).
 * Sin la forma societaria: aquí el nombre funciona como marca gráfica, igual
 * que en el logo. La razón social completa va debajo, en la columna de contacto
 * y en la línea de copyright.
 */
const BRAND = { name: 'SYSOIL', suffix: 'INVESTMENT' };

const NAV_LINKS = [
  { to: routes.home, labelKey: 'nav.home', end: true },
  { to: routes.aboutUs, labelKey: 'nav.aboutUs' },
  { to: routes.productsServices, labelKey: 'nav.productsServices' },
  { to: routes.team, labelKey: 'nav.team' },
  { to: routes.contact, labelKey: 'nav.contact' },
];

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to={routes.home} className={styles.wordmark} aria-label={t('common.homeLink')}>
              <span className={styles.wordmarkName}>{BRAND.name}</span>
              <span className={styles.wordmarkSuffix}>{BRAND.suffix}</span>
            </Link>
            <p className={styles.tagline}>{t('footer.tagline')}</p>
          </div>

          <div>
            <h3 className={styles.colTitle}>{t('footer.navigation')}</h3>
            <ul className={styles.linkList}>
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <Link className={styles.link} to={item.to}>
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>{t('footer.contact')}</h3>
            <address className={styles.contactLine}>
              <strong>{COMPANY.legalName}</strong>
              <br />
              {COMPANY_ADDRESS_LINES.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <a className={styles.link} href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {COMPANY.legalName}. {t('footer.rights')}
          </span>
          <span>{t('footer.builtWith')}</span>
        </div>
      </Container>
    </footer>
  );
};
