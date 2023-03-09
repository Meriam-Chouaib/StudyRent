import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { validationSchema, FormValues } from './ValidationSchema';
import { HookForm } from '../../../components/hookform/HookForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BasicTextField, BoxCenterStyled } from '../../../components';
import CustomButton from '../../../components/form/Button/CustomButton';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../config/paths';

export function SignIn() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  return (
    <>
      <Typography variant="h1">{t('signin.title')}</Typography>

      <HookForm {...methods}>
        <BasicTextField
          label={t('signin.email_label')}
          placeholder={t('signin.email_label')}
          name={t('signin.email_label')}
        />
        <BasicTextField
          label={t('signin.password_label')}
          placeholder={t('signin.password_label')}
          name={t('signin.password_label')}
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
