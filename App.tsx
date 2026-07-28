import { createBrowserRouter, RouterProvider } from 'react-router';
import LandingPage from './components/LandingPage';
import MenuPage from './app/menu/page';
import CollectionPage from './app/[slug]/page';

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/menu', element: <MenuPage /> },
  { path: '/:slug', element: <CollectionPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
