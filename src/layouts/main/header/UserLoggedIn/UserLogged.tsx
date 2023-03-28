import { Box, Button, Typography } from '@mui/material';
import { BoxCenter } from '../../../../components';
import { clearLocalStorage } from '../../../../utils';
import { IconUserStatus, ImgProfile } from '../header.styles';
import { UserLoggedProps } from './UserLogged.types';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const UserLogged = ({ username, img, isLogged }: UserLoggedProps) => {
  const handleSubmit = () => {
    clearLocalStorage();
    window.location.reload();
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <BoxCenter sx={{ position: 'relative' }}>
        <Typography variant="h3" marginRight={2}>
          {username}
        </Typography>
        <ImgProfile width={33} src={img} alt={'ProfileImg'} />
        {isLogged ? (
          <IconUserStatus sx={{ backgroundColor: 'green' }}></IconUserStatus>
        ) : (
          <IconUserStatus sx={{ backgroundColor: 'red' }}></IconUserStatus>
        )}
      </BoxCenter>
      <Button onClick={handleSubmit}>
        <ExitToAppIcon sx={{ marginLeft: '0.8rem' }} />
      </Button>
    </Box>
  );
};
