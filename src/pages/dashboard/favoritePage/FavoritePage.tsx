// React
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import usePaginator from '../../../hooks/usePaginator';
import { Container, Typography } from '@mui/material';
import { BoxCenter, BoxEmptyList, Toast } from '../../../components';
import { initialPostsPaginator, Posts, GoToMap } from '../../../features';
import { useGetFavoriteListQuery } from '../../../redux/api/post/post.api';
import { IUser } from '../../../redux/api/user/user.types';
import { getPersistData } from '../../../utils';

export const FavoritePage = () => {
  const { paginator, onChangePage } = usePaginator({
    ...initialPostsPaginator,
    rowsPerPage: 9,
  });

  // ____________________________________ call the query to get my data filtred ___________________________
  const user: IUser = getPersistData('user', true);

  const { data, isLoading, error } = useGetFavoriteListQuery({
    page: paginator.page,
    rowsPerPage: paginator.rowsPerPage,
    id: user.id ? user.id : 0,
  });
  const nbPages = data?.nbPages;
  const { t } = useTranslation();
  return (
    <BoxCenter>
      <Container>
        {/*  ________________ notify student ______________________ */}

        {error && <Toast type="error" text={error as string} />}
        {data?.posts.length === 0 && (
          <BoxEmptyList>
            <Typography variant="h1">
              {t('dashboardListPosts.hello')} {user.username},
            </Typography>
            <Typography variant="h1">{t('dashboardListPosts.list_empty_favorite')}</Typography>
          </BoxEmptyList>
        )}
        <BoxCenter>
          <Posts
            page={1}
            rowsPerPage={9}
            color={'transparent'}
            padding="0 2.4rem 0 2.4rem"
            margin="2rem 0 0 0"
            withButton={false}
            withPagination={true}
            dataPosts={data?.posts}
            isLoading={isLoading}
            onChangePage={onChangePage}
            isFavoritePage={true}
            nbPages={nbPages}
          />
        </BoxCenter>
      </Container>
    </BoxCenter>
  );
};
