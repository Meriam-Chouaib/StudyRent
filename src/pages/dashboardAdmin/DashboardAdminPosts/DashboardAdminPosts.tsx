// ____________________________________________ React ____________________________________________
import usePaginator from '../../../hooks/usePaginator';
import { useGetPostsQuery } from '../../../redux/api/post/post.api';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// ____________________________________________ components ____________________________________________
import { BoxLeft, ButtonWithIcon } from '../../../components';
import { initialPostsPaginator } from '../../../features/home/posts/posts.constants';
import { Posts } from '../../../features';

// ____________________________________________ Mui ____________________________________________
import AddCircleIcon from '@mui/icons-material/AddCircle';

// ____________________________________________ config ____________________________________________
import { PATHS } from '../../../config/paths';

// ____________________________________________ Animation ____________________________________________
import { motion } from 'framer-motion';
import { varFade } from '../../../components/animate/fade';

export const DashboardAdminPosts = () => {
  const { t } = useTranslation();
  const { paginator, onChangePage } = usePaginator({
    ...initialPostsPaginator,
    isAdminDashboard: true,
    rowsPerPage: 9,
  });
  const { data, isLoading } = useGetPostsQuery({ ...paginator });
  const nbPages = data?.nbPages;
  const fadeAnimation = varFade();

  return (
    <>
      <BoxLeft>
        <motion.div initial="initial" animate="animate" exit="exit" variants={fadeAnimation.inLeft}>
          <Link
            to={`/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST.ADD}`}
            style={{ textDecoration: 'none' }}
          >
            <ButtonWithIcon
              icon={<AddCircleIcon style={{ width: '1.5rem', height: '1.5rem' }} />}
              txt={t('dashboardListPosts.btn_add')}
            />
          </Link>
        </motion.div>
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
        isPosts={true}
      />
    </>
  );
};
