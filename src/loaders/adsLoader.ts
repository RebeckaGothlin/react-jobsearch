import { QueryClient } from '@tanstack/react-query';
import { customFetch } from '../api';

const url = '/search';

const adsQuery = (queryParams) => {
  const { search = '', currentPage = 1, adsPerPage = 10 } = queryParams;

  const offset = (currentPage - 1) * adsPerPage;

  return {
    queryKey: ['ads', currentPage, search, adsPerPage],
    queryFn: () =>
      customFetch.get(url, {
        params: {
          q: search,
          offset,
          limit: adsPerPage,
        },
      }),
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    console.log('Query Parameters:', params);

    try {
      const response = await queryClient.ensureQueryData(adsQuery(params));
      const { total, hits } = response.data;

      console.log('Loader response:', response.data);

      return {
        total: total.value,
        ads: hits,
      };
    } catch (error) {
      console.error('Error fetching ads data:', error);
      throw new Response('Failed to load ads', { status: 500 });
    }
  };
