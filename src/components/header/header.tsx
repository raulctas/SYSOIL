import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import { Container } from 'components/container';
import { Logo } from 'components/logo';
import { Button } from 'components/button';
import { LanguageSelector } from 'components/language-selector';
import { routes } from 'src/constants/routes';

import styles from './header.module.css';

const NAV_ITEMS = [
  { to: routes.home, labelKey: 'nav.home', end: true },
  { to: routes.aboutUs, labelKey: 'nav.aboutUs' },
  { to: routes.productsServices, labelKey: 'nav.productsServices' },
  { to: routes.team, labelKey: 'nav.team' },
];

export const Header = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  // Cierra el menú móvil al navegar.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /**
   * Cierra el menú móvil al pulsar fuera. La referencia es el header completo y
   * no solo el panel: si la hamburguesa quedara fuera, su pulsación cerraría el
   * menú aquí y su `onClick` lo volvería a abrir, y no habría forma de cerrarlo
   * con el propio botón. El listener solo existe mientras el menú está abierto.
   */
  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const onPressOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', onPressOutside);
    return () => document.removeEventListener('mousedown', onPressOutside);
  }, [mobileOpen]);

  const navLinks = (
    <ul className={styles.navList}>
      {NAV_ITEMS.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              [styles.link, isActive && styles.active].filter(Boolean).join(' ')
            }
          >
            {t(item.labelKey)}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <div className={styles.inner}>
          <Logo descriptor />

          <nav className={`${styles.nav} ${styles.desktopNav}`} aria-label={t('nav.main')}>
            {navLinks}
            <div className={styles.actions}>
              <LanguageSelector />
              <Button to={routes.contact} variant="primary">
                {t('nav.contact')}
              </Button>
            </div>
          </nav>

          <button
            type="button"
            className={styles.burger}
            aria-label={t(mobileOpen ? 'nav.closeMenu' : 'nav.openMenu')}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={26} aria-hidden /> : <Menu size={26} aria-hidden />}
          </button>
        </div>

        {mobileOpen && (
          <nav className={styles.mobileNav} aria-label={t('nav.main')}>
            {navLinks}
            <div className={`${styles.actions} ${styles.mobileActions}`}>
              <LanguageSelector />
              <Button to={routes.contact} variant="primary" fullWidth>
                {t('nav.contact')}
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};
