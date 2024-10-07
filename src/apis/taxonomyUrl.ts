import axios from 'axios';

const TAXONOMY_URL =
  'https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts';

const taxonomyFetch = axios.create({
  baseURL: TAXONOMY_URL,
});

export { taxonomyFetch };
