import axios from 'axios';

const BASE_URL = 'https://jobsearch.api.jobtechdev.se';
const SEARCH_URL =
  'https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts';

const customFetch = axios.create({
  baseURL: BASE_URL,
});

const customSearchFetch = axios.create({
  baseURL: SEARCH_URL,
});

export { customFetch, customSearchFetch };
