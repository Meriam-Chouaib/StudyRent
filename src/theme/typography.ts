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
  h6: {
    fontSize: '12px',
    textAlign: 'center',
    // color:'palette.primary.main',
    fontWeight: 'bold',
    color: COLORS.PRIMARY.DARK,
    fontFamily: FONT,
  },
  h3: {
    fontSize: '18px',
    fontWeight: '600',
    color: COLORS.PRIMARY.DARK,
    fontFamily: FONT,
  },
};
