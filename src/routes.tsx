import { Route } from 'react-router-dom';

import { MainLayout } from 'components/main-layout';
import { RouteError } from 'components/route-error';
import { routes as routePaths } from 'src/constants/routes';
import { Home } from 'pages/home';
import { AboutUs } from 'pages/about-us';
import { ProductsServices } from 'pages/products-services';
import { ProductDetail } from 'pages/product-detail';
import { CastrolProduct } from 'pages/castrol-product';
import { Team } from 'pages/team';
import { Contact } from 'pages/contact';
import { NotFound } from 'pages/not-found';

// Importación directa (eager) de las páginas. Para un sitio de pocas páginas el
// code-splitting por ruta no aporta valor y, con el dev-server de Vite, la carga
// diferida disparaba re-optimizaciones de dependencias que provocaban dos copias
// de React ("Invalid hook call" / "destroy is not a function").
export const routes = (
  <Route element={<MainLayout />} errorElement={<RouteError />}>
    <Route index element={<Home />} />
    <Route path={routePaths.aboutUs} element={<AboutUs />} />
    <Route path={routePaths.productsServices} element={<ProductsServices />} />
    <Route path={routePaths.castrolProduct} element={<CastrolProduct />} />
    <Route path={routePaths.productDetail} element={<ProductDetail />} />
    <Route path={routePaths.team} element={<Team />} />
    <Route path={routePaths.contact} element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);
