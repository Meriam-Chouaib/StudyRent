import { Typography } from '@mui/material';
import { Post } from '../../redux/api/post/post.types';
import { STATIC_URL } from '../../config/config';
import { getDefaultImagePath } from '../../utils/getDefaultImage';
import { ImgPost, StackInfoCard } from './PostOnMap.style';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATHS } from '../../config/paths';

export interface PostOnMapProps {
  post: Post;
}
export const PostOnMap = ({ post }: PostOnMapProps) => {
  const { t } = useTranslation();
  return (
    <Link to={`/${PATHS.POSTS}/${post.id}`} style={{ textDecoration: 'none' }}>
      <ImgPost src={`${STATIC_URL}/${getDefaultImagePath(post.images)}`} />
      <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '8px' }}>
        {post.title}
      </Typography>

      <StackInfoCard>
        <Typography variant="h6" sx={{ paddingRight: '8px' }}>
          {t('postForm.price_label')}
        </Typography>

        <Typography variant="h6">{post.price} DT</Typography>
      </StackInfoCard>
      <StackInfoCard>
        <Typography variant="h6" sx={{ paddingRight: '8px' }}>
          {t('postForm.number_rooms_label')}
        </Typography>

        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          S+ {post.nb_rooms}
        </Typography>
      </StackInfoCard>
    </Link>
  );
};
