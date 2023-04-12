import React from 'react';
import IconDelete from '../../../assets/icons/ic_delete';
import IconEdit from '../../../assets/icons/ic_edit';
import { useDeletePostMutation } from '../../../redux/api/post/post.api';
import { BoxEditDeleteStyled } from './BoxEditDelete.styles';
import { BoxEditDeleteProps } from './BoxEditDelete.types';
import { BoxIcon } from './BoxIcon';
import { AlertDialogSlide } from './DeleteDialog';
import { useTranslation } from 'react-i18next';

export const BoxEditDelete = ({ handleEdit, idPost }: BoxEditDeleteProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [deletePost] = useDeletePostMutation();
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAgree = () => {
    deletePost(idPost);
    setOpen(false);
    window.location.reload();
  };
  const { t } = useTranslation();
  return (
    <>
      <BoxEditDeleteStyled>
        <BoxIcon handleSubmit={handleEdit}>
          <IconEdit isActive={false}></IconEdit>
        </BoxIcon>
        <BoxIcon>
          <IconDelete isActive={false}></IconDelete>
          <AlertDialogSlide
            idPost={idPost}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            handleCloseAgree={handleCloseAgree}
            confirm_text={t('dashboardListPosts.delete_confirm') as string}
            title_text={t('dashboardListPosts.title_confirm') as string}
            open={open}
          />
        </BoxIcon>
      </BoxEditDeleteStyled>
    </>
  );
};
