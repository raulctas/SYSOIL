import { ReactNode } from 'react';

import { Container } from 'components/container';

import styles from './section.module.css';

type Background = 'default' | 'subtle' | 'navy';

interface Props {
  children: ReactNode;
  id?: string;
  background?: Background;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const Section = ({
  children,
  id,
  background = 'default',
  eyebrow,
  title,
  subtitle,
  center,
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
          <div className={[styles.header, center && styles.center].filter(Boolean).join(' ')}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};
