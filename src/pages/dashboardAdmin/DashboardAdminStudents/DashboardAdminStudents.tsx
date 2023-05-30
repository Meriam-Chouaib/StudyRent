/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { ButtonWithIcon } from '../../../components';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Box, Stack } from '@mui/material';
import { ItemDashboard } from '../../../components/ItemDashboard/ItemDashboard';
import { BoxEditDelete } from '../../../components/CardPost/BoxEditDelete/BoxEditDelete';
import avatar from '../../../assets/images/avatar.png';
import { useGetUsersQuery } from '../../../redux/api/user/user.api';
import { IUser } from '../../../redux/api/user/user.types';

export const DashboardAdminStudents = () => {
  const { t } = useTranslation();
  let dataToDisplay: IUser[] = [];
  const { data: users } = useGetUsersQuery({});
  dataToDisplay = users ? users : [];
  console.log('data to display', dataToDisplay);

  return (
    <>
      <ButtonWithIcon
        icon={<AddCircleIcon style={{ width: '1.5rem', height: '1.5rem' }} />}
        txt={t('dashboardAdminStudents.add_btn')}
        justify="flex-start"
      />
      <Stack sx={{ padding: '1.3rem 0px' }} spacing={2} direction="column">
        {dataToDisplay.length !== 0 ? (
          dataToDisplay?.map(
            (Item: IUser) =>
              Item.role === 'STUDENT' && (
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
                      isStudents={true}
                      idUser={Item.id}
                    />
                  }
                  heightImg={'3rem'}
                  widthImg={'auto'}
                />
              ),
          )
        ) : (
          <ItemDashboard
            img={avatar}
            txt_1={'email@gmail'}
            txt_2={'Username'}
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
                isStudents={true}
                idUser={5}
              />
            }
            heightImg={'3rem'}
            widthImg={'auto'}
          />
        )}
      </Stack>
    </>
  );
};
