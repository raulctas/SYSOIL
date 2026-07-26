import styles from './page-loader.module.css';

export const PageLoader = () => (
  <div className={styles.loader}>
    <div className={styles.spinner} role="status" aria-label="Loading" />
  </div>
);
