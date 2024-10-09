import { useQuery } from '@tanstack/react-query';
import { customFetch } from '../api';
import { Ad, AdsResponse } from '../models/types';

export const useFetchSingleAd = (id: string) => {
  const { isPending, data, isError, error } = useQuery<Ad>({
    queryKey: ['ads', id],
    queryFn: async () => {
      const { data } = await customFetch<Ad>(`/ad/${id}`);

      return data;
    },
  });
  return { isPending, isError, data, error };
};

export const useFetchAds = (
  currentPage: number,
  searchTerm: string,
  adsPerPage: number
) => {
  const { isLoading, data, error } = useQuery<AdsResponse>({
    queryKey: ['ads', currentPage, searchTerm],
    queryFn: async () => {
      const offset = (currentPage - 1) * adsPerPage;
      const { data } = await customFetch.get(
        `/search?q=${searchTerm}&offset=${offset}&limit=${adsPerPage}`
      );

      console.log('Fetched data:', data);
      return data;
    },
    enabled: true,
  });

  return { isLoading, data, error };
};
