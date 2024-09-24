import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SingleAd, Landing, HomeLayout } from './pages';
import AdsList from './pages/AdsList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        // path: '/ads',
        element: <Landing />,
      },
      {
        path: '/ads',
        element: <AdsList />,
      },
      {
        path: 'ad/:id',
        element: <SingleAd />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
