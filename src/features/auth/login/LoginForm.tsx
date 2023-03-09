import * as Yup from 'yup';
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Typography } from '@mui/material';
// components
import { FormProvider, TextField } from '../../../components/hookform';
import CustomButton from '../../../components/form/Button/CustomButton';
import { ButtonShowPassword } from '../../../components/form/Button/ButtonShowPassword/ButtonShowPassword.styles';
import { LoginModel } from '../../../models/Login.model';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { LoginSchema } from './ValidationSchema';
import { BoxCenterStyled } from '../../../components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../config/paths';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { fields, defaultValues } = LoginModel;
  const { t } = useTranslation();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const show = () => {
    setShowPassword(!showPassword);
  };
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
        <TextField name={fields.email.name} label={fields.email.label} />
        <BoxCenterStyled sx={{ position: 'relative', width: '100%', padding: '0px' }}>
          <TextField name="password" label="Password" type={showPassword ? 'text' : 'password'} />{' '}
          <ButtonShowPassword onClick={show}>
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </ButtonShowPassword>
        </BoxCenterStyled>
        <CustomButton isLoading={isSubmitting}>{t('signin.connect_btn')}</CustomButton>
        <Link to={PATHS.AUTH.SIGNUP}>
          <Typography variant="h6">{t('signin.create_account_btn')}</Typography>
        </Link>
      </Stack>
    </FormProvider>
  );
}
