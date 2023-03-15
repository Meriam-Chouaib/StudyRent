// mui
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BoxCenterStyled } from '../../../components';
import { ImageStartedHome } from '../../../components/image/ImageStartedHome.styles';
import imageGetStarted from '../../../assets/images/getStarted_img.svg';
import Flesh from '../../../assets/images/flesh-home-page.svg';

import { ButtonHome } from '../../../components/form/Button/ButtonHome.styles';
import { CustomImageFlesh } from '../../../components/image/CustomImageFlesh.styles';
import { BoxCenterGetStarted } from '../../../components/BoxCenter/BoxCenterGetStarted.styles';
export const GetStarted = () => {
  const { t } = useTranslation();
  return (
    <>
      <BoxCenterGetStarted>
        <BoxCenterStyled sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h4">{t('home.started_text_1')}</Typography>
          <Typography variant="h4">{t('home.started_text_2')}</Typography>
          <ButtonHome>{t('home.started_btn')}</ButtonHome>
        </BoxCenterStyled>

        <Box>
          <ImageStartedHome src={imageGetStarted} />
        </Box>
        <CustomImageFlesh src={Flesh} alt={t('home') as string} />
      </BoxCenterGetStarted>
    </>
  );
};
