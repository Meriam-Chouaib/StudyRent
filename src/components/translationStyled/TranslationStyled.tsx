import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { switchLanguage } from '../../utils/helpers/i18n.changeLanguage';

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
          <MenuItem value={'en'}>En</MenuItem>
          <MenuItem value={'fr'}>Fr</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
