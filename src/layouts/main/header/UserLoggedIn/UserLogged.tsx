import { Box, Button, Typography } from '@mui/material';
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

export const UserLogged = ({ username, img, status }: UserLoggedProps) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    clearLocalStorage();
    window.location.reload();
  };

  const handleProfile = () => {
    console.log('profiiiile');
  };
  const handleDashboard = () => {
    navigate(PATHS.DASHBOARD.POST.LIST);
    console.log('Dashboard');
  };

  return (
    <HeaderDashboard>
      <BoxCenter sx={{ position: 'relative' }}>
        <Txt_link style={{ marginRight: '1rem' }}>{username}</Txt_link>

        <ImgProfile width={33} src={img} alt={'ProfileImg'} />
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
