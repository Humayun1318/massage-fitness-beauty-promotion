import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import { routePaths } from './routePaths';

const QualificationsPage = lazy(() => import('@/pages/Qualifications/Qualifications'));
const ReferencesPage = lazy(() => import('@/pages/References/References'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFound'));
const ServicesPage = lazy(() => import('@/pages/Services/Services'));
const BeautyPackagesPage = lazy(() => import('@/pages/BeautyPackages/BeautyPackages'));

const SeatedMassagePage = lazy(() => import('@/pages/SeatedMassage/SeatedMassage'));
const PersonalTrainingPage = lazy(() => import('@/pages/PersonalTraining/PersonalTraining'));
const ContactPage = lazy(() => import('@/pages/Contact/Contact'));

// export const router = createBrowserRouter([
//   {
//     path: routePaths.home,
//     element: <MainLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: routePaths.services, element: <ServicesPage /> },
//       { path: routePaths.seatedMassage, element: <SeatedMassagePage /> },
//       { path: routePaths.personalTraining, element: <PersonalTrainingPage /> },
//       { path: routePaths.beautyPackages, element: <BeautyPackagesPage /> },

//       { path: routePaths.qualifications, element: <QualificationsPage /> },
//       { path: routePaths.references, element: <ReferencesPage /> },
//       { path: routePaths.contact, element: <ContactPage /> },
//       { path: '*', element: <NotFoundPage /> },
//     ],
//   },
// ]);


export const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { title: 'Home' },
      },
      {
        path: routePaths.services,
        element: <ServicesPage />,
        handle: { title: 'Services' },
      },
      {
        path: routePaths.seatedMassage,
        element: <SeatedMassagePage />,
        handle: { title: 'Seated Massage' },
      },
      {
        path: routePaths.personalTraining,
        element: <PersonalTrainingPage />,
        handle: { title: 'Personal Training' },
      },
      {
        path: routePaths.beautyPackages,
        element: <BeautyPackagesPage />,
        handle: { title: 'Beauty Packages' },
      },
      {
        path: routePaths.qualifications,
        element: <QualificationsPage />,
        handle: { title: 'Qualifications' },
      },
      {
        path: routePaths.references,
        element: <ReferencesPage />,
        handle: { title: 'References' },
      },
      {
        path: routePaths.contact,
        element: <ContactPage />,
        handle: { title: 'Contact' },
      },
      {
        path: '*',
        element: <NotFoundPage />,
        handle: { title: '404 Not Found' },
      },
    ],
  },
]);