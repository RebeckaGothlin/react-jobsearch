import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SingleAd, Landing, HomeLayout, SandBox } from './pages';
import AdsList from './pages/AdsList';
import AdsGrid from './pages/AdsGrid';

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
      {
        path: '/sand',
        element: <SandBox />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
