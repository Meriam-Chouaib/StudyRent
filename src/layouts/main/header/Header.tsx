import { AppBarStyled, BoxDrawer, BoxDisplayWeb, StyledLink } from './header.styles';
import { headerProps } from './header.types';
import { PATHS } from '../../../config/paths';
import { DrawerPart } from './DrawerMenu';
// components
import {
  LogoHeader,
  ToolbarStyled,
  TranslationStyled,
  BoxCenterSpaceBetween,
  BoxCenterStyled,
  LinkItem,
} from '../../../components';

// image
import logo from '../../../assets/images/logo-bleu-roi.svg';
// Mui
import { Box, Container, CssBaseline } from '@mui/material';
import Typography from '@mui/material/Typography';
// translation
import { useTranslation } from 'react-i18next';

export const Header = ({ isLogged, username }: headerProps) => {
  const { t } = useTranslation();

  return (
    <AppBarStyled position="static">
      <Container>
        <CssBaseline />
        <ToolbarStyled>
          <Box>
            <LogoHeader src={logo} />
          </Box>

          <BoxDisplayWeb>
            <BoxCenterSpaceBetween sx={{ width: '65%' }}>
              <BoxCenterStyled sx={{ flexDirection: 'row' }}>
                <LinkItem name={t('header.link_home')} path={PATHS.MAIN.HOME} />
                <LinkItem name={t('header.link_about')} path={PATHS.ABOUT} />
                <LinkItem name={t('header.link_posts')} path={PATHS.POSTS} />
                <LinkItem name={t('header.link_contact')} path={PATHS.CONTACT} />
              </BoxCenterStyled>
              {isLogged ? (
                <Typography>{username}</Typography>
              ) : (
                <Box>
                  <StyledLink to={`${PATHS.AUTH.ROOT}/${PATHS.AUTH.SINGNIN}`}>
                    <Typography variant="h3">{t('header.link_signin')}</Typography>
                  </StyledLink>
                </Box>
              )}
            </BoxCenterSpaceBetween>
          </BoxDisplayWeb>

          <TranslationStyled />
          <BoxDrawer>
            <DrawerPart />
          </BoxDrawer>
        </ToolbarStyled>
      </Container>
    </AppBarStyled>
  );
};
