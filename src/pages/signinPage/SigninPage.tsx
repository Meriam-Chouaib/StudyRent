// features
import { GridStyledCenter } from '../../features';
import { LoginForm } from '../../features';
// components
import { CardStyled } from '../../components';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLoginMutation } from '../../redux/api/auth/auth.api';

export function SigninPage() {
  const { t } = useTranslation();
  return (
    <>
      <GridStyledCenter>
        <CardStyled>
          <Typography variant={'h1'}>{t('signin.title')}</Typography>
          <LoginForm />
          {/* <SocialMedia /> */}
        </CardStyled>
      </GridStyledCenter>
    </>
  );
}
