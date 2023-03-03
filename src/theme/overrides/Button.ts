import { Theme } from '@mui/material';
import { FONT } from '../../config/font';

export function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '18px',
          fontFamily: FONT,
          color: theme.palette.primary.main,
        },
      },
    },
  };
}
