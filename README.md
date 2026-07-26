# ParriGroup.Front

Sitio web corporativo de **PARRI GROUP MANEGEMENT S.L** — empresa de trading y gestión
integral de hidrocarburos y productos energéticos.

## Stack

- **Vite + React 18 + TypeScript** (modo estricto)
- **React Router v6** — rutas centralizadas en `src/constants/routes.ts`
- **i18next / react-i18next** — textos en `public/locales/<idioma>/translation.json`
- **CSS Modules** + design tokens (`src/styles/design-tokens.css`)
- Fuentes self-hosted vía `@fontsource` (Rem + Inter)

Convenciones del proyecto: ficheros/carpetas en `kebab-case`, una carpeta por componente
con barrel `index.ts`, componentes como arrow functions, Prettier + ESLint (flat config).

## Requisitos

- Node.js 18+
- Yarn (classic)

## Scripts

```bash
yarn install      # instalar dependencias
yarn dev          # servidor de desarrollo (http://localhost:5173)
yarn build        # type-check + build de producción
yarn preview      # previsualizar el build
yarn lint         # ESLint
yarn type-check   # comprobación de tipos (tsc --noEmit)
```

## Estructura

```
public/
  images/          # logo, imágenes de productos, equipo (extraídas del brochure)
  locales/es/      # textos estáticos (español)
src/
  components/       # componentes compartidos (kebab-case + index.ts)
  pages/            # una carpeta por página
  data/             # catálogo de productos/servicios, equipo, valores
  constants/        # rutas, idiomas, datos de empresa
  libs/             # inicialización de i18n
  styles/           # design tokens + estilos globales
```

## Multi-idioma

Actualmente solo español. Para añadir un idioma:

1. Crear `public/locales/<código>/translation.json` (traducción del fichero `es`).
2. Registrar el idioma en `src/constants/languages.ts`.

El selector de idioma del header y i18next lo detectarán automáticamente.

## Contenido pendiente

- **Fotos del equipo:** los miembros muestran un placeholder. Para publicar una foto, copiar
  la imagen a `public/images/team/` y añadir `photo: '/images/team/<archivo>'` en `src/data/team.ts`.
- **Correo de contacto:** el formulario usa `mailto:` con el email definido en
  `src/constants/company.ts` (placeholder `info@parrigroup.com` — sustituir por el real).
