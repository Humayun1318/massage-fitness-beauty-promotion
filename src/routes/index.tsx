import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import { routePaths } from './routePaths';

const QualificationsPage = lazy(() => import('@/pages/Qualifications/Qualifications'));
const ReferencesPage = lazy(() => import('@/pages/References/References'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFound'));

export const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: routePaths.qualifications, element: <QualificationsPage /> },
      { path: routePaths.references, element: <ReferencesPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
