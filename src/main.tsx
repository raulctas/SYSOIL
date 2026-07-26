import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import '@fontsource/rem/400.css';
import '@fontsource/rem/500.css';
import '@fontsource/rem/600.css';
import '@fontsource/rem/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

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
