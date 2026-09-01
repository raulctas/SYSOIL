import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './button.module.css';

/**
 * `primary` es el oro relleno, la única acción de la web con superficie de
 * marca; `outline` la acompaña sobre fondo claro y `onDark` sobre fondo
 * oscuro. No hay una cuarta: cuando el principal era azul hacía falta un
 * `secondary` dorado, y al pasar el principal a oro se quedó sin cometido.
 */
type Variant = 'primary' | 'outline' | 'onDark';

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  /** Ruta interna (react-router). */
  to: string;
};

type ButtonAsAnchor = CommonProps & {
  /** Enlace externo o mailto. */
  href: string;
};

type Props = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const classesFor = (variant: Variant, fullWidth?: boolean, className?: string) =>
  [styles.button, styles[variant], fullWidth && styles.fullWidth, className]
    .filter(Boolean)
    .join(' ');

export const Button = ({
  children,
  variant = 'primary',
  fullWidth,
  className,
  ...rest
}: Props) => {
  const classes = classesFor(variant, fullWidth, className);

  if ('to' in rest && rest.to !== undefined) {
    return (
      <Link to={rest.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a href={rest.href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};
