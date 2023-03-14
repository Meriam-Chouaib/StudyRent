import { useState } from 'react';
import { useRegisterMutation } from '../../../redux/api/auth/auth.api';
// form
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// @mui
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CustomButton from '../../../components/form/Button/CustomButton';
// components
import { FormProvider, TextField } from '../../../components/hookform';
import { PATHS } from '../../../config/paths';
import { RegisterModel } from '../../../models/Register.model';
import { RegisterSchema } from './ValidationSchema';
import { IRegisterRequest } from '../../../redux/api/auth/auth.api.types';

// ----------------------------------------------------------------------

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { fields, defaultValues } = RegisterModel;
  const [register] = useRegisterMutation();

  const { t } = useTranslation();

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onRegister = async ({ username, email, password, role, statut }: IRegisterRequest) => {
    const data = { email, username, password, role, statut };
    try {
      console.log(data);
      data.statut = 'OFFLINE';
      data.role = 'STUDENT';
      const result = await register(data)
        .unwrap()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(result);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      reset();
      setError('email', { ...error, message: error.message });
      setError('password', { ...error, message: error.message });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onRegister)}>
      <Stack
        spacing={3}
        sx={{ width: '100%' }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <TextField name={fields.email.name} type={'text'} label={t(fields.email.label)} />
        <TextField name={fields.username.name} type={'text'} label={t(fields.username.label)} />
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
        <TextField
          type={!showConfirmPassword ? 'password' : 'text'}
          name={fields.confirm_password.name}
          label={t(fields.confirm_password.label)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <CustomButton isLoading={isSubmitting}>{t('signup.confirm_btn')}</CustomButton>
        <Link to={PATHS.AUTH.SINGNIN}>
          <Typography variant="h6">{t('signup.back_btn')}</Typography>
        </Link>
      </Stack>
    </FormProvider>
  );
}
