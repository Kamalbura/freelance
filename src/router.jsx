import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/HomePage';
import SimpleServicesPage from './pages/SimpleServicesPage';
import SimpleProjectsPage from './pages/SimpleProjectsPage';
import SimpleAboutPage from './pages/SimpleAboutPage';
import SimpleContactPage from './pages/SimpleContactPage';
import SimpleNotFoundPage from './pages/SimpleNotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <SimpleServicesPage /> },
      { path: 'projects', element: <SimpleProjectsPage /> },
      { path: 'about', element: <SimpleAboutPage /> },
      { path: 'contact', element: <SimpleContactPage /> },
    ],
  },
  { path: '*', element: <SimpleNotFoundPage /> },
]);

export default router;
