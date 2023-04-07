/* eslint-disable @typescript-eslint/no-explicit-any */
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Input, InputProps, StandardTextFieldProps, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import theme from '../../theme';
// ----------------------------------------------------------------------

interface InputStandardProps extends InputProps {
  name: string;
  label: string;
  type?: 'text' | 'password' | 'file' | 'number';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: any;
}

export default function InputStandard({ name, type, ...other }: InputStandardProps) {
  const { control, register } = useFormContext();
  const { t } = useTranslation();
  const handleSelectImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log(event.target.files);
    }
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          type={type}
          {...field}
          fullWidth
          onChange={handleSelectImages}
          error={!!error}
          //  helperText={error && error.message && t(error?.message)}
          {...other}
          // {...register(name)}
        />
      )}
    />
  );
}
