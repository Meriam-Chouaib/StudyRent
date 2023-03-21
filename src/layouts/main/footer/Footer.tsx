import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BoxCenterSpaceBetween, BoxCenterStyled, CustomImageBottom } from '../../../components';
import { LogoFooter } from '../../../components/logo/logoFooter/LogoFooter';
import { PATHS } from '../../../config/paths';
import icon_fb from '../../../assets/images/facebook-bleu-clair.svg';
import icon_instagram from '../../../assets/images/instagram-bleu-clair.svg';
import icon_twitter from '../../../assets/images/twitter-bleu-clair.svg';
import icon_google from '../../../assets/images/google-bleu-clair.svg';
import decoFooter from '../../../assets/images/footer_deco_back.svg';
import theme from '../../../theme';
import { ImgMedia, StyledLinkFooter } from './footer.styles';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box sx={{ backgroundColor: `${theme.palette.primary.main}` }}>
      <Container>
        <BoxCenterStyled>
          <LogoFooter />
          <BoxCenterSpaceBetween>
            <Box sx={{ width: '34%' }}>
              <Typography variant="subtitle2">{t('footer.title_histoy')}</Typography>
              <Typography variant="body1">{t('footer.txt_history')}</Typography>
            </Box>
            <Box>
              <BoxCenterStyled sx={{ gap: '1rem' }}>
                <StyledLinkFooter to={PATHS.MAIN.HOME}>{t('header.link_home')}</StyledLinkFooter>
                <StyledLinkFooter to={PATHS.ABOUT}>{t('header.link_about')}</StyledLinkFooter>
                <StyledLinkFooter to={PATHS.POSTS}>{t('header.link_posts')}</StyledLinkFooter>
                <StyledLinkFooter to={PATHS.CONTACT}>{t('header.link_contact')}</StyledLinkFooter>
              </BoxCenterStyled>
            </Box>
          </BoxCenterSpaceBetween>
          <Box>
            <StyledLinkFooter to={PATHS.SOCIAL_MEDIA.FB}>
              <ImgMedia src={icon_fb} />
            </StyledLinkFooter>
            <StyledLinkFooter to={PATHS.SOCIAL_MEDIA.INSTAGRAM}>
              <ImgMedia src={icon_instagram} />
            </StyledLinkFooter>
            <StyledLinkFooter to={PATHS.SOCIAL_MEDIA.TWITTER}>
              <ImgMedia src={icon_twitter} />
            </StyledLinkFooter>
            <StyledLinkFooter to={PATHS.SOCIAL_MEDIA.GOOGLE}>
              <ImgMedia src={icon_google} />
            </StyledLinkFooter>
          </Box>
        </BoxCenterStyled>
      </Container>
      <CustomImageBottom src={decoFooter} />
    </Box>
  );
}
