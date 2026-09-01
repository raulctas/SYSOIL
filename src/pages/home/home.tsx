import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

import { Button } from 'components/button';
import { CatalogCard } from 'components/catalog-card';
import { Container } from 'components/container';
import { Section } from 'components/section';
import { routes } from 'src/constants/routes';
import { getFeaturedCatalog } from 'data/catalog';
import { HERO_SLIDES } from 'data/hero-slides';
import { VALUES } from 'data/values';
import { useSlideshow } from 'hooks/use-slideshow';

import styles from './home.module.css';

const HOME_VALUES = VALUES.slice(0, 6);

export const Home = () => {
  const { t } = useTranslation();
  const featured = getFeaturedCatalog().slice(0, 4);
  const slide = useSlideshow(HERO_SLIDES);

  /**
   * Tres cifras, no cuatro: los ejercicios no son una magnitud comparable con
   * las otras tres y cierran el bloque como pie, bajo el filete.
   */
  const stats = [
    { value: t('home.growth.stats.revenueValue'), label: t('home.growth.stats.revenue') },
    { value: t('home.growth.stats.growthValue'), label: t('home.growth.stats.growth') },
    { value: t('home.growth.stats.ebitdaValue'), label: t('home.growth.stats.ebitda') },
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
            <span className={styles.eyebrowGold}>{t('home.hero.eyebrow')}</span>
            <h1 className={styles.heroTitle}>{t('home.hero.title')}</h1>
            <p className={styles.heroSubtitle}>{t('home.hero.subtitle')}</p>
            <div className={styles.heroActions}>
              <Button to={routes.contact} variant="primary">
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
      <Section background="sand">
        <div className={styles.missionGrid}>
          <div className={styles.missionText}>
            <span className={styles.eyebrowMission}>{t('home.mission.eyebrow')}</span>
            <h2 className={styles.missionTitle}>{t('home.mission.title')}</h2>
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
      <Section background="ink">
        <div className={styles.splitHeader}>
          <div>
            <span className={styles.eyebrowGold}>{t('home.values.eyebrow')}</span>
            <h2 className={styles.splitTitle}>{t('home.values.title')}</h2>
          </div>
          <p className={styles.splitText}>{t('home.values.subtitle')}</p>
        </div>

        {/**
         * Los huecos de 1px de la rejilla hacen de filetes: el fondo se ve por
         * ellos y cada celda vuelve a tapar el resto con el negro de sección.
         */}
        <div className={styles.valuesGrid}>
          {HOME_VALUES.map(({ key, icon: Icon }) => (
            <div key={key} className={styles.valueCard}>
              <Icon className={styles.valueIcon} size={26} strokeWidth={1.5} aria-hidden />
              <span className={styles.valueRule} />
              <h3 className={styles.valueTitle}>{t(`values.${key}.title`)}</h3>
              <p className={styles.valueText}>{t(`values.${key}.text`)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/**
       * Productos y servicios va entre Valores y Crecimiento a propósito: sin
       * este claro quedarían dos secciones negras seguidas.
       */}
      <Section
        background="petrol"
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

      {/* Growth stats */}
      <Section background="ink" className={styles.growth}>
        <div className={styles.splitHeader}>
          <div>
            <span className={styles.eyebrowGold}>{t('home.growth.eyebrow')}</span>
            <h2 className={styles.growthTitle}>{t('home.growth.title')}</h2>
          </div>
          <p className={styles.splitText}>{t('home.growth.text')}</p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <span className={styles.statRule} />
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.statsPeriod}>
          {t('home.growth.stats.years')} · {t('home.growth.stats.yearsValue')}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className={styles.ctaSection}>
        <div className={styles.finalCta}>
          <h2 className={styles.finalCtaTitle}>{t('home.cta.title')}</h2>
          <p className={styles.finalCtaText}>{t('home.cta.text')}</p>
          <Button to={routes.contact} variant="primary">
            {t('home.cta.button')}
          </Button>
        </div>
      </Section>
    </>
  );
};
