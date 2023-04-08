import { useTranslation } from 'react-i18next';
import { BoxLeft, ButtonWithIcon, CustomButton } from '../../../components';
import { Posts } from '../../../features';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box } from '@mui/material';
import { SelectField } from '../../../components/selectField/SelectField';

import { PATHS } from '../../../config/paths';
import { Link } from 'react-router-dom';

export const ListPostsPage = () => {
  const { t } = useTranslation();
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
      />
    </>
  );
};
