import { useQuery } from '@tanstack/react-query';
import customFetch from '../api';

type Ad = {
  id: string;
  headline: string;
  brief: string;
  publication_date: string;
};

type AdsResponse = {
  hits: Ad[];
};

export const useFetchAds = () => {
  const { isPending, data, isError, error } = useQuery<AdsResponse>({
    queryKey: ['ads'],
    queryFn: async () => {
      const { data } = await customFetch.get<AdsResponse>('/joblinks');

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

      console.log(data);

      return data;
    },
  });
  return { isPending, isError, data, error };
};
