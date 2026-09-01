import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Container } from 'components/container';
import { Logo } from 'components/logo';
import { routes } from 'src/constants/routes';
import { COMPANY, COMPANY_ADDRESS_LINES } from 'src/constants/company';

import styles from './footer.module.css';

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
            {/* Aquí sí cabe el logotipo completo, con su descriptor. */}
            <Logo tone="dark" descriptor className={styles.logo} />
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
