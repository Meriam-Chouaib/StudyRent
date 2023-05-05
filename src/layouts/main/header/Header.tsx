import {
  AppBarStyled,
  BoxDrawer,
  BoxDisplayWeb,
  StyledLink,
  ImgProfile,
  IconUserStatus,
  BoxStyled,
  StackHeader,
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
import { Box, Button, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// translation
import { useTranslation } from 'react-i18next';
import { clearLocalStorage } from '../../../utils/localstorage/clearLoalStorage';
import { UserLogged } from './UserLoggedIn/UserLogged';
import { useNavigate, Link } from 'react-router-dom';
import { ItemsMain } from './DrawerMenu/ItemsDrawer';
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
          <StackHeader
            display={'flex'}
            direction={'row'}
            justifyContent={'flex-end'}
            alignItems={'center'}
            spacing={4}
            width={'100%'}
            paddingRight={'1rem'}
          >
            <Link to={PATHS.MAIN.HOME}>
              <LogoHeader src={logo} onClick={backToHome} />
            </Link>
            <Box sx={{ flex: '1 1 auto' }} />

            <BoxDisplayWeb>
              <BoxCenterSpaceBetween>
                <BoxCenterStyled sx={{ flexDirection: 'row' }}>
                  {Object.values(ItemsMain).map((item, index) => (
                    <LinkItem name={t(item.name)} path={item.path} key={index} />
                  ))}
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
            <BoxStyled spacing={4} direction={'row'}>
              <TranslationStyled />

              <BoxDrawer>
                <DrawerPart Items={ItemsMain} isMain={true} />
              </BoxDrawer>
            </BoxStyled>
          </StackHeader>
        </ToolbarStyled>
      </Container>
    </AppBarStyled>
  );
};
