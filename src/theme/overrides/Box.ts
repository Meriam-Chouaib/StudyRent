import { Theme } from '@mui/material';

export function Box(theme: Theme) {
  return {
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main,
          width: '100%',
        },
      },
    },
  };
}
