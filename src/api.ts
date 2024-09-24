import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://links.api.jobtechdev.se',
});

export default customFetch;
