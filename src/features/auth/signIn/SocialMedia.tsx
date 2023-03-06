import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { IconMedia } from '../../../components/IconMedia/IconMedia';
import facebook from '../../../assets/images/facebook-bleu-marine.svg';
import google from '../../../assets/images/google-bleu-marine.svg';
import { BoxCenter } from '../../../components';
import { useTranslation } from 'react-i18next';
import { BoxSocialMedia } from '../../../components';

export function SocialMedia() {
  const { t } = useTranslation();
  return (
    <>
      <BoxSocialMedia>
        <Typography variant={'h6'}>{t('signin.connect_with_txt')}</Typography>
        <IconMedia alt="Facebook" src={facebook} link="www.Facebook.com" />
        <IconMedia alt="Google" src={google} link="www.google.com" />
      </BoxSocialMedia>
    </>
  );
}
