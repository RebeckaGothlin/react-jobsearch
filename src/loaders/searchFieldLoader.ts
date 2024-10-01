import { customSearchFetch } from '../api';
import { SearchFilterResponse } from '../models/searchType';

const url = `/municipality`;

export const loader = async () => {
  try {
    const response = await customSearchFetch.get(url);

    // console.log('response:', response.data);

    const municipalities: SearchFilterResponse[] =
      response.data as SearchFilterResponse[];

    const searchFilter = municipalities.map((item) => {
      const {
        'taxonomy/lau-2-code-2015': id,
        'taxonomy/definition': municipality,
      } = item;

      return {
        id,
        municipality,
      };
    });
    console.log('🚀 ~ searchFilter ~ searchFilter:', searchFilter);

    return searchFilter.length > 0 ? searchFilter : null;
  } catch (error) {
    console.error('Error fetching ads data:', error);
    throw new Response('Failed to load ads', { status: 500 });
  }
};
