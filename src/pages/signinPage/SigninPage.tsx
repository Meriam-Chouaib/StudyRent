// features
import { GridStyledCenter } from '../../features';
import { LoginForm } from '../../features';
// components
import { CardStyled } from '../../components';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATHS } from '../../config/paths';

export function SigninPage() {
  const { t } = useTranslation();
  return (
    <>
      <GridStyledCenter>
        <CardStyled>
          <Typography variant={'h1'}>{t('signin.title')}</Typography>
          <LoginForm />

          <Link to={`${PATHS.ROOT}`}>
            <Typography variant="h6">{t('signin.btn_back')}</Typography>
          </Link>
        </CardStyled>
      </GridStyledCenter>
    </>
  );
}
