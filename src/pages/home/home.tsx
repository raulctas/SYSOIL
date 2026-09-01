import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

import { Button } from 'components/button';
import { CatalogCard } from 'components/catalog-card';
import { Container } from 'components/container';
import { Eyebrow } from 'components/eyebrow';
import { Section } from 'components/section';
import { routes } from 'src/constants/routes';
import { getFeaturedCatalog } from 'data/catalog';
import { HERO_SLIDES } from 'data/hero-slides';
import { VALUES } from 'data/values';
import { useSlideshow } from 'hooks/use-slideshow';

import styles from './home.module.css';

/**
 * La banda de valores se recorre sola, así que la pista lleva dos copias
 * idénticas de la lista: cuando la primera termina de salir por la izquierda,
 * la segunda ocupa su sitio y el bucle no se ve. La copia va oculta a los
 * lectores de pantalla para que no lean los valores dos veces.
 */
const VALUE_RUNS = [
  { id: 'principal', hidden: false },
  { id: 'copia', hidden: true },
];

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
            <Eyebrow>{t('home.hero.eyebrow')}</Eyebrow>
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
            <Eyebrow>{t('home.mission.eyebrow')}</Eyebrow>
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
      <Section
        background="ink"
        eyebrow={t('home.values.eyebrow')}
        title={t('home.values.title')}
        subtitle={t('home.values.subtitle')}
      >
        <div className={styles.valuesViewport}>
          <div className={styles.valuesTrack}>
            {VALUE_RUNS.map((run) => (
              <div key={run.id} className={styles.valuesRun} aria-hidden={run.hidden || undefined}>
                {VALUES.map(({ key, icon: Icon }) => (
                  <article key={key} className={styles.valueCard}>
                    <div className={styles.valueHead}>
                      <span className={styles.valueIcon}>
                        <Icon size={20} strokeWidth={1.5} aria-hidden />
                      </span>
                      <h3 className={styles.valueTitle}>{t(`values.${key}.title`)}</h3>
                    </div>
                    <p className={styles.valueText}>{t(`values.${key}.text`)}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/**
       * Productos y servicios va entre Valores y Crecimiento a propósito: sin
       * este claro quedarían dos secciones negras seguidas.
       */}
      <Section
        background="sand"
        eyebrow={t('home.featured.eyebrow')}
        title={t('home.featured.title')}
        subtitle={t('home.featured.subtitle')}
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
            <Eyebrow>{t('home.growth.eyebrow')}</Eyebrow>
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
      <Section background="sand" className={styles.ctaSection}>
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
