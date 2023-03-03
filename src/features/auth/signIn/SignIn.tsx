import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Fragment } from 'react';
import { Translation, useTranslation } from 'react-i18next';
import { switchLanguage } from '../../../utils/helpers/i18n.changeLanguage';
import { CustomButton } from './CustomButton';

export function SignIn() {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Stack spacing={2}>
        <Button onClick={() => switchLanguage('fr')}>English</Button>
        <Button onClick={() => switchLanguage('en')}>Français</Button>

        <Typography variant="h1">{t('SIGNIN.email_label')}</Typography>
        <Typography variant="h1">{t('SIGNIN.title')}</Typography>

        <CustomButton>{t('SIGNIN.connect_btn')}</CustomButton>
        <CustomButton>{t('SIGNIN.create_account_btn')}</CustomButton>
      </Stack>
    </Fragment>
  );
}
