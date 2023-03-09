import { Theme } from '@mui/material';
export function TextField(theme: Theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.light,
          fontSize: '18px',
          fontFamily: 'poppins',
          borderBottom: 'solid 2px #434062',
          width: '80%',
        },
      },
    },
  };
}
