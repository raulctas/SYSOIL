export interface Language {
  code: string;
  label: string;
}

/**
 * Idiomas soportados por la web. Por ahora solo español.
 * Para añadir un idioma: crear `public/locales/<code>/translation.json` y
 * registrarlo aquí; el selector y i18next lo detectarán automáticamente.
 */
export const SUPPORTED_LANGUAGES: Language[] = [{ code: 'es', label: 'Español' }];

export const DEFAULT_LANGUAGE = 'es';
