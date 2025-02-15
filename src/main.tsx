import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RootProvider } from '@/provider';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </StrictMode>,
);
