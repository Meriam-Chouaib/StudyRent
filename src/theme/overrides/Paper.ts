import { Theme } from '@mui/material';

export function Paper(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
  };
}
