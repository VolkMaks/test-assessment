import type { FC, PropsWithChildren } from 'react';
import { CustomThemeProvider } from './CustomThemeProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/utils/queryClient';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>{children}</CustomThemeProvider>
    </QueryClientProvider>
  );
};
