import { useState } from 'react';
import { Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Person2Icon from '@mui/icons-material/Person2';
import { useTranslation } from 'react-i18next';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ItemSelect } from './ItemSelect';
import { BoxSelectItemStyled } from '../header.styles';
import { PATHS } from '../../../../config/paths';
import { useNavigate } from 'react-router-dom';
import { getPersistData } from '../../../../utils';
import { IUser } from '../../../../redux/api/user/user.types';

type SelectIconProps = {
  onLogout: () => void;
  onProfile: () => void;
  handleDashboard: () => void;
};

export const SelectIcon = ({ onLogout, onProfile }: SelectIconProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    handleClose();
    onLogout();
  };

  const handleProfile = () => {
    navigate(`/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.PROFILE}`);

    handleClose();
  };

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'relative',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <ArrowDropDownIcon
        sx={{
          marginLeft: '0.8rem',
          fontSize: '1.8rem',
        }}
        color={'primary'}
        onClick={handleOpen}
      />

      {open && (
        <BoxSelectItemStyled
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <ItemSelect
            icon={<DashboardIcon />}
            onClick={handleProfile}
            txt={t('header.dashboard') as string}
          />

          <ItemSelect
            icon={<ExitToAppIcon />}
            onClick={handleLogout}
            txt={t('header.exit') as string}
          />
        </BoxSelectItemStyled>
      )}
    </Box>
  );
};
