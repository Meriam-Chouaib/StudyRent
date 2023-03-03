import { PaletteOptions } from '@mui/material/styles';
import { COLORS } from '../config/colors';
export const palette: PaletteOptions = {
  primary: {
    light: COLORS.PRIMARY.LIGHT,
    main: COLORS.PRIMARY.MAIN,
    dark: COLORS.PRIMARY.DARK,
  },
  secondary: {
    light: COLORS.SECONDARY.LIGHT,
    main: COLORS.SECONDARY.MAIN,
    dark: COLORS.SECONDARY.DARK,
  },
  error: {
    light: COLORS.ERROR.LIGHT,
    main: COLORS.ERROR.MAIN,
    dark: COLORS.ERROR.DARK,
  },
  success: {
    light: COLORS.SUCCESS.LIGHT,
    main: COLORS.SUCCESS.MAIN,
    dark: COLORS.SUCCESS.DARK,
  },
  warning: {
    light: COLORS.WARNING.LIGHT,
    main: COLORS.WARNING.MAIN,
    dark: COLORS.WARNING.DARK,
  },
  grey: {
    100: COLORS.GREY[100],
    200: COLORS.GREY[200],
    300: COLORS.GREY[300],
    400: COLORS.GREY[400],
    500: COLORS.GREY[500],
    600: COLORS.GREY[600],
    700: COLORS.GREY[700],
    800: COLORS.GREY[800],
    900: COLORS.GREY[900],
  },
};
