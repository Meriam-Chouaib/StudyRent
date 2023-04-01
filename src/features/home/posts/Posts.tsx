import { fakeData } from './fakeData';
import { useTranslation } from 'react-i18next';
import { ClipLoader } from 'react-spinners';
import { CustomBoxPosts } from './Posts.styles';
// components
import { BoxPosts } from '../../../components';
import { CardPost } from '../../../components';
import { ButtonWithIcon } from '../../../components';
// mui
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { useGetPostsQuery } from '../../../redux/api/post/post.api';
import { PostsProps } from './Posts.types';
import { Post } from '../../../redux/api/post/post.types';
export const Posts = ({ page, rowsPerPage, filter }: PostsProps) => {
  const { data, isLoading, isError } = useGetPostsQuery({ page, rowsPerPage, filter });
  console.log(data);

  const { t } = useTranslation();

  return (
    <>
      {isLoading ? (
        <ClipLoader color="#ffffff" size={20} />
      ) : (
        <CustomBoxPosts>
          <BoxPosts>
            {data?.map((post: Post) => (
              <CardPost
                title={post.title}
                img={post.files[0]?.filename || ''}
                city={post.city}
                price={post.price}
                key={post.id}
              />
            ))}
          </BoxPosts>
          <ButtonWithIcon
            icon={<KeyboardDoubleArrowRightIcon />}
            txt={t('home.posts_btn') as string}
          />
        </CustomBoxPosts>
      )}
    </>
  );
};
