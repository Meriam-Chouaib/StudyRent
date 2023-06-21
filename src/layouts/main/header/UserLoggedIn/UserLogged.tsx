import { Avatar } from '@mui/material';
import { BoxCenter } from '../../../../components';
import { clearLocalStorage } from '../../../../utils';
import { IconUserStatus } from '../header.styles';
import { UserLoggedProps } from './UserLogged.types';
import { Txt_link } from '../../../dashboard/sidebar/SideBar.styles';
import { HeaderDashboard } from '../../../dashboard/header/Header.styles';
import { SelectIcon } from './SelectIcon';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../config/paths';
import theme from '../../../../theme';

export const UserLogged = ({ username, status }: UserLoggedProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearLocalStorage();
    navigate(`${PATHS.AUTH.ROOT}/${PATHS.AUTH.SINGNIN}`);
  };

  const handleProfile = () => {
    console.log('profile');
  };
  const handleDashboard = () => {
    navigate(PATHS.DASHBOARD.POST.LIST);
  };

  return (
    <HeaderDashboard>
      <BoxCenter sx={{ position: 'relative' }}>
        <Txt_link style={{ marginRight: '1rem' }} sx={{ color: theme.palette.primary.main }}>
          {username}
        </Txt_link>

        <Avatar
          alt={`${username}`}
          src="/static/images/avatar/1.jpg"
          sx={{ width: '33px', height: '33px', bgcolor: theme.palette.secondary.main }}
        />

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
