import { useState } from 'react';
import { BoxHoverEye, CardPostStyled } from './CardPost.style';
import { CardPostProps } from './CardPost.type';
// mui
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { InfoCard } from './InfoCard';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Not_found_img } from '../../assets/images/empty_item.svg';
import { STATIC_URL } from '../../config/config';
import { getPersistData } from '../../utils';
import { BoxEditDelete } from './BoxEditDelete/BoxEditDelete';
import { useDeletePostMutation } from '../../redux/api/post/post.api';
export const CardPost = ({ title, price, city, img, isPoster, idPost }: CardPostProps) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  const [deletePost] = useDeletePostMutation();
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleDelete = (id: number) => {
    if (window.confirm(t('dashboardListPosts.delete_confirm') as string)) {
      console.log('handleDelete', id);
      deletePost(id);
    }
  };
  const handleEdit = (id: number) => {
    console.log('handleEdit', id);
  };

  return (
    <>
      <CardPostStyled
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        // sx={{ position: 'relative' }}
      >
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
          <Not_found_img height={140} width={'100%'} />
        )}
        <>
          <BoxEditDelete
            handleDelete={() => handleDelete(idPost)}
            handleEdit={() => handleEdit(idPost)}
          />
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
