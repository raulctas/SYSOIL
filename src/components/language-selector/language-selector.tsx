import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';

import { SUPPORTED_LANGUAGES } from 'src/constants/languages';

import styles from './language-selector.module.css';

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current =
    SUPPORTED_LANGUAGES.find((language) => i18n.language.startsWith(language.code)) ??
    SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div
      className={[styles.selector, open && styles.open].filter(Boolean).join(' ')}
      ref={ref}
    >
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('common.languageSelector')}
        onClick={() => setOpen((value) => !value)}
      >
        <Globe size={16} aria-hidden />
        {current.code.toUpperCase()}
        <ChevronDown size={16} className={styles.chevron} aria-hidden />
      </button>

      {open && (
        <div className={styles.menu} role="listbox">
          {SUPPORTED_LANGUAGES.map((language) => (
            <button
              key={language.code}
              type="button"
              role="option"
              aria-selected={language.code === current.code}
              className={[
                styles.option,
                language.code === current.code && styles.active,
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => changeLanguage(language.code)}
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
