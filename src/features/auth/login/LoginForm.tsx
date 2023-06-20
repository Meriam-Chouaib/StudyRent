import { useState } from 'react';
import { useLoginMutation } from '../../../redux/api/auth/auth.api';
// form
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// @mui
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// components
import { FormProvider, TextField } from '../../../components/hookform';
import { CustomButton, Toast } from '../../../components';
import { PATHS } from '../../../config/paths';
import { LoginModel } from '../../../models/Login.model';
import { LoginSchema } from './ValidationSchema';
import { ILoginRequest } from '../../../redux/api/auth/auth.api.types';
import { CONSTANTS } from '../../../config/constants';
import theme from '../../../theme';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [problem, setProblem] = useState('');
  const { fields, defaultValues } = LoginModel;
  const [login, { error }] = useLoginMutation();

  const { t } = useTranslation();
  const navigate = useNavigate();
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

  const onSubmit = async ({ email, password }: ILoginRequest) => {
    const data = { email, password };

    try {
      await login(data)
        .unwrap()
        .then((res) => {
          console.log(res);

          if (res.status === CONSTANTS.OK) {
            navigate(PATHS.ROOT);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err) setProblem(err.data.message);
        });

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
        {error && problem && <Toast type={'error'} text={t(`${problem}`)} />}

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

        <CustomButton
          isLoading={isSubmitting}
          colorBack={theme.palette.primary.dark}
          colorText={theme.palette.warning.dark}
        >
          {t('signin.connect_btn')}
        </CustomButton>

        <Link to={`/${PATHS.AUTH.ROOT}/${PATHS.AUTH.SIGNUP}`}>
          <Typography variant="h6">{t('signin.create_account_btn')}</Typography>
        </Link>
      </Stack>
    </FormProvider>
  );
}
