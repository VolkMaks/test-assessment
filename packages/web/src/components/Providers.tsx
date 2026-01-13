import type { FC, PropsWithChildren } from "react";
import { queryClient } from "../utils/queryClient";
import { CustomThemeProvider } from "./CustomThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>{children}</CustomThemeProvider>
    </QueryClientProvider>
  );
};
