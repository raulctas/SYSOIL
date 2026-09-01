import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// REM para los titulares de página y de sección.
import '@fontsource/rem/700.css';
// Inter para el cuerpo, la navegación, los botones y los rótulos de tarjeta.
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
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
