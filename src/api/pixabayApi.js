import axios from 'axios';
import { normalizePixabayResponse } from '../helpers/normalizePixabayRespons';

const API_KEY = '2573416-853329f61ff5a3b6beba25569';

const pixabayApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

pixabayApi.interceptors.response.use(normalizePixabayResponse);

export const getImages = (query, page) => {
  return pixabayApi.get('/', {
    params: {
      q: query,
      page: page,
      key: API_KEY,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
};
