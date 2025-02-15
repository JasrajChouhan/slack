import { BrowserRouter } from 'react-router';
import { ReactQueryProvider } from './react-query';

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ReactQueryProvider>
  );
};
