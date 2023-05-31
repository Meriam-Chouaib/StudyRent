import { useTranslation } from 'react-i18next';
import { BoxLeft, ButtonWithIcon, CustomButton } from '../../../components';
import { Posts } from '../../../features';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { PATHS } from '../../../config/paths';
import { Link } from 'react-router-dom';
import { initialPostsPaginator } from '../../../features/home/posts/posts.constants';
import usePaginator from '../../../hooks/usePaginator';
import { useGetPostsByOwnerQuery, useGetPostsQuery } from '../../../redux/api/post/post.api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paginator } from '../../../common/common.interfaces';

export const DashboardAdminPosts = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator({
    ...initialPostsPaginator,
    isAdminDashboard: true,
    rowsPerPage: 9,
  });
  const { data, isError, isLoading, error } = useGetPostsQuery({ ...paginator });
  const nbPages = data?.nbPages;
  console.log(data?.posts);

  console.log('stop here!');

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
      <Posts
        page={2}
        rowsPerPage={9}
        color={'transparent'}
        padding="0"
        margin="2rem 0"
        withButton={false}
        withPagination={true}
        dataPosts={data?.posts}
        isLoading={isLoading}
        onChangePage={onChangePage}
        nbPages={nbPages}
        isDashboard={true}
      />
    </>
  );
};
