import { useTranslation } from 'react-i18next';
import { BoxEmptyList, BoxLeft, ButtonWithIcon, CustomButton } from '../../../components';
import { Posts } from '../../../features';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { PATHS } from '../../../config/paths';
import { Link } from 'react-router-dom';
import { initialPostsPaginator } from '../../../features/home/posts/posts.constants';
import usePaginator from '../../../hooks/usePaginator';
import { useGetPostsByOwnerQuery } from '../../../redux/api/post/post.api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { getPersistData } from '../../../utils';

export const ListPostsPage = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator({
    ...initialPostsPaginator,

    rowsPerPage: 9,
  });
  const { isError, isLoading, data, error } = useGetPostsByOwnerQuery(paginator);
  const nbPages = data?.nbPages;
  const user = getPersistData('user', true);
  return (
    <>
      <BoxLeft>
        <Link
          to={`/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST.ADD}`}
          style={{ textDecoration: 'none' }}
        >
          <ButtonWithIcon
            icon={<AddCircleIcon style={{ width: '1.5rem', height: '1.5rem' }} />}
            txt={t('dashboardListPosts.btn_add')}
          />
        </Link>
      </BoxLeft>
      {data?.posts.length === 0 && (
        <BoxEmptyList>
          <Typography variant="h1">
            {t('dashboardListPosts.hello')} {user.username},
          </Typography>
          <Typography variant="h1">{t('dashboardListPosts.list_empty_posts')}</Typography>
        </BoxEmptyList>
      )}
      <Posts
        page={2}
        rowsPerPage={9}
        color={'transparent'}
        padding="0"
        margin="2rem 0"
        withButton={false}
        withPagination={true}
        dataPosts={data?.posts}
        isHomePage={false}
        isLoading={isLoading}
        onChangePage={onChangePage}
        nbPages={nbPages}
        isPosts={true}
      />
    </>
  );
};
