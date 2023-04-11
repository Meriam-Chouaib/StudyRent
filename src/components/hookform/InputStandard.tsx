/* eslint-disable @typescript-eslint/no-explicit-any */
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Input, InputProps } from '@mui/material';

// ----------------------------------------------------------------------

interface InputStandardProps extends InputProps {
  name: string;
  label: string;
  type?: 'text' | 'password' | 'file' | 'number';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: any;
  value?: any;
  multiple?: boolean;
}

export default function InputStandard({
  name,
  type,
  onChange,
  multiple,
  ...other
}: InputStandardProps) {
  const { control, register } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...field }, fieldState: { error } }) => (
        <Input
          type={type}
          {...field}
          fullWidth
          value={value?.fileName}
          // onChange={onChange}
          error={!!error}
          //  helperText={error && error.message && t(error?.message)}
          {...other}
          {...register(name)}
          inputProps={{ multiple }}
        />
      )}
    />
  );
}
