import { Toaster } from '@/components/ui/toaster';
import { CombineContextProvider } from '@/context/combine-context';
import { BrowserRouter } from 'react-router';

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CombineContextProvider>
      <BrowserRouter>
        {children}
        <Toaster />
      </BrowserRouter>
    </CombineContextProvider>
  );
};
