import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { switchLanguage } from '../../utils/helpers/i18n.changeLanguage';
import theme from '../../theme';

export const TranslationStyled = () => {
  return (
    <>
      <FormControl>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(event: SelectChangeEvent) => switchLanguage(event.target.value)}
          sx={{ width: '4.3rem', height: '2rem' }}
          defaultValue={'en'}
        >
          <MenuItem value={'en'}>
            {<span style={{ color: `${theme.palette.primary.dark}` }}>En</span>}
          </MenuItem>
          <MenuItem value={'fr'}>
            {<span style={{ color: `${theme.palette.primary.dark}` }}>Fr</span>}
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
