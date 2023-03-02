import { FontFamily } from './../palette';
import { Theme } from '@mui/material';
export function Button(theme: Theme) {
  return {
    MuiButton: {
      root: {
        StylesOverrides: {
          backgroundColor: theme.palette.secondary.main,
          color: '#000000',
          fontSize: '18px',
          fontFamily: 'poppins',
        },
      },
    },
  };
}
