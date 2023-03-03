import { createTheme } from '@mui/material/styles';
import { componentsOverrides } from './overrides/override';
import { palette } from './palette';
import { typography } from './typography';

const theme = createTheme({
  palette,
  typography,
});

theme.components = componentsOverrides(theme);

export default theme;
