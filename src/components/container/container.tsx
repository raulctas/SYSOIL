import { ElementType, ReactNode } from 'react';

import styles from './container.module.css';

interface Props {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export const Container = ({ children, as: Tag = 'div', className }: Props) => (
  <Tag className={[styles.container, className].filter(Boolean).join(' ')}>
    {children}
  </Tag>
);
