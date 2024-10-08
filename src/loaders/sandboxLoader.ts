import { customFetch } from '../api';

const url = '/search?q=';

// export const loader = async (): Promise<Ad[]> => {
//   const response = await customFetch(url);
//   const adsResponse: AdsResponse = response.data as AdsResponse;
//   return adsResponse.hits;
// };

export const loader = async () => {
  try {
    const response = await customFetch.get(url);
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

