import { TextField, Alert } from '@mui/material';
import { BasicTextFieldProps } from './BasicTextField.types';

import { useTranslation } from 'react-i18next';

export const BasicTextField = ({ placeholder, label, name, error }: BasicTextFieldProps) => {
  const { t } = useTranslation();

  return (
    <>
      {error && <Alert severity="error"> {t(`${error.message}`)}</Alert>}
      <TextField name={name} placeholder={placeholder} label={label} variant="standard" />;
    </>
  );
};
