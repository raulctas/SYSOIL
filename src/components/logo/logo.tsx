import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { routes } from 'src/constants/routes';

import styles from './logo.module.css';

/**
 * Nombre y descriptor son marca gráfica, no texto traducible: se escriben
 * siempre igual en cualquier idioma. El nombre se parte en dos porque la O
 * central la ocupa la gota.
 */
const NAME = { before: 'SYS', after: 'IL' };
const DESCRIPTOR = 'ENERGY TRADING';

/** Contorno de la gota. Su alto iguala al de las mayúsculas del nombre. */
const DROP = 'M65,0 C101,52 130,74 130,115 A65,65 0 0 1 0,115 C0,74 29,52 65,0 Z';

/** Los dos aros del barril, inclinados al alza. Van calados sobre la gota. */
const BANDS = ['M-6,104 L136,62 L136,77 L-6,119 Z', 'M-6,140 L136,98 L136,113 L-6,155 Z'];

/** Fondo sobre el que se coloca el logotipo. Decide el color de la gota. */
type Tone = 'light' | 'dark';

/**
 * La gota, la O de SYSOIL. Sobre fondo claro va plana en el oro oscuro; sobre
 * fondo oscuro lleva el degradado, que le da volumen sin relieves ni sombras.
 * Las bandas siempre se calan del color del fondo (`--logo-band`), nunca de un
 * tercer color.
 */
const Drop = ({ tone }: { tone: Tone }) => {
  /**
   * Los `id` del degradado y de la máscara tienen que ser únicos en la página:
   * la cabecera y el pie pintan dos gotas a la vez y, si coincidieran, la
   * segunda heredaría el relleno de la primera. Se limpian los dos puntos que
   * `useId` añade porque no son válidos dentro de un `url(#…)`.
   */
  const uid = useId().replace(/:/g, '');
  const gradientId = `${uid}-gold`;
  const clipId = `${uid}-clip`;

  return (
    <svg className={styles.drop} viewBox="0 0 130 180" aria-hidden focusable="false">
      <defs>
        {tone === 'dark' && (
          <linearGradient id={gradientId} x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0" stopColor="var(--gold-drop-light)" />
            <stop offset="0.5" stopColor="var(--gold-drop-mid)" />
            <stop offset="1" stopColor="var(--gold-drop-dark)" />
          </linearGradient>
        )}
        <clipPath id={clipId}>
          <path d={DROP} />
        </clipPath>
      </defs>
      <path
        d={DROP}
        fill={tone === 'dark' ? `url(#${gradientId})` : 'var(--color-gold)'}
      />
      <g clipPath={`url(#${clipId})`}>
        {BANDS.map((band) => (
          <path key={band} d={band} className={styles.band} />
        ))}
      </g>
    </svg>
  );
};

interface Props {
  /** Fondo sobre el que se coloca. Por defecto, claro (la cabecera). */
  tone?: Tone;
  /**
   * Añade ENERGY TRADING bajo el nombre. El descriptor acompaña siempre al
   * logotipo salvo donde no cabe legible: la cabecera es una de esas
   * excepciones, y por eso viene apagado por defecto.
   */
  descriptor?: boolean;
  className?: string;
}

/** Logotipo de la empresa, enlazado al inicio. */
export const Logo = ({ tone = 'light', descriptor, className }: Props) => {
  const { t } = useTranslation();

  return (
    <Link
      to={routes.home}
      className={[styles.logo, styles[tone], className].filter(Boolean).join(' ')}
      aria-label={t('common.homeLink')}
    >
      <span className={styles.wordmark}>
        <span>{NAME.before}</span>
        <Drop tone={tone} />
        <span>{NAME.after}</span>
      </span>
      {descriptor && <span className={styles.descriptor}>{DESCRIPTOR}</span>}
    </Link>
  );
};
