import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: 'Outfit',
    h4: {
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: '0.4px',
    },
    body2: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '22px',
      letterSpacing: '0.4px',
      color: '#212121',
    },
    body3: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.4px',
      color: '#212121',
    },
    body4: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.2px',
      color: '#212121',
    },
    h6: {
      fontWeight: 600,
      fontSize: '22px',
      lineHeight: '28px',
      letterSpacing: '0.2px',
      color: '#212121',
    },
  },
});

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
