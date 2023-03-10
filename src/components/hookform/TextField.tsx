// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { StandardTextFieldProps, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
// ----------------------------------------------------------------------

interface TextFieldProps extends StandardTextFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'password';
}

export default function RHFTextField({ name, label, ...other }: TextFieldProps) {
  const { control } = useFormContext();
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          variant="standard"
          label={label}
          type={other.type}
          {...field}
          fullWidth
          error={!!error}
          helperText={error && error.message && t(error?.message)}
          {...other}
        />
      )}
    />
  );
}
