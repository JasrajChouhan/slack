import { ReactQueryProvider, AuthProvider } from '@/provider';
import { JSX } from 'react';

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

export const CombineContextProvider = CombineContext(AuthProvider, ReactQueryProvider);
