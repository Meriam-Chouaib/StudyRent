import { Theme } from '@mui/material';

export function Modal(theme: Theme) {
  return {
    MuiModal: {
      styleOverrides: {
        root: {
          backGroundColor: theme.palette.primary.main,
        },
      },
    },
  };
}
