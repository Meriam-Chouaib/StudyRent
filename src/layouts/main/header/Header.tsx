// ________________________________________ React ___________________________________________
import { useNavigate, Link } from 'react-router-dom';

// ________________________________________ styles ___________________________________________
import {
  AppBarStyled,
  BoxDrawer,
  BoxDisplayWeb,
  StyledLink,
  BoxStyled,
  StackHeader,
} from './header.styles';
import { headerProps } from './header.types';
import { PATHS } from '../../../config/paths';

// ________________________________________ components ___________________________________________
import {
  LogoHeader,
  ToolbarStyled,
  TranslationStyled,
  BoxCenterSpaceBetween,
  BoxCenterStyled,
  LinkItem,
} from '../../../components';
import { DrawerPart } from './DrawerMenu/DrawerMenu';
import { ItemsMain } from './DrawerMenu/ItemsDrawer';
import { UserLogged } from './UserLoggedIn/UserLogged';

// ________________________________________ Images ___________________________________________
import logo from '../../../assets/images/logo-bleu-roi.svg';
import imgProfile from '../../../assets/images/imgProfile.jpg';

// ________________________________________ Mui ___________________________________________
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';

// ________________________________________ Translation ___________________________________________
import { useTranslation } from 'react-i18next';

export const Header = ({ isLogged, username, status }: headerProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const backToHome = () => {
    navigate(PATHS.ROOT);
  };
  const activePath = location.pathname;

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
                    <LinkItem
                      isDashboardPath={false}
                      name={t(item.name)}
                      path={item.path}
                      key={index}
                      isActive={activePath.toString() === `/${item.path}`}
                    />
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
                <LinkItem
                  isDashboardPath={false}
                  name={t('header.link_signin')}
                  path={`${PATHS.AUTH.ROOT}/${PATHS.AUTH.SINGNIN}`}
                  isActive={activePath.toString() === `${PATHS.AUTH.ROOT}/${PATHS.AUTH.SINGNIN}`}
                />
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
