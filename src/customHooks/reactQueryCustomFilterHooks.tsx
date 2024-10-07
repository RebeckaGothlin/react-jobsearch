import { taxonomyFetch } from '../apis/taxonomyUrl';
import { useQuery } from '@tanstack/react-query';
import { Region, Municipality } from '../types/filterTypes';

export const useFilterRegionFetch = () => {
  const { isPending, data, error } = useQuery<Region[]>({
    queryKey: ['region'],
    queryFn: async () => {
      const { data } = await taxonomyFetch.get<Region[]>('/region');

      return data
        .filter((item) => item['taxonomy/national-nuts-level-3-code-2019'])
        .map((item) => ({
          ...item,
          id: item['taxonomy/national-nuts-level-3-code-2019'],
        }));
    },
  });

  return { isPending, data, error };
};
export const useFilterAltRegionFetch = () => {
  const { isPending, data, error } = useQuery<Region[]>({
    queryKey: ['region'],
    queryFn: async () => {
      const { data } = await taxonomyFetch.get<Region[]>('/region');

      return data
        .filter(
          (item) =>
            !item['taxonomy/national-nuts-level-3-code-2019'] &&
            !item['taxonomy/nuts-level-3-code-2013']
        )
        .map((item) => ({
          ...item,
          id: item['taxonomy/national-nuts-level-3-code-2019'],
        }));
    },
  });

  return { isPending, data, error };
};

export const useFilterMunicipalityFetch = () => {
  const { isPending, data, error } = useQuery<Municipality[]>({
    queryKey: ['municipality'],
    queryFn: async () => {
      const { data } = await taxonomyFetch.get<Municipality[]>('/municipality');

      return data;
    },
  });
  return { isPending, data, error };
};
