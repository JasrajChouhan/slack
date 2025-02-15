export const envConfig = {
  VITE_NODE_ENV: import.meta.env.NODE_ENV || 'development',
  VITE_BACKEND_URI: import.meta.env.VITE_BACKEND_URI || 'http://localhost:3000',
};
