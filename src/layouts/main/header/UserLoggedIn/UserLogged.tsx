import { Button, Typography } from '@mui/material';
import { BoxCenter } from '../../../../components';
import { clearLocalStorage } from '../../../../utils';
import { IconUserStatus, ImgProfile } from '../header.styles';
import { UserLoggedProps } from './UserLogged.types';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const UserLogged = ({ username, img }: UserLoggedProps) => {
  const handleSubmit = () => {
    clearLocalStorage();
    window.location.reload();
  };
  return (
    <>
      <Button onClick={handleSubmit}>
        <BoxCenter sx={{ position: 'relative' }}>
          <ImgProfile width={33} src={img} alt={'ProfileImg'} />
          <IconUserStatus></IconUserStatus>
        </BoxCenter>
        <ExitToAppIcon sx={{ marginLeft: '0.8rem' }} />
      </Button>
    </>
  );
};
