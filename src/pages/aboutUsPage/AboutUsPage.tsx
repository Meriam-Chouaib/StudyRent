import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { BoxStyled, ImgAbout } from './AboutUsPage.style';
import AboutImage from '../../assets/images/about_image.avif';
import MissionImg from '../../assets/images/house.png';
import { useTranslation } from 'react-i18next';
import { BoxCenterSpaceBetween, ButtonWithIcon } from '../../components';
import { PATHS } from '../../config/paths';
import HouseIcon from '@mui/icons-material/House';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TextValidIcon } from '../../components/TextWithIcon/TextWithIcon';

export const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <BoxCenterSpaceBetween paddingTop={3}>
          <BoxStyled>
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
          </BoxStyled>
          <ImgAbout src={AboutImage} style={{ width: '100%' }} />
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
            <ImgAbout src={MissionImg} style={{ width: '20rem', objectFit: 'cover' }} />
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
