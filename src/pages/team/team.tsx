import { Trans, useTranslation } from 'react-i18next';

import { BrandName } from 'components/brand-name';
import { PageHero } from 'components/page-hero';
import { Section } from 'components/section';
import { TEAM, TEAM_PHOTO_PLACEHOLDER } from 'data/team';

import styles from './team.module.css';

export const Team = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t('team.hero.eyebrow')}
        title={
          <Trans i18nKey="team.hero.title" components={{ brand: <BrandName /> }} />
        }
        subtitle={t('team.hero.subtitle')}
        image="/images/products/chemicals-gases.jpg"
        wide
      />

      <Section>
        <div className={styles.grid}>
          {TEAM.map((member) => {
            const hasPhoto = Boolean(member.photo);
            return (
              <article key={member.id} className={styles.card}>
                <div className={styles.photoWrap}>
                  <img
                    src={member.photo ?? TEAM_PHOTO_PLACEHOLDER}
                    alt={member.name}
                    loading="lazy"
                  />
                  {!hasPhoto && (
                    <span className={styles.pending}>{t('team.photoPending')}</span>
                  )}
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{t(`team.roles.${member.roleKey}`)}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
};
