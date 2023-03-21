import { Theme } from '@mui/material';
export function TextField(theme: Theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: '18px',
          fontFamily: 'poppins',
          width: '80%',
          backgroundColor: 'white',
          padding: '8 px',
        },
      },
    },
  };
}
