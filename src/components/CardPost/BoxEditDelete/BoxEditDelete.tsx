import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// ___________________________________ mui _____________________________________
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

// ___________________________ icons in assets ________________________________
import IconDelete from '../../../assets/icons/ic_delete';
import IconEdit from '../../../assets/icons/ic_edit';

// ___________________________ redux apis ______________________________________
import { useDeletePostMutation } from '../../../redux/api/post/post.api';
import { useDeleteUserMutation } from '../../../redux/api/user/user.api';

// ____________________________ styled Boxs ____________________________________
import { BoxEditDeleteStyled } from './BoxEditDelete.styles';
import { BoxEditDeleteProps } from './BoxEditDelete.types';
import { BoxIcon } from './BoxIcon';
import { AlertDialogSlide } from './DeleteDialog';
// ____________________________ colors & paths ___________________________________________________
import { PATHS } from '../../../config/paths';
import { COLORS } from '../../../config/colors';
import theme from '../../../theme';

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
    if ((isStudents || isOwners) && idUser) {
      deleteUser(idUser);
    }
    setOpen(false);
  };
  const { t } = useTranslation();
  // _________________________get the path and test if students page, owners page or posts page_________________
  const getPath = () => {
    if (isPosts || isPoster) {
      return `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST.LIST}/${idPost}`;
    } else if (isStudents) {
      return `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/${PATHS.DASHBOARD.ADMIN.STUDENTS}/${idUser}`;
    } else if (isOwners) {
      return `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/${PATHS.DASHBOARD.ADMIN.OWNERS}/${idUser}`;
    } else return '';
  };
  return (
    <>
      <BoxEditDeleteStyled backColor={bgColor ? bgColor : theme.palette.warning.main}>
        {isPoster || idUser || isPosts ? (
          <>
            <BoxIcon handleSubmit={handleEdit} color={`${COLORS.PRIMARY.MAIN}`}>
              <Link to={getPath()} style={{ display: 'flex' }}>
                <IconEdit></IconEdit>
              </Link>
            </BoxIcon>
            <BoxIcon color={`${COLORS.PRIMARY.MAIN}`}>
              <IconDelete></IconDelete>
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
