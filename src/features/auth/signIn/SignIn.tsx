import { Typography, Link } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BasicTextField, BoxCenter } from '../../../components/';
import CustomButton from '../../../components/form/Button/CustomButton';

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

  return (
    <>
      <Typography variant="h1">{t('signin.title')}</Typography>

      <form>
        <BasicTextField type="text" placeholder={t('signin.password_label') as string} />

        <BasicTextField type="text" placeholder={t('signin.email_label') as string} />
        <BoxCenter sx={{ gap: 2 }}>
          <Link href="www.google.com">
            <Typography variant="h6">{t('signin.forgot_password_label')}</Typography>
          </Link>

          <CustomButton isLoading={isLoading} onClick={() => setIsLoading(true)}>
            {t('signin.connect_btn')}
          </CustomButton>
          {/* <CustomButton isLoading={isLoading} onClick={() => setIsLoading(true)}>
            {t('signin.create_account_btn')}
          </CustomButton> */}
        </BoxCenter>
      </form>
    </>
  );
}
