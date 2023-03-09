import { Theme } from '@mui/material';

export function Paper(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          width: '70%',

          [theme.breakpoints.down('md')]: {
            width: '90%',
          },
        },
      },
    },
  };
}
