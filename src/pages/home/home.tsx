import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

import { Button } from 'components/button';
import { CatalogCard } from 'components/catalog-card';
import { Container } from 'components/container';
import { Section } from 'components/section';
import { routes } from 'src/constants/routes';
import { getFeaturedCatalog } from 'data/catalog';
import { HERO_SLIDE_INTERVAL, HERO_SLIDES } from 'data/hero-slides';
import { VALUES } from 'data/values';

import styles from './home.module.css';

const HOME_VALUES = VALUES.slice(0, 6);

export const Home = () => {
  const { t } = useTranslation();
  const featured = getFeaturedCatalog().slice(0, 4);
  const [slide, setSlide] = useState(0);

  // Rotación cíclica de las imágenes de fondo del hero.
  useEffect(() => {
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % HERO_SLIDES.length),
      HERO_SLIDE_INTERVAL,
    );
    return () => window.clearInterval(timer);
  }, []);

  const stats = [
    { value: t('home.growth.stats.revenueValue'), label: t('home.growth.stats.revenue') },
    { value: t('home.growth.stats.growthValue'), label: t('home.growth.stats.growth') },
    { value: t('home.growth.stats.ebitdaValue'), label: t('home.growth.stats.ebitda') },
    { value: t('home.growth.stats.yearsValue'), label: t('home.growth.stats.years') },
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        {HERO_SLIDES.map((image, index) => (
          <div
            key={image}
            className={[styles.heroBg, index === slide && styles.heroBgActive]
              .filter(Boolean)
              .join(' ')}
            style={{ backgroundImage: `url('${image}')` }}
            aria-hidden
          />
        ))}
        <div className={styles.heroOverlay} />
        <Container>
          <div className={styles.heroInner}>
            <span className={styles.heroEyebrow}>{t('home.hero.eyebrow')}</span>
            <h1 className={styles.heroTitle}>{t('home.hero.title')}</h1>
            <p className={styles.heroSubtitle}>{t('home.hero.subtitle')}</p>
            <div className={styles.heroActions}>
              <Button to={routes.contact} variant="secondary">
                {t('home.hero.ctaPrimary')}
              </Button>
              <Button to={routes.productsServices} variant="onDark">
                {t('home.hero.ctaSecondary')}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <Section>
        <div className={styles.missionGrid}>
          <div className={styles.missionText}>
            <span className={styles.heroEyebrow} style={{ color: 'var(--color-green)' }}>
              {t('home.mission.eyebrow')}
            </span>
            <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-4)' }}>
              {t('home.mission.title')}
            </h2>
            <p>{t('home.mission.text')}</p>
            <Button to={routes.aboutUs} variant="outline">
              {t('home.mission.cta')}
              <ArrowRight size={18} aria-hidden />
            </Button>
          </div>
          <div className={styles.missionImageWrap}>
            <div className={styles.missionImage}>
              <img src="/images/growth.jpg" alt={t('home.mission.title')} />
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section
        background="subtle"
        eyebrow={t('home.values.eyebrow')}
        title={t('home.values.title')}
        subtitle={t('home.values.subtitle')}
        center
      >
        <div className={styles.valuesGrid}>
          {HOME_VALUES.map(({ key, icon: Icon }) => (
            <div key={key} className={styles.valueCard}>
              <span className={styles.valueIcon}>
                <Icon size={24} aria-hidden />
              </span>
              <h3 className={styles.valueTitle}>{t(`values.${key}.title`)}</h3>
              <p className={styles.valueText}>{t(`values.${key}.text`)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Growth stats */}
      <Section
        background="navy"
        eyebrow={t('home.growth.eyebrow')}
        title={t('home.growth.title')}
        subtitle={t('home.growth.text')}
      >
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured products & services */}
      <Section
        eyebrow={t('home.featured.eyebrow')}
        title={t('home.featured.title')}
        subtitle={t('home.featured.subtitle')}
        center
      >
        <div className={styles.cardsGrid}>
          {featured.map((item) => (
            <CatalogCard key={item.slug} item={item} />
          ))}
        </div>
        <div className={styles.centerCta}>
          <Button to={routes.productsServices} variant="outline">
            {t('home.featured.cta')}
            <ArrowRight size={18} aria-hidden />
          </Button>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="subtle">
        <div className={styles.finalCta}>
          <h2>{t('home.cta.title')}</h2>
          <p>{t('home.cta.text')}</p>
          <Button to={routes.contact} variant="secondary">
            {t('home.cta.button')}
          </Button>
        </div>
      </Section>
    </>
  );
};
