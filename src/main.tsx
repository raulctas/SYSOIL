import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// REM sostiene toda la web: titulares, cuerpo y navegación.
import '@fontsource/rem/400.css';
import '@fontsource/rem/500.css';
import '@fontsource/rem/600.css';
import '@fontsource/rem/700.css';
// Archivo solo para la marca: logotipo, antetítulos y cifras destacadas.
import '@fontsource/archivo/500.css';
import '@fontsource/archivo/800.css';

import 'src/styles/design-tokens.css';
import 'src/styles/global.css';

import { i18nextInit } from 'libs/i18n';
import { PageLoader } from 'components/page-loader';
import { router } from './router';

i18nextInit();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
