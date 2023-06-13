// mui
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BoxCenterStyled } from '../../../components';
import { ImageStartedHome } from '../../../components/image/ImageStartedHome.styles';
import imageGetStarted from '../../../assets/images/getStarted_img.svg';
import Flesh from '../../../assets/images/flesh-home-page.svg';
import { Link } from 'react-router-dom';

import { ButtonHome } from '../../../components/form/Button/ButtonHome.styles';
import { CustomImageFlesh } from '../../../components/image/CustomImageFlesh.styles';
import { BoxCenterGetStarted } from '../../../components/BoxCenter/BoxCenterGetStarted.styles';
import { PATHS } from '../../../config/paths';
import { varFade } from '../../../components/animate/fade';
import { motion } from 'framer-motion';

export const GetStarted = () => {
  const { t } = useTranslation();
  const fadeAnimation = varFade();

  return (
    <>
      <BoxCenterGetStarted>
        <BoxCenterStyled sx={{ width: '100%', textAlign: 'center', position: 'relative' }}>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeAnimation.inLeft}
          >
            <Typography variant="h4">{t('home.started_text_1')}</Typography>
            <Typography variant="h4">{t('home.started_text_2')}</Typography>
            <Link to={`${PATHS.POSTS}`}>
              <ButtonHome>{t('home.started_btn')}</ButtonHome>
            </Link>
          </motion.div>

          <CustomImageFlesh src={Flesh} alt={t('home') as string} />
        </BoxCenterStyled>

        <Box>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeAnimation.inRight}
          >
            <ImageStartedHome src={imageGetStarted} />
          </motion.div>
        </Box>
      </BoxCenterGetStarted>
    </>
  );
};
