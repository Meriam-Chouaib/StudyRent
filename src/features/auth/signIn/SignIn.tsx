import { Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BasicTextField, BoxCenter, CustomButton } from '../../../components/';

export function SignIn() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h1">{t('signin.title')}</Typography>
      <form>
        <BasicTextField
          id="password"
          type="text"
          placeholder={t('signin.password_label') as string}
        />

        <BasicTextField id="email" type="text" placeholder={t('signin.email_label') as string} />
        <BoxCenter sx={{ gap: 2 }}>
          <Link href="www.google.com" sx={{ fontWeight: '600', fontSize: '11px' }}>
            {t('signin.forgot_password_label')}
          </Link>

          <CustomButton>{t('signin.connect_btn')}</CustomButton>
          <CustomButton>{t('signin.create_account_btn')}</CustomButton>
        </BoxCenter>
      </form>
    </>
  );
}
