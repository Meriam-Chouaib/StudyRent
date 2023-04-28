import { useTranslation } from 'react-i18next';
import { BoxLeft, ButtonWithIcon, CustomButton } from '../../../components';
import { Posts } from '../../../features';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box } from '@mui/material';
import { SelectField } from '../../../components/selectField/SelectField';

import { PATHS } from '../../../config/paths';
import { Link } from 'react-router-dom';
import { initialPostsPaginator } from '../../../features/home/posts/posts.constants';
import usePaginator from '../../../hooks/usePaginator';
import { useGetPostsByOwnerQuery } from '../../../redux/api/post/post.api';

export const ListPostsPage = () => {
  const { t } = useTranslation();
  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator({
    ...initialPostsPaginator,
    rowsPerPage: 9,
  });
  const { isError, isLoading, data, error } = useGetPostsByOwnerQuery(paginator);
  return (
    <>
      {/* <Box>
        <SelectField
          id={'filtre'}
          label={t('dashboardListPosts.sort')}
          placeholder={''}
          name={'filtre'}
          options={[t('dashboardListPosts.croissant'), t('dashboardListPosts.descending')]}
        />
      </Box> */}
      <BoxLeft>
        <Link to={`/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST.ADD}`}>
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
        dataPosts={data}
        isHomePage={false}
        isLoading={isLoading}
        onChangePage={onChangePage}
      />
    </>
  );
};
