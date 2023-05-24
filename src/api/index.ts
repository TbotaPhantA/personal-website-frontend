import axios, { CreateAxiosDefaults } from 'axios';
import config from '@/api/config';

const settings: CreateAxiosDefaults = <CreateAxiosDefaults>{
  baseURL: config.BASE_URL,
  timeout: config.BASE_TIMEOUT,
}

const api = axios.create(settings);

api.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
})

export default api;
