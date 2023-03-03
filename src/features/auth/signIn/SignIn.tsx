import { TextField, Typography } from '@mui/material';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomButton } from '../CustomButton';
import { CustomStack } from '../CustomStack';

export function SignIn() {
  const { t } = useTranslation();

  return (
    <>
      <Fragment>
        <CustomStack spacing={2}>
          <Typography variant="h1">{t('signin.title')}</Typography>
          <TextField variant="standard" placeholder={t('signin.email_label') as string} />
          <TextField variant="standard" placeholder={t('signin.password_label') as string} />
          <CustomButton>{t('signin.connect_btn')}</CustomButton>
          <CustomButton>{t('signin.create_account_btn')}</CustomButton>
        </CustomStack>
      </Fragment>
    </>
  );
}
