import { lazy } from 'react';

const LandingPage = lazy(() => import('src/pages/LandingPage'));
const ActivistsPage = lazy(() => import('src/pages/ActivistsPage'));

const routes = [
  {
    path: '/',
    exact: true,
    component: LandingPage,
  },
  {
    path: '/activists',
    exact: true,
    component: ActivistsPage,
  },
]

export default routes;
