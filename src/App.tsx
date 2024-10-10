import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SingleAd, Landing, HomeLayout, SandBox } from './pages';
import AdsList from './pages/AdsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { loader as sandBoxLoader } from './loaders/sandboxLoader';
import { loader as singleAdLoader } from './loaders/singleAdLoader';
import { SearchProvider } from './context/SearchContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20,
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
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
