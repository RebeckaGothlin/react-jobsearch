import axios from 'axios';

const BASE_URL = 'https://jobsearch.api.jobtechdev.se';

const customFetch = axios.create({
  baseURL: BASE_URL,
});

export { customFetch };
