import { TextField } from '@mui/material';
import { BasicTextFieldProps } from './BasicTextField.types';
import { BoxCenterStyled } from '../../../components';

export const BasicTextField = ({ placeholder, type, label }: BasicTextFieldProps) => {
  return (
    <>
      <BoxCenterStyled marginTop={2} marginBottom={2}>
        <TextField
          variant="standard"
          label={label}
          type={type}
          placeholder={placeholder}
          fullWidth
          required
        />
      </BoxCenterStyled>
    </>
  );
};
