import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin } from 'lucide-react';

import { Button } from 'components/button';
import { PageHero } from 'components/page-hero';
import { Section } from 'components/section';
import { COMPANY, COMPANY_ADDRESS_LINES } from 'src/constants/company';

import styles from './contact.module.css';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: '', email: '', subject: '', message: '' };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (values: FormState) => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) nextErrors.name = t('contact.form.required');
    if (!values.email.trim()) {
      nextErrors.email = t('contact.form.required');
    } else if (!EMAIL_REGEX.test(values.email)) {
      nextErrors.email = t('contact.form.invalidEmail');
    }
    if (!values.subject.trim()) nextErrors.subject = t('contact.form.required');
    if (!values.message.trim()) nextErrors.message = t('contact.form.required');
    return nextErrors;
  };

  const updateField = (field: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = `${form.message}\n\n---\n${form.name}\n${form.email}`;
    const mailto = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      {/* `wide` suelta el ancho del titular: sin él "Hablemos de tu próximo
          suministro" no cabe en los 720px por defecto y parte en dos líneas. */}
      <PageHero
        eyebrow={t('contact.hero.eyebrow')}
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
        wide
      />

      <Section>
        <div className={styles.layout}>
          {/* Form */}
          <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
            <h2 className={styles.formTitle}>{t('contact.form.title')}</h2>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                {t('contact.form.name')}
              </label>
              <input
                id="name"
                type="text"
                className={[styles.input, errors.name && styles.invalid]
                  .filter(Boolean)
                  .join(' ')}
                placeholder={t('contact.form.namePlaceholder')}
                value={form.name}
                onChange={(event) => updateField('name')(event.target.value)}
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                {t('contact.form.email')}
              </label>
              <input
                id="email"
                type="email"
                className={[styles.input, errors.email && styles.invalid]
                  .filter(Boolean)
                  .join(' ')}
                placeholder={t('contact.form.emailPlaceholder')}
                value={form.email}
                onChange={(event) => updateField('email')(event.target.value)}
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="subject">
                {t('contact.form.subject')}
              </label>
              <input
                id="subject"
                type="text"
                className={[styles.input, errors.subject && styles.invalid]
                  .filter(Boolean)
                  .join(' ')}
                placeholder={t('contact.form.subjectPlaceholder')}
                value={form.subject}
                onChange={(event) => updateField('subject')(event.target.value)}
              />
              {errors.subject && <span className={styles.error}>{errors.subject}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                className={[styles.textarea, errors.message && styles.invalid]
                  .filter(Boolean)
                  .join(' ')}
                placeholder={t('contact.form.messagePlaceholder')}
                value={form.message}
                onChange={(event) => updateField('message')(event.target.value)}
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            <Button type="submit" variant="primary" fullWidth>
              {t('contact.form.submit')}
            </Button>
            <p className={styles.note}>{t('contact.form.note')}</p>
          </form>

          {/* Info */}
          <div className={styles.info}>
            <div>
              <h2 className={styles.infoTitle}>{t('contact.info.title')}</h2>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <MapPin size={22} aria-hidden />
              </span>
              <div>
                <p className={styles.infoLabel}>{t('contact.info.addressTitle')}</p>
                <address className={styles.infoText}>
                  <strong>{COMPANY.legalName}</strong>
                  <br />
                  {COMPANY_ADDRESS_LINES.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </address>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <Mail size={22} aria-hidden />
              </span>
              <div>
                <p className={styles.infoLabel}>{t('contact.info.emailTitle')}</p>
                <p className={styles.infoText}>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
