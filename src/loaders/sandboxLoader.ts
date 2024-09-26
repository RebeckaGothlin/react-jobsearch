import { customFetch } from '../api';
import { Ad, AdsResponse } from '../models/types';

const url = '/search?q=';

export const loader = async (): Promise<Ad[]> => {
  const response = await customFetch(url);
  const adsResponse: AdsResponse = response.data as AdsResponse;
  return adsResponse.hits;
};
