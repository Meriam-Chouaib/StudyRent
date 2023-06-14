// ____________________________________________ React ____________________________________________
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ____________________________________________ mui ____________________________________________
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';

// ____________________________________________ components ____________________________________________
import { TextValidIcon } from '../../components/TextWithIcon/TextWithIcon';
import { BoxCenterSpaceBetween, ButtonWithIcon } from '../../components';

// ____________________________________________ Style ____________________________________________
import { BoxStyled, ImgAbout } from './AboutUsPage.style';

// ____________________________________________ Images ____________________________________________
import AboutImage from '../../assets/images/about_image.avif';
import MissionImg from '../../assets/images/house.png';

// ____________________________________________ Config ____________________________________________
import { PATHS } from '../../config/paths';

// ____________________________________________ Animation ____________________________________________
import { varFade } from '../../components/animate/fade';
import { motion } from 'framer-motion';

export const AboutUsPage = () => {
  const { t } = useTranslation();
  const fadeAnimation = varFade();

  return (
    <>
      <Container>
        <BoxCenterSpaceBetween paddingTop={3}>
          <BoxStyled width={'50%'}>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeAnimation.inLeft}
            >
              <Typography variant="h1" style={{ textAlign: 'center' }}>
                {t('aboutUs.txt_1')}
              </Typography>
              <Link to={`/${PATHS.POSTS}`} style={{ textDecoration: 'none' }}>
                <ButtonWithIcon
                  margBottom="0rem"
                  icon={<HouseIcon />}
                  txt={t('aboutUs.btn_1') as string}
                />
              </Link>
            </motion.div>
          </BoxStyled>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeAnimation.inDown}
          >
            <ImgAbout src={AboutImage} style={{ width: '100%' }} />
          </motion.div>
        </BoxCenterSpaceBetween>
        <Divider>
          <Typography
            variant="h1"
            style={{
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '2rem',
              height: '2rem',
            }}
          >
            {t('aboutUs.txt_2')}
          </Typography>
        </Divider>

        <BoxCenterSpaceBetween paddingY={3}>
          <Box>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeAnimation.inLeft}
            >
              <ImgAbout src={MissionImg} style={{ width: '20rem', objectFit: 'cover' }} />
            </motion.div>
          </Box>

          <Stack sx={{ display: 'flex', flexDirection: 'column' }} spacing={2} direction={'column'}>
            <TextValidIcon text={t('aboutUs.txt_3') as string} />
            <TextValidIcon text={t('aboutUs.txt_4') as string} />
            <TextValidIcon text={t('aboutUs.txt_5') as string} />
            {/* <TextValidIcon text={t('aboutUs.txt_6') as string} /> */}
          </Stack>
        </BoxCenterSpaceBetween>
      </Container>
    </>
  );
};
