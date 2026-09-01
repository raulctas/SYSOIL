import { ReactNode } from 'react';

import { Container } from 'components/container';
import { Eyebrow } from 'components/eyebrow';

import styles from './section.module.css';

/**
 * Fondos de sección. La home no usa más que arena y negro, alternándolos sin
 * descanso: esa alternancia es la que marca su ritmo. El blanco queda para las
 * páginas interiores, donde el contenido manda sobre la composición.
 */
type Background = 'default' | 'sand' | 'ink';

interface Props {
  children: ReactNode;
  id?: string;
  background?: Background;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** Ensancha el encabezado (útil para subtítulos largos que deben ir en una línea). */
  wideHeader?: boolean;
  className?: string;
}

export const Section = ({
  children,
  id,
  background = 'default',
  eyebrow,
  title,
  subtitle,
  wideHeader,
  className,
}: Props) => {
  const hasHeader = Boolean(eyebrow || title || subtitle);

  return (
    <section
      id={id}
      className={[styles.section, styles[background], className]
        .filter(Boolean)
        .join(' ')}
    >
      <Container>
        {hasHeader && (
          <div
            className={[styles.header, wideHeader && styles.wide].filter(Boolean).join(' ')}
          >
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};
