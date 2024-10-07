import { adsFetch } from '../apis/api';

const url = '/search?q=';

// export const loader = async (): Promise<Ad[]> => {
//   const response = await customFetch(url);
//   const adsResponse: AdsResponse = response.data as AdsResponse;
//   return adsResponse.hits;
// };

// export const loader = async () => {
//   try {
//     const response = await customFetch.get(url);
//     const { total, hits } = response.data;

//     return {
//       total: total.value,
//       ads: hits,
//     };
//   } catch (error) {
//     console.error('Error fetching ads data:', error);
//     throw new Response('Failed to load ads', { status: 500 });
//   }
// };

const adsQuery = (queryParams) => {
  const { search, headline } = queryParams;

  return {
    queryKey: ['ads', search, headline],
    queryFn: () => adsFetch.get(url, { params: { q: search, headline } }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await queryClient.ensureQueryData(adsQuery(params));
      const { total, hits } = response.data;

      return {
        total: total.value,
        ads: hits,
      };
    } catch (error) {
      console.error('Error fetching ads data:', error);
      throw new Response('Failed to load ads', { status: 500 });
    }
  };
