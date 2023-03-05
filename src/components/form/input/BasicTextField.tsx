import { Box, TextField } from '@mui/material';
import { BasicTextFieldProps } from './BasicTextField.types';

// eslint-disable-next-line react/prop-types
export const BasicTextField: React.FC<BasicTextFieldProps> = ({ id, placeholder, type, label }) => {
  return (
    <>
      <Box marginTop={2} marginBottom={2}>
        <TextField
          variant="standard"
          id={id}
          label={label}
          type={type}
          placeholder={placeholder}
          fullWidth
          required
        />
      </Box>
    </>
  );
};
