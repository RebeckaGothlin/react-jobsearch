import axios from 'axios';

const BASE_URL = 'https://jobsearch.api.jobtechdev.se';

const adsFetch = axios.create({
  baseURL: BASE_URL,
});

export { adsFetch };
