import * as Yup from 'yup';
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Stack, Button } from '@mui/material';
// components
import { FormProvider, TextField } from '../../../components/hookform';
import CustomButton from '../../../components/form/Button/CustomButton';
import { LoginModel } from '../../../models/Login.model';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { LoginSchema } from './ValidationSchema';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { fields, defaultValues } = LoginModel;

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      // TODO - Call mutation to server here instead of console.log
      console.log(data);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      reset();
      setError('email', { ...error, message: error.message });
    }
  };

  const showPass = (showPassword: boolean) => {
    showPassword = !showPassword;
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={3}
        sx={{ width: '100%' }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <TextField name={fields.email.name} label="Email address" />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <TextField name="password" label="Password" type={showPassword ? 'text' : 'password'} />{' '}
          <Button
            sx={{ position: 'absolute', right: '0px' }}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </Button>
        </Box>

        <CustomButton isLoading={isSubmitting}>Login</CustomButton>
      </Stack>
    </FormProvider>
  );
}
