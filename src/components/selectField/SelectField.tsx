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
import { SelectFieldProps } from './SelectField.type';
export const SelectField = (props: SelectFieldProps & SelectProps & InputProps) => {
  const { id, label, name, options } = props;
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Stack>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <Select {...field} id={id} displayEmpty error={!!error}>
              <MenuItem disabled value="">
                {label}
              </MenuItem>
              {options.map((option: any) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </Stack>
      )}
    />
  );
};
