import { ReactNode } from 'react';

import styles from './eyebrow.module.css';

interface Props {
  children: ReactNode;
  className?: string;
}

/**
 * Antetítulo de sección: un filete corto y el rótulo en la tipografía de
 * marca. Todas las secciones de la web abren igual, así que el criterio vive
 * aquí y no repartido por cada página.
 *
 * No lleva variante de color: la toma de la superficie que lo contiene, que
 * declara `--eyebrow-ink` y `--eyebrow-rule` cuando es oscura. Sobre fondo
 * claro valen los valores que trae por defecto.
 */
export const Eyebrow = ({ children, className }: Props) => (
  <span className={[styles.eyebrow, className].filter(Boolean).join(' ')}>{children}</span>
);
