import { ReactQueryProvider } from '@/provider';
import { AuthProvider } from '@/context/auth';
import { JSX } from 'react';
import { CreateWorkSpaceContextProvider } from './workspace';

export type Provider = ({ children }: { children: React.ReactNode }) => JSX.Element;
export const CombineContext = (...providers: Provider[]) => {
  return ({ children }: { children: React.ReactNode }) => {
    return providers.reduceRight(
      (acc, Provider: (Provider: { children: React.ReactNode }) => JSX.Element) => {
        return <Provider>{acc}</Provider>;
      },
      <>{children}</>,
    );
  };
};

export const CombineContextProvider = CombineContext(ReactQueryProvider, AuthProvider, CreateWorkSpaceContextProvider);
