import { Typography } from '@mui/material';

// features
import { GridStyledCenter } from '../../features';
import { SignupForm } from '../../features';
// comments
import { CardStyled } from '../../components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATHS } from '../../config/paths';
export function SignupPage() {
  const { t } = useTranslation();
  return (
    <>
      <GridStyledCenter>
        <CardStyled>
          <Typography variant={'h1'}>{t('signup.title')}</Typography>

          <SignupForm />

          <Link to={`${PATHS.ROOT}`}>
            <Typography variant="h6">{t('signin.btn_back')}</Typography>
          </Link>
        </CardStyled>
      </GridStyledCenter>
    </>
  );
}
