import { Typography } from '@mui/material';

// features
import { GridStyledCenter } from '../../features';
import { SignupForm } from '../../features';
// comments
import { CardStyled } from '../../components';
import { useTranslation } from 'react-i18next';
export function SignupPage() {
  const { t } = useTranslation();
  return (
    <>
      <GridStyledCenter>
        <CardStyled>
          <Typography variant={'h1'}>{t('signup.title')}</Typography>

          <SignupForm />
        </CardStyled>
      </GridStyledCenter>
    </>
  );
}
