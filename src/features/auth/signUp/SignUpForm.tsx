import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// redux
import { useRegisterMutation } from '../../../redux/api/auth/auth.api';

// hookform
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

// @mui
import { Alert, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CustomButton, BoxCenter } from '../../../components';
// components
import { FormProvider, TextField } from '../../../components/hookform';
import { PATHS } from '../../../config/paths';
import { RegisterModel } from '../../../models/Register.model';
import { RegisterSchema } from './ValidationSchema';
import { IRegisterRequest } from '../../../redux/api/auth/auth.api.types';
import { SelectField } from '../../../components/selectField/SelectField';
import { CONSTANTS } from '../../../config/constants';
import theme from '../../../theme';

// ----------------------------------------------------------------------

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [problem, setProblem] = useState('');

  const { fields, defaultValues } = RegisterModel;
  const [register, { error }] = useRegisterMutation();
  let msg: string;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const Roles: string[] = ['STUDENT', 'OWNER'];

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onRegister = async ({ username, email, password, role, statut }: IRegisterRequest) => {
    const data = { email, username, password, role, statut };
    try {
      await register(data)
        .unwrap()
        .then((res) => {
          if (res.status === CONSTANTS.OK) {
            navigate(PATHS.ROOT);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.data) {
            setProblem(err.data.message);
          }
          if (err.data.data) {
            setProblem(err.data.data[0].message);
          }
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
    <FormProvider methods={methods} onSubmit={handleSubmit(onRegister)}>
      <Stack
        spacing={3}
        sx={{ width: '100%' }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        {problem && <Alert severity="error">{problem}</Alert>}

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
        <BoxCenter sx={{ width: '80%' }}>
          <SelectField
            variant="standard"
            id={'role'}
            label={'Role'}
            placeholder={'Role'}
            name={fields.role.name}
            options={Roles}
          />
        </BoxCenter>
        <CustomButton
          isLoading={isSubmitting}
          colorBack={theme.palette.primary.dark}
          colorText={theme.palette.warning.dark}
        >
          {t('signup.confirm_btn')}
        </CustomButton>

        <Link to={`/${PATHS.AUTH.ROOT}/${PATHS.AUTH.SINGNIN}`}>
          <Typography variant="h6">{t('signup.back_btn')}</Typography>
        </Link>
      </Stack>
    </FormProvider>
  );
}
