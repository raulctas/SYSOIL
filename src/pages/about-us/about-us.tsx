import { useTranslation } from 'react-i18next';

import { PageHero } from 'components/page-hero';
import { Section } from 'components/section';
import { VALUES } from 'data/values';

import styles from './about-us.module.css';

interface WhyItem {
  title: string;
  text: string;
}

export const AboutUs = () => {
  const { t } = useTranslation();

  const whyItems = t('aboutUs.whyUs.items', { returnObjects: true }) as WhyItem[];

  return (
    <>
      <PageHero
        eyebrow={t('aboutUs.hero.eyebrow')}
        title={t('aboutUs.hero.title')}
        subtitle={t('aboutUs.hero.subtitle')}
        wide
      />

      {/* Intro */}
      <Section background="sand">
        <div className={styles.intro}>
          <div className={styles.introText}>
            <p>{t('aboutUs.intro.text')}</p>
            <p>{t('aboutUs.intro.text2')}</p>
          </div>
          <div className={styles.introImageWrap}>
            <div className={styles.introImage}>
              <img src="/images/about-us.jpg" alt={t('aboutUs.hero.title')} />
            </div>
          </div>
        </div>
      </Section>

      {/* Mission + Vision */}
      <Section background="ink">
        <div className={styles.mvGrid}>
          <div className={styles.mvCard}>
            <h3>{t('aboutUs.mission.title')}</h3>
            <p>{t('aboutUs.mission.text')}</p>
          </div>
          <div className={styles.mvCard}>
            <h3>{t('aboutUs.vision.title')}</h3>
            <p>{t('aboutUs.vision.text')}</p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section
        background="sand"
        title={t('aboutUs.values.title')}
        subtitle={t('aboutUs.values.subtitle')}
      >
        <div className={styles.valuesGrid}>
          {VALUES.map(({ key, icon: Icon }) => (
            <div key={key} className={styles.valueItem}>
              <span className={styles.valueIcon}>
                <Icon size={22} aria-hidden />
              </span>
              <div>
                <h4>{t(`values.${key}.title`)}</h4>
                <p>{t(`values.${key}.text`)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why us */}
      <Section
        background="ink"
        eyebrow={t('aboutUs.whyUs.eyebrow')}
        title={t('aboutUs.whyUs.title')}
      >
        <div className={styles.whyGrid}>
          {whyItems.map((item, index) => (
            <div key={item.title} className={styles.whyCard}>
              <div className={styles.whyNumber}>0{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Growth */}
      <Section
        background="sand"
        eyebrow={t('aboutUs.growth.eyebrow')}
        title={t('aboutUs.growth.title')}
      >
        <p className={styles.growthText}>{t('aboutUs.growth.text')}</p>
        <p className={styles.confidentiality}>{t('aboutUs.growth.confidentiality')}</p>
      </Section>
    </>
  );
};
