import { Suspense, lazy, LazyExoticComponent, FC } from 'react';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

import Layout from '../layouts/index';
const Home = lazy(() => import('../pages/home/index'));
const About = lazy(() => import('../pages/about/index'));
const NoMatch = lazy(() => import('../pages/noMatch/index'));

const addPageLoading = (PageComponent: LazyExoticComponent<FC>) => (
  <Suspense fallback={<>...</>}>
    <PageComponent />
  </Suspense>
);

const routeObjects: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: addPageLoading(Home),
      },
      {
        index: true,
        path: '/about',
        element: addPageLoading(About),
      },
      {
        path: '*',
        element: addPageLoading(NoMatch),
      },
    ],
  },
];

const AppRouters = () => useRoutes(routeObjects);

export default AppRouters;
