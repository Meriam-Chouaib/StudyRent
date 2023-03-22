import { useState } from 'react';
import { useLoginMutation } from '../../../redux/api/auth/auth.api';
// form
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// @mui
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CustomButton } from '../../../components';
// components
import { FormProvider, TextField } from '../../../components/hookform';
import { PATHS } from '../../../config/paths';
import { LoginModel } from '../../../models/Login.model';
import { LoginSchema } from './ValidationSchema';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { fields, defaultValues } = LoginModel;
  const [login] = useLoginMutation();

  const { t } = useTranslation();

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
      const result = await login(data).unwrap();
      console.log('result' + result);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      reset();
      setError('email', { ...error, message: error.message });
      setError('password', { ...error, message: error.message });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={3}
        sx={{ width: '100%' }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <TextField name={fields.email.name} type={'text'} label={t(fields.email.label)} />
        <TextField
          type={!showPassword ? 'password' : 'text'}
          name={fields.password.name}
          label={t(fields.password.label)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <CustomButton isLoading={isSubmitting}>{t('signin.connect_btn')}</CustomButton>

        <Link to={`/${PATHS.AUTH.ROOT}/${PATHS.AUTH.SIGNUP}`}>
          <Typography variant="h6">{t('signin.create_account_btn')}</Typography>
        </Link>
      </Stack>
    </FormProvider>
  );
}
