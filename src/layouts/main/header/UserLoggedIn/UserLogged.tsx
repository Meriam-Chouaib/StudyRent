import { Box, Button, Typography } from '@mui/material';
import { BoxCenter } from '../../../../components';
import { clearLocalStorage } from '../../../../utils';
import { IconUserStatus, ImgProfile } from '../header.styles';
import { UserLoggedProps } from './UserLogged.types';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Txt_link } from '../../../dashboard/sidebar/SideBar.styles';
import { HeaderDashboard } from '../../../dashboard/header/Header.styles';

export const UserLogged = ({ username, img, status }: UserLoggedProps) => {
  const handleSubmit = () => {
    clearLocalStorage();
    window.location.reload();
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
      <Button onClick={handleSubmit}>
        <ExitToAppIcon sx={{ marginLeft: '0.8rem' }} />
      </Button>
    </HeaderDashboard>
  );
};
