import { Button, Typography } from '@mui/material';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { switchLanguage } from '../../../utils/helpers/i18n.changeLanguage';

export function SignIn() {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Button onClick={() => switchLanguage('en')}>English</Button>
      <Button onClick={() => switchLanguage('en')}>Français</Button>

      <Typography variant="h1">{t('signin')}</Typography>
      <Typography variant="h1">{t('hello')}</Typography>
    </Fragment>
  );
}
