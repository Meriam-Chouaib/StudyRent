import { Theme } from '@mui/material';

export function Box(theme: Theme) {
  return {
    MuiBox: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
  };
}
