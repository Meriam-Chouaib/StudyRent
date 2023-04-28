import {
  AppBarStyled,
  BoxDrawer,
  BoxDisplayWeb,
  StyledLink,
  ImgProfile,
  IconUserStatus,
  BoxStyled,
} from './header.styles';
import { headerProps } from './header.types';
import { PATHS } from '../../../config/paths';
import { DrawerPart } from './DrawerMenu/DrawerMenu';
import imgProfile from '../../../assets/images/imgProfile.jpg';

// components
import {
  LogoHeader,
  ToolbarStyled,
  TranslationStyled,
  BoxCenterSpaceBetween,
  BoxCenterStyled,
  LinkItem,
  BoxCenter,
} from '../../../components';

// image
import logo from '../../../assets/images/logo-bleu-roi.svg';
// Mui
import { Box, Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';

// translation
import { useTranslation } from 'react-i18next';
import { clearLocalStorage } from '../../../utils/localstorage/clearLoalStorage';
import { UserLogged } from './UserLoggedIn/UserLogged';
import { useNavigate, Link } from 'react-router-dom';
export const Header = ({ isLogged, username, status }: headerProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const backToHome = () => {
    navigate(PATHS.ROOT);
  };
  return (
    <AppBarStyled position="static">
      <Container>
        <ToolbarStyled>
          <Box>
            <Link to={PATHS.MAIN.HOME}>
              <LogoHeader src={logo} onClick={backToHome} />
            </Link>
          </Box>

          <BoxDisplayWeb>
            <BoxCenterSpaceBetween>
              <BoxCenterStyled sx={{ flexDirection: 'row' }}>
                <LinkItem name={t('header.link_home')} path={PATHS.MAIN.HOME} />
                <LinkItem name={t('header.link_about')} path={PATHS.ABOUT} />
                <LinkItem name={t('header.link_posts')} path={PATHS.POSTS} />
                <LinkItem name={t('header.link_contact')} path={PATHS.CONTACT} />
              </BoxCenterStyled>
            </BoxCenterSpaceBetween>
          </BoxDisplayWeb>
          {isLogged ? (
            <>
              <UserLogged img={imgProfile} username={username} status={status} />
            </>
          ) : (
            <Box>
              <StyledLink to={`${PATHS.AUTH.ROOT}/${PATHS.AUTH.SINGNIN}`}>
                <Typography variant="h3">{t('header.link_signin')}</Typography>
              </StyledLink>
            </Box>
          )}
          <BoxStyled>
            <TranslationStyled />
            <BoxDrawer>
              <DrawerPart />
            </BoxDrawer>
          </BoxStyled>
        </ToolbarStyled>
      </Container>
    </AppBarStyled>
  );
};
