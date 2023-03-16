import { Theme } from '@mui/material';
export function TextField(theme: Theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: '18px',
          fontFamily: 'poppins',
          // borderBottom: 'solid 2px',
          width: '80%',
          backgroundColor: 'white',
        },
      },
    },
  };
}
