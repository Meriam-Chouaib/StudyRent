import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { validationSchema } from './ValidationSchema';
import { HookForm } from '../../../components/hookform/HookForm';
import { FieldValues, SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BasicTextField, BoxCenterStyled } from '../../../components';
import CustomButton from '../../../components/form/Button/CustomButton';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../config/paths';
import { ILoginRequest } from '../../../redux/types/User';

export function SignIn() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, getValues } = useForm();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit } = useForm();
  //  const onSubmit = data => console.log(data);

  const onSubmit = () => {
    const values = getValues();
    console.log(values);
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);
  return (
    <>
      <Typography variant="h1">{t('signin.title')}</Typography>

      <HookForm {...methods} onSubmit={handleSubmit(onSubmit)}>
        <BasicTextField
          label={t('signin.email_label')}
          placeholder={t('signin.email_label')}
          type={'email'}
          {...register('email')}
          value="jjsjsj"
        />
        <BasicTextField
          label={t('signin.password_label')}
          placeholder={t('signin.password_label')}
          type={'text'}
          {...register('password')}
          value="jjsjsj"
        />
        <CustomButton isLoading={false}>{t('signin.connect_btn')}</CustomButton>
        <BoxCenterStyled>
          <Link to={PATHS.AUTH.SIGNUP}>
            <Typography variant="h6">{t('signin.create_account_btn')}</Typography>
          </Link>
        </BoxCenterStyled>
      </HookForm>
    </>
  );
}
