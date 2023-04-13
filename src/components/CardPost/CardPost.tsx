// react
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// components
import { BoxEditDelete } from './BoxEditDelete/BoxEditDelete';
import { BoxHoverEye, CardPostStyled } from './CardPost.style';
import { CardPostProps } from './CardPost.type';
import { InfoCard } from './InfoCard';

// mui
import Modal from '@material-ui/core/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';

import { ReactComponent as Not_found_img } from '../../assets/images/empty_item.svg';
import { STATIC_URL } from '../../config/config';
// feature
import { AddPost } from '../../features';

// mutation
import { useDeletePostMutation } from '../../redux/api/post/post.api';
import { BoxModal } from '../BoxCenter/BoxModal.styles';
// style
import { BoxCenter } from '../BoxCenter/BoxCenter.styles';

export const CardPost = ({
  title,
  price,
  city,
  img,
  isPoster,
  idPost,
  PosterId,
  isHomePage,
}: CardPostProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // translation
  const { t } = useTranslation();
  // hover card
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // delete post
  const [deletePost] = useDeletePostMutation();
  const handleDelete = (id: number) => {
    if (window.confirm(t('dashboardListPosts.delete_confirm') as string)) {
      deletePost(id);
    }
  };

  // edit post
  const handleEdit = (id: number) => {
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CardPostStyled onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        {img ? (
          <>
            <Box sx={{ position: 'relative' }}>
              <CardMedia sx={{ height: 140 }} image={`${STATIC_URL}/${img}`} title="green iguana" />
              {isHovered && (
                <BoxHoverEye>
                  <VisibilityIcon color="primary" fontSize="large" />
                </BoxHoverEye>
              )}
            </Box>
            {/* {isPoster && ( */}

            {/* )} */}
          </>
        ) : (
          <BoxCenter>
            <Not_found_img height={130} width={'100%'} />
          </BoxCenter>
        )}
        <>
          {!isHomePage && (
            <>
              <BoxEditDelete
                handleDelete={() => handleDelete(idPost)}
                handleEdit={() => handleEdit(idPost)}
                idPost={idPost}
              />
              {isModalOpen && (
                <Modal
                  open={isModalOpen}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <BoxModal>
                    <AddPost isEdit={true} />
                  </BoxModal>
                </Modal>
              )}
            </>
          )}

          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {title}
            </Typography>
            <InfoCard label={t('home.card_txt_city') as string} txt={city} />

            <InfoCard label={t('home.card_txt_price') as string} txt={price.toString() + 'DT'} />
          </CardContent>
        </>
      </CardPostStyled>
    </>
  );
};
