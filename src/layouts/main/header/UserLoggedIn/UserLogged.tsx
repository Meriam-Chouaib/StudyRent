import { Avatar, Box, Button, Typography } from '@mui/material';
import { BoxCenter } from '../../../../components';
import { clearLocalStorage } from '../../../../utils';
import { IconUserStatus, ImgProfile } from '../header.styles';
import { UserLoggedProps } from './UserLogged.types';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Txt_link } from '../../../dashboard/sidebar/SideBar.styles';
import { HeaderDashboard } from '../../../dashboard/header/Header.styles';
import { SelectIcon } from './SelectIcon';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../config/paths';
import { COLORS } from '../../../../config/colors';
import theme from '../../../../theme';
import { useLogoutMutation } from '../../../../redux/api/auth/auth.api';

export const UserLogged = ({ username, img, status }: UserLoggedProps) => {
  const navigate = useNavigate();
  const [logout, { error }] = useLogoutMutation();

  const handleLogout = () => {
    clearLocalStorage();
    logout();
    navigate(`${PATHS.AUTH.ROOT}/${PATHS.AUTH.SINGNIN}`);
  };

  const handleProfile = () => {
    console.log('profiiiile');
  };
  const handleDashboard = () => {
    navigate(PATHS.DASHBOARD.POST.LIST);
    console.log('Dashboard');
  };
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return (
    <HeaderDashboard>
      <BoxCenter sx={{ position: 'relative' }}>
        <Txt_link style={{ marginRight: '1rem' }} sx={{ color: theme.palette.primary.main }}>
          {username}
        </Txt_link>
        {/* <Avatar {...stringAvatar(`eeeee`)} /> */}
        <Avatar
          alt={`${username}`}
          src="/static/images/avatar/1.jpg"
          sx={{ width: '33px', height: '33px', bgcolor: theme.palette.secondary.main }}
        />

        {/* <ImgProfile width={33} src={img} alt={'ProfileImg'} /> */}
        {status == 'ONLINE' ? (
          <IconUserStatus sx={{ backgroundColor: 'red' }}></IconUserStatus>
        ) : (
          <IconUserStatus sx={{ backgroundColor: 'green' }}></IconUserStatus>
        )}
      </BoxCenter>

      <SelectIcon
        onLogout={handleLogout}
        onProfile={handleProfile}
        handleDashboard={handleDashboard}
      />
    </HeaderDashboard>
  );
};
