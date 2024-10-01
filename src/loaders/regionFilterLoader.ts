import { customSearchFetch } from '../api';
import { RegionFilterResponse } from '../models/searchType';

const url = `/region`;

export const loader = async () => {
  try {
    const response = await customSearchFetch.get(url);

    const regions: RegionFilterResponse[] =
      response.data as RegionFilterResponse[];

    const searchFilter = regions
      .filter((item) => item['taxonomy/national-nuts-level-3-code-2019'])
      .map((item) => {
        const {
          'taxonomy/national-nuts-level-3-code-2019': id,
          'taxonomy/definition': region,
        } = item;

        return {
          id,
          region,
        };
      });

    return searchFilter.length > 0 ? searchFilter : null;
  } catch (error) {
    console.error('Error fetching ads data:', error);
    throw new Response('Failed to load ads', { status: 500 });
  }
};
