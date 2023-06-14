// ____________________________________________ React ____________________________________________
import { useGetUsersQuery } from '../../../redux/api/user/user.api';
import { IUser, initialUsersPaginator } from '../../../redux/api/user/user.types';
import usePaginator from '../../../hooks/usePaginator';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ____________________________________________ mui ____________________________________________
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Pagination, Stack } from '@mui/material';
import { PATHS } from '../../../config/paths';

// ____________________________________________ Images ____________________________________________
import { varFade } from '../../../components/animate/fade';

import avatar from '../../../assets/images/avatar.png';

// ____________________________________________ Components ____________________________________________
import { BoxCenter, BoxLeft, ButtonWithIcon } from '../../../components';
import { ItemDashboard } from '../../../components/ItemDashboard/ItemDashboard';
import { BoxEditDelete } from '../../../components/CardPost/BoxEditDelete/BoxEditDelete';

// ____________________________________________ Animation ____________________________________________
import { motion } from 'framer-motion';

const DashboardAdminOwners = () => {
  const { t } = useTranslation();
  const { paginator, onChangePage } = usePaginator({
    ...initialUsersPaginator,
    rowsPerPage: 6,
    role: 'OWNER',
  });
  let dataToDisplay: IUser[] = [];
  const { data } = useGetUsersQuery({ ...paginator });
  dataToDisplay = data && data.users ? data.users : [];
  const fadeAnimation = varFade();

  return (
    <>
      <BoxLeft>
        <motion.div initial="initial" animate="animate" exit="exit" variants={fadeAnimation.inLeft}>
          <Link
            to={`/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/${PATHS.DASHBOARD.ADMIN.ADD_OWNER}`}
            style={{ textDecoration: 'none' }}
          >
            <ButtonWithIcon
              icon={<AddCircleIcon style={{ width: '1.5rem', height: '1.5rem' }} />}
              txt={t('dashboardAdminStudents.add_btn')}
              justify="flex-start"
            />
          </Link>
        </motion.div>
      </BoxLeft>
      <Stack sx={{ padding: '1.3rem 0px' }} spacing={2} direction="column">
        {dataToDisplay.length !== 0 ? (
          dataToDisplay?.map(
            (Item: IUser) =>
              Item.role === 'OWNER' && (
                <ItemDashboard
                  key={Item.id}
                  img={avatar}
                  txt_1={Item.email}
                  txt_2={Item.username ? Item.username : ''}
                  btns={
                    <BoxEditDelete
                      handleDelete={(): void => {
                        console.log('delete');
                      }}
                      handleEdit={(): void => {
                        console.log('edit');
                      }}
                      idPost={0}
                      bgColor="white"
                      isOwners={true}
                      idUser={Item.id}
                    />
                  }
                  heightImg={'3rem'}
                  widthImg={'auto'}
                />
              ),
          )
        ) : (
          <></>
        )}
      </Stack>
      {data?.nbUsers !== 0 && data?.users !== undefined && (
        <BoxCenter paddingTop={3}>
          <Pagination
            count={data?.nbPages}
            color="primary"
            onChange={(_e, page) => onChangePage(page)}
          />
        </BoxCenter>
      )}
    </>
  );
};

export default DashboardAdminOwners;
