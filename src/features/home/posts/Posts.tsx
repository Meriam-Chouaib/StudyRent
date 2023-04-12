import { useTranslation } from 'react-i18next';
import { ClipLoader } from 'react-spinners';
import { CustomBoxPosts } from './Posts.styles';
// components
import { BoxCenter, BoxPosts, ButtonWithIcon, CardPost } from '../../../components';
// mui
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { Pagination } from '@mui/material';
import usePaginator from '../../../hooks/usePaginator';
import { useGetPostsQuery } from '../../../redux/api/post/post.api';
import { Image, Post } from '../../../redux/api/post/post.types';
import { getPersistData } from '../../../utils';
import { PostsProps } from './Posts.types';
import { initialPostsPaginator } from './posts.constants';

export const Posts = ({ color, padding, margin, withButton, withPagination }: PostsProps) => {
  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator(initialPostsPaginator);

  const { data, isLoading, isError, error } = useGetPostsQuery(paginator);
  const user = getPersistData('user', true);

  const { t } = useTranslation();

  const getDefaultImagePath = (images?: Image[]) => {
    return images?.length ? `${images[0].fileName}` : '';
  };

  return (
    <>
      {isLoading ? (
        <BoxCenter width={'100%'} height={'100vh'}>
          <ClipLoader color="primary" size={100} />
        </BoxCenter>
      ) : (
        <CustomBoxPosts bgcolor={color} margin={margin} padding={padding}>
          <BoxPosts>
            {data?.map((post: Post) => (
              <CardPost
                title={post.title}
                img={getDefaultImagePath(post.images)}
                city={post.city}
                price={post.price}
                isPoster={post.posterId == user.id}
                key={post.id}
                idPost={post.id}
              />
            ))}
          </BoxPosts>
          {withButton && (
            <ButtonWithIcon
              icon={<KeyboardDoubleArrowRightIcon />}
              txt={t('home.posts_btn') as string}
            />
          )}
          <BoxCenter paddingY={3}>
            <Pagination count={10} color="primary" onChange={(_e, page) => onChangePage(page)} />
          </BoxCenter>

          {withPagination && (
            <BoxCenter paddingY={3}>
              <Pagination count={10} color="primary" />
            </BoxCenter>
          )}
        </CustomBoxPosts>
      )}
    </>
  );
};
