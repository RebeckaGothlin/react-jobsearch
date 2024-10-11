import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SingleAd, Landing, HomeLayout, SandBox, AdsList } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { loader as adsLoader } from './loaders/adsLoader';
import { loader as singleAdLoader } from './loaders/singleAdLoader';
import { SearchProvider } from './context/SearchContext';

export const repo = "/react-jobsearch/";

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
        element: <Landing />,
      },
      {
        path: 'ad/:id',
        element: <SingleAd />,
        loader: singleAdLoader,
      },
      {
        path: '/ads',
        element: <AdsList />,
        loader: adsLoader(queryClient),
      },
    ],
  },
  { basename: repo }
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
