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
const StepInfo = lazy(() => import('../pages/promotions/Activity/StepInfo'));
const StepSetTime = lazy(() => import('../pages/promotions/Activity/StepSetTime'));
const StepContent = lazy(() => import('../pages/promotions/Activity/StepContent'));
const StepCode = lazy(() => import('../pages/promotions/Activity/StepCode'));
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
          {
            path: 'info',
            element: addPageLoading(StepInfo),
          },
          {
            path: 'setTime',
            element: addPageLoading(StepSetTime),
          },
          {
            path: 'content',
            element: addPageLoading(StepContent),
          },
          {
            path: 'code',
            element: addPageLoading(StepCode),
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
