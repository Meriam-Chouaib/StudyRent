import { TypographyOptions } from '@mui/material/styles/createTypography';
import { COLORS } from '../config/colors';
import { FONT } from '../config/font';
export const typography: TypographyOptions = {
  h1: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    color: COLORS.PRIMARY.DARK,
    fontFamily: FONT,
    marginBottom: '70px',
  },
  h2: {
    fontSize: '20px',
    color: 'blue',
    fontFamily: FONT,
  },
  h3: {
    fontSize: '18px',
    fontWeight: '600',
    color: COLORS.PRIMARY.DARK,
    fontFamily: FONT,
  },
  h4: { fontFamily: FONT, fontSize: '35px', letterSpacing: '2px' },
  h5: {
    fontSize: '14px',
    fontWeight: '700',
    color: COLORS.PRIMARY.DARK,
    paddingRight: '1rem',
  },
  h6: {
    fontSize: '12px',
    textAlign: 'center',

    fontWeight: 'bold',
    color: COLORS.PRIMARY.DARK,
    fontFamily: FONT,
  },
  subtitle1: {
    fontSize: '18px',
    fontWeight: '700',
    textAlign: 'center',
    color: COLORS.PRIMARY.DARK,
  },
};
