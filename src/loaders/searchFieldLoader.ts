import { LoaderFunctionArgs } from 'react-router-dom';
import { customFetch } from '../api';
import { Ad } from '../models/types';

const url = (id: string) => `/search/`;

export const loader = async ({
  params,
}: LoaderFunctionArgs<{ id: string }>): Promise<Ad> => {
  const { id } = params;
  if (!id) throw new Error('Ad ID is missing');

  const response = await customFetch(url(id));
  const ad: Ad = response.data as Ad;
  return ad;
};
