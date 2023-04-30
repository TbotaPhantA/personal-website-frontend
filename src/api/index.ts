import axios, { CreateAxiosDefaults } from 'axios';
import config from '@/api/config';

const settings: CreateAxiosDefaults = <CreateAxiosDefaults>{
  baseURL: config.BASE_URL,
  timeout: config.BASE_TIMEOUT,
}

const api = axios.create(settings);

export default api;
