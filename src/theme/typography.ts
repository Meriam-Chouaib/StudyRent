import { TypographyOptions } from '@mui/material/styles/createTypography';
import { FONT } from '../config/font';
export const typography: TypographyOptions = {
  h1: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#221E58',
    fontFamily: FONT,
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
    color: '#221E58',
    fontFamily: FONT,
  },
};
