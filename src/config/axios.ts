import axios from 'axios';

import { envConfig } from './env';

export const axiosInstance = axios.create({
  baseURL: envConfig.VITE_BACKEND_URI,
});
