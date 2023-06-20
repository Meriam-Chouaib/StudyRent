import { useTranslation } from 'react-i18next';
import { CustomBoxPosts } from './Posts.styles';
import { BoxCenter, BoxPosts, ButtonWithIcon, CardPost } from '../../../components';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Pagination } from '@mui/material';
import { Post } from '../../../redux/api/post/post.types';
import { getPersistData } from '../../../utils';
import { PostsProps } from './Posts.types';
import { LoaderBox } from '../../../components/Loader/LoaderBox';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../config/paths';
import { getDefaultImagePath } from '../../../utils/getDefaultImage';
import { DashboardItems } from './DashboardPostsItems';

export const Posts = ({
  padding,
  margin,
  withButton,
  withPagination,
  isHomePage,
  rowsPerPage,
  dataPosts,
  isLoading,
  onChangePage,
  isDashboard,
  isFavoritePage,
  nbPages,
  isPosts,
}: PostsProps) => {
  const user = getPersistData('user', true);

  const { t } = useTranslation();

  return (
    <>
      {isLoading ? (
        <LoaderBox />
      ) : (
        <CustomBoxPosts margin={margin} padding={padding}>
          {isDashboard ? (
            <DashboardItems dataPosts={dataPosts} heightImg={'100px'} widthImg={'120px'} />
          ) : (
            <BoxPosts isHomePage={isHomePage}>
              {dataPosts?.map((post: Post) => (
                <CardPost
                  style={{ display: isDashboard ? 'none' : 'block' }}
                  title={post.title}
                  img={getDefaultImagePath(post.images)}
                  city={post.city}
                  price={post.price}
                  isPoster={post.posterId === user?.id}
                  key={post.id}
                  idPost={post.id}
                  PosterId={post.posterId}
                  isHomePage={isHomePage}
                  isFavoritePage={isFavoritePage}
                  isPosts={isPosts}
                />
              ))}
            </BoxPosts>
          )}
          {withButton && (
            <Link to={`${PATHS.POSTS}`} style={{ textDecoration: 'none' }}>
              <ButtonWithIcon
                icon={<KeyboardDoubleArrowRightIcon />}
                txt={t('home.posts_btn') as string}
              />
            </Link>
          )}
          {withPagination && dataPosts?.length !== 0 && dataPosts !== undefined && (
            <BoxCenter paddingTop={3}>
              <Pagination
                count={nbPages ? nbPages : Math.ceil(dataPosts.length / rowsPerPage)}
                color="primary"
                onChange={(_e, page) => onChangePage(page)}
              />
            </BoxCenter>
          )}
        </CustomBoxPosts>
      )}
    </>
  );
};
