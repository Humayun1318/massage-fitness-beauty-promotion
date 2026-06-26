import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import { routePaths } from './routePaths';
import SeatedMassagePage from '@/pages/SeatedMassage/SeatedMassage';
import PersonalTrainingPage from '@/pages/PersonalTraining/PersonalTraining';
import BeautyPackagesPage from '@/pages/BeautyPackages/BeautyPackages';
import ContactPage from '@/pages/Contact/Contact';

const QualificationsPage = lazy(() => import('@/pages/Qualifications/Qualifications'));
const ReferencesPage = lazy(() => import('@/pages/References/References'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFound'));
const ServicesPage = lazy(() => import('@/pages/Services/Services'));

export const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: routePaths.services, element: <ServicesPage /> },
      { path: routePaths.seatedMassage, element: <SeatedMassagePage /> },
      { path: routePaths.personalTraining, element: <PersonalTrainingPage /> },
      { path: routePaths.beautyPackages, element: <BeautyPackagesPage /> },

      { path: routePaths.qualifications, element: <QualificationsPage /> },
      { path: routePaths.references, element: <ReferencesPage /> },
      { path: routePaths.contact, element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
