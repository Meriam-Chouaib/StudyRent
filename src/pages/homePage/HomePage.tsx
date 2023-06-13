// _______________________________________React______________________________________________
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import usePaginator from '../../hooks/usePaginator';

// _______________________________________Redux______________________________________________
import { useGetPostsHomeQuery } from '../../redux/api/post/post.api';
import { IUser } from '../../redux/api/user/user.types';
// _______________________________________mui______________________________________________
import FilterListIcon from '@material-ui/icons/FilterList';
import { Container } from '@mui/material';

// _______________________________________components______________________________________________
import { TypographyStyled } from '../../components/ButtonWithIcon/ButtonWithIcon.style';
import { COLORS } from '../../config/colors';
import { GetStarted, Posts } from '../../features';
import { MapPosts } from '../../features/home/contact/Contact';
import { initialPostsPaginator } from '../../features/home/posts/posts.constants';

// _______________________________________utils______________________________________________
import { getPersistData } from '../../utils';
import { splitAddress } from '../../utils/splitAddress';
import { Paginator } from '../../common/common.interfaces';

export function HomePage() {
  const user: IUser = getPersistData('user', true);
  let universityAddress: string[] = [];
  if (user && user.universityAddress) {
    universityAddress = splitAddress(user.universityAddress);
  }
  const [isWithAddress, setIsWithAddress] = useState<boolean>(false);

  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator({
    ...initialPostsPaginator,
    rowsPerPage: 6,
    universityAddress: '',
  });
  const { data, isLoading, isError, error } = useGetPostsHomeQuery({
    ...paginator,
    universityAddress: user && user.universityAddress && isWithAddress ? universityAddress[0] : '',
  });
  // ____________________________________________get all posts ____________________________________________
  const handleGetAll = () => {
    setIsWithAddress(!isWithAddress);
    console.log('tetetet');
  };
  const fetchPostsData = async (updatedPaginator: Paginator) => {
    try {
      const response = await useGetPostsHomeQuery(updatedPaginator);
    } catch (error) {
      console.log(error);
    }
  };
  // ____________________________________________get nearest posts from university ____________________________________________

  useEffect(() => {
    if (isWithAddress) {
      fetchPostsData({
        ...paginator,
        universityAddress: universityAddress[0],
      });
    }
  }, [isWithAddress, universityAddress]);
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <GetStarted />
        {user && user.role === 'STUDENT' && user.universityAddress && (
          <TypographyStyled variant="h3" onClick={handleGetAll}>
            {isWithAddress ? t('home.show_all') : t('home.show_nearest')}
            <FilterListIcon />
          </TypographyStyled>
        )}

        <Posts
          page={1}
          rowsPerPage={6}
          color={COLORS.PRIMARY.DARK}
          padding="0 0"
          margin="2rem 0"
          withButton={true}
          isHomePage={true}
          dataPosts={data?.posts}
          isLoading={isLoading}
          onChangePage={onChangePage}
        />

        {data != undefined && data.localizations[0] !== null && (
          <MapPosts localizations={data.localizations} posts={data.posts} />
        )}
      </Container>
    </>
  );
}
