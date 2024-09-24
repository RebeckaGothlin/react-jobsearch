import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SingleAd, Landing, HomeLayout } from './pages';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        // path: '/ads',
        index: true,
        element: <Landing />,
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
