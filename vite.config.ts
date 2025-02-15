import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@ui', replacement: path.resolve(__dirname, './src/components/ui') },
      { find: '@lib', replacement: path.resolve(__dirname, './src/lib') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@types', replacement: path.resolve(__dirname, './src/types') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/lib/utils') },
    ]
  },
});
