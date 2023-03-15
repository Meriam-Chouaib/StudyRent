import { Theme } from '@mui/material';

export function AppBar(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          boxShadow: 'none',
          [theme.breakpoints.down('md')]: {},
        },
      },
    },
  };
}
