import React from 'react';
import IconDelete from '../../../assets/icons/ic_delete';
import IconEdit from '../../../assets/icons/ic_edit';
import { useDeletePostMutation } from '../../../redux/api/post/post.api';
import { BoxEditDeleteStyled } from './BoxEditDelete.styles';
import { BoxEditDeleteProps } from './BoxEditDelete.types';
import { BoxIcon } from './BoxIcon';
import { AlertDialogSlide } from './DeleteDialog';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../config/paths';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { COLORS } from '../../../config/colors';
import { getPersistData } from '../../../utils';
import theme from '../../../theme';
import { useDeleteUserMutation, useGetUserByIdQuery } from '../../../redux/api/user/user.api';

export const BoxEditDelete = ({
  handleEdit,
  idPost,
  isPoster,
  handleFavorite,
  handleComment,
  isFavorite,
  bgColor,
  isOwners,
  isStudents,
  isPosts,
  idUser,
}: BoxEditDeleteProps) => {
  const [open, setOpen] = React.useState(false);
  // const { id } = useParams();
  //   let userInfo = getPersistData('user', true);
  //   if (idUser) {
  //     const { data } = useGetUserByIdQuery({ id: idUser });
  //     console.log('response get user by id', data);

  //     userInfo = data;
  //     console.log('userInfo', userInfo);
  //   }

  // const user = userInfo;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [deletePost] = useDeletePostMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAgree = () => {
    if (isPosts) {
      deletePost(idPost);
    }
    if (isStudents && idUser) {
      deleteUser(idUser);
    }
    setOpen(false);
  };
  const { t } = useTranslation();
  const getPath = () => {
    if (isPosts) {
      return `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST.LIST}/${idPost}`;
    } else if (isStudents) {
      return `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/${PATHS.DASHBOARD.ADMIN.STUDENTS}/${idUser}`;
    } else if (isOwners) {
      return '';
    } else return '';
  };
  return (
    <>
      <BoxEditDeleteStyled backColor={bgColor ? bgColor : theme.palette.warning.main}>
        {isPoster || idUser || isPosts ? (
          <>
            <BoxIcon handleSubmit={handleEdit} color={`${COLORS.PRIMARY.MAIN}`}>
              <Link
                // to={`/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST.LIST}/${idPost}`}
                to={getPath()}
                style={{ display: 'flex' }}
              >
                <IconEdit isActive={false}></IconEdit>
              </Link>
            </BoxIcon>
            <BoxIcon color={`${COLORS.PRIMARY.MAIN}`}>
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
          </>
        ) : (
          <>
            <BoxIcon handleSubmit={handleComment} color={`transparent`}>
              <ChatBubbleOutlineIcon color={'primary'}></ChatBubbleOutlineIcon>
            </BoxIcon>
            <BoxIcon handleSubmit={handleFavorite} color={`transparent`}>
              {isFavorite ? (
                <FavoriteIcon color={'primary'}></FavoriteIcon>
              ) : (
                <FavoriteBorderIcon color={'primary'}></FavoriteBorderIcon>
              )}
            </BoxIcon>
          </>
        )}
      </BoxEditDeleteStyled>
    </>
  );
};
