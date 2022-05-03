import { Suspense, lazy, LazyExoticComponent, FC } from 'react';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

import Layout from '../layouts/index';
const Home = lazy(() => import('../pages/home/index'));
const About = lazy(() => import('../pages/about/index'));
const Promotions = lazy(() => import('../pages/promotions/index'));
const NoMatch = lazy(() => import('../pages/noMatch/index'));
const Activity = lazy(() => import('../pages/promotions/Activity/index'));
const ActivityCreate = lazy(() => import('../pages/promotions/Activity/Create'));
const addPageLoading = (PageComponent: LazyExoticComponent<FC>) => (
  <Suspense fallback={<>loading...</>}>
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
        path: '/about',
        element: addPageLoading(About),
      },
      {
        path: '/promotions',
        element: addPageLoading(Promotions),
      },
      {
        path: '/active',
        element: addPageLoading(Activity),
        children: [
          {
            index: true,
            element: addPageLoading(ActivityCreate),
          },
        ],
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
