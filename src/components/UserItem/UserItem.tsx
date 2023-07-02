// ___________________________ React ______________________
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

// ___________________________ API ______________________
import { IUser } from '../../redux/api/user/user.types';
import { useDeleteUserMutation, useUpdateUserMutation } from '../../redux/api/user/user.api';

// ___________________________ MUI ______________________
import Switch from '@mui/material/Switch';

// ___________________________ Components ______________________
import { BoxIcon } from '../CardPost/BoxEditDelete/BoxIcon';
import IconDelete from '../../assets/icons/ic_delete';
import { AlertDialogSlide } from '../CardPost/BoxEditDelete/DeleteDialog';
import { COLORS } from '../../config/colors';

// ___________________________ Styles ______________________
import { BoxCenter } from '../BoxCenter/BoxCenter.styles';

interface UserItemProps {
  item: IUser;
}
export const UserItem = ({ item }: UserItemProps) => {
  const [isActive, setIsActive] = useState(item.statut === 'ONLINE');
  const [open, setOpen] = useState(false);

  const [deleteUser] = useDeleteUserMutation();

  function handleClick() {
    setIsActive(!isActive);
  }
  const [updateUser] = useUpdateUserMutation();

  useEffect(() => {
    const onSubmit = async () => {
      try {
        const userUpdated = await updateUser({
          id: item.id || 0,
          user: { ...item, statut: isActive ? 'ONLINE' : 'OFFLINE' },
        })
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      } catch (e) {
        console.log(e);
      }
    };
    onSubmit();
  }, [isActive, item, updateUser]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAgree = () => {
    deleteUser(item.id);
    setOpen(false);
  };
  const { t } = useTranslation();
  return (
    <BoxCenter>
      <Switch checked={isActive} onChange={handleClick} name="isActive" color="primary" />
      <BoxIcon color={`${COLORS.PRIMARY.MAIN}`}>
        <IconDelete></IconDelete>
        <AlertDialogSlide
          idPost={item.id}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          handleCloseAgree={handleCloseAgree}
          confirm_text={t('dashboardListPosts.delete_confirm') as string}
          title_text={t('dashboardListPosts.title_confirm') as string}
          open={open}
        />
      </BoxIcon>
    </BoxCenter>
  );
};
