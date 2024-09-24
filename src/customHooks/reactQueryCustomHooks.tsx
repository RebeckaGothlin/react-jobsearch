import { useQuery } from '@tanstack/react-query';
import customFetch from '../api';
import { Ad, AdsResponse } from '../models/types';

// export const useFetchAds = () => {
//   const { isPending, data, isError, error } = useQuery<AdsResponse>({
//     queryKey: ['ads'],
//     queryFn: async () => {
//       const { data } = await customFetch.get<AdsResponse>(`/search?q=`);

//       console.log(data, 'from useFetchAds');

//       return data;
//     },
//   });
//   return { isPending, isError, data, error };
// };

export const useFetchAds = () => {
  const { isPending, data, isError, error } = useQuery<AdsResponse>({
    queryKey: ['ads'],
    queryFn: async () => {
      const { data } = await customFetch.get<AdsResponse>(`/search?q=`);

      console.log(data, 'from useFetchAds');

      return data;
    },
  });
  return { isPending, isError, data, error };
};

export const useFetchSingleAd = (id: string) => {
  const { isPending, data, isError, error } = useQuery<Ad>({
    queryKey: ['ads', id],
    queryFn: async () => {
      const { data } = await customFetch.get<Ad>(`/ad/${id}`);

      return data;
    },
  });
  return { isPending, isError, data, error };
};
