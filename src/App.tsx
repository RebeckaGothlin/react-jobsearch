import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SingleAd, Landing, HomeLayout, SandBox, Search, Alt } from './pages';
import AdsList from './pages/AdsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { loader as sandBoxLoader } from './loaders/sandboxLoader';
import { loader as singleAdLoader } from './loaders/singleAdLoader';
import { loader as regionFieldLoader } from './loaders/regionFilterLoader';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
        loader: singleAdLoader,
      },
      {
        path: '/sand',
        element: <SandBox />,
        loader: sandBoxLoader(queryClient),
      },
      {
        path: '/search',
        element: <Search />,
        loader: regionFieldLoader,
      },
      {
        path: '/alt',
        element: <Alt />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
