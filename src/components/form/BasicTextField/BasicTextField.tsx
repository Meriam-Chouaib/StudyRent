import { TextField } from '@mui/material';
import { BasicTextFieldProps } from './BasicTextField.types';
import { BoxCenterStyled } from '../../../components';
import { Controller, useFormContext } from 'react-hook-form';

export const BasicTextField = ({ placeholder, label, name }: BasicTextFieldProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return <TextField name={name} placeholder={placeholder} label={label} variant="standard" />;
};
