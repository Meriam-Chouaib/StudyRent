/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormHelperText,
  InputLabel,
  InputProps,
  MenuItem,
  Select,
  SelectProps,
  Stack,
} from '@mui/material';

import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import theme from '../../theme';
import { SelectFieldProps } from './SelectField.type';
export const SelectField = (props: SelectFieldProps & SelectProps & InputProps) => {
  const { id, label, name, options } = props;
  const { control } = useFormContext();
  const { t } = useTranslation();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <Stack>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor={id} color={'primary'}>
                {
                  <span style={{ color: `${theme.palette.primary.dark}`, fontWeight: 600 }}>
                    {label}
                  </span>
                }
              </InputLabel>
              <Select {...field} id={id} displayEmpty error={!!error}>
                {options.map((option: any) => (
                  <MenuItem key={option} value={option} color={'primary'}>
                    {<span style={{ color: `${theme.palette.primary.dark}` }}>{option}</span>}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {error && (
              <FormHelperText sx={{ color: 'red' }}>{t(error?.message as string)}</FormHelperText>
            )}
            {/* {error && <FormHelperText>{error?.message}</FormHelperText>} */}
          </Stack>
        );
      }}
    />
  );
};
