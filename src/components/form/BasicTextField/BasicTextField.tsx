import { TextField } from '@mui/material';
import { BasicTextFieldProps } from './BasicTextField.types';
import { BoxCenterStyled } from '../../../components';
import { Controller, useFormContext } from 'react-hook-form';

export const BasicTextField = ({ placeholder, type, label, name }: BasicTextFieldProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <BoxCenterStyled marginTop={2} marginBottom={2}>
            <TextField
              variant="standard"
              label={label}
              type={type}
              value={value}
              placeholder={placeholder}
              fullWidth
              required
              {...register(name)}
              onChange={onChange}
            />
            {errors && <span>{errors.root?.message}</span>}
          </BoxCenterStyled>
        </>
      )}
    />
  );
};
