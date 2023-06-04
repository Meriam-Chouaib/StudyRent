// __________________________________mui_________________
import { Typography, Stack } from '@mui/material';

// __________________________________components_________________
import { InputLabel } from '../../components/hookform/InputLabel';
import { StackCenter } from '../../components/CustomStack/CustomStackStyled.styles';
import { SelectField } from '../../components/selectField/SelectField';
import { BoxCenter, CustomButton, Toast } from '../../components';
import { getPersistData, updatePersistedData } from '../../utils';
import { FormProvider, TextField } from '../../components/hookform';
import { useSelector, useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

import { BoxStyled, StackStyled } from './ProfilePage.style';
import theme from '../../theme';
import { ImgProfile } from './ProfilePage.style';
import imgProfile from '../../assets/images/profile_icon.png';

import { UserModel } from '../../models/user.model';

import { useTranslation } from 'react-i18next';
import { tunisian_universities_data } from '../../features/home/posts/fakeData';
import { useGetUserByIdQuery, useUpdateUserMutation } from '../../redux/api/user/user.api';
import { IUser } from '../../redux/api/user/user.types';
import { RootState } from '../../redux/store';
import { useNavigate, useParams } from 'react-router-dom';
import { COLORS } from '../../config/colors';
import { PATHS } from '../../config/paths';

interface ProfilePageProps {
  isAdmin?: boolean;
  backStudentsList?: boolean;
  backOwnersList?: boolean;
}
export const ProfilePage = ({ isAdmin, backStudentsList, backOwnersList }: ProfilePageProps) => {
  const [university, setUniversity] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState('');
  const [problem, setProblem] = useState('');
  const currentUser = getPersistData('user', true);
  const navigate = useNavigate();

  let userId: number = currentUser.id;
  if (isAdmin) {
    const { id } = useParams();
    userId = Number(id);
  }

  const { data: userById } = useGetUserByIdQuery({ id: Number(userId) });

  const user = currentUser.role === 'ADMIN' ? userById : currentUser;

  const { fields, defaultValues } = UserModel;
  const { t } = useTranslation();
  const methods = useForm({});
  const {
    reset,
    setValue,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const values = watch();
  const [updateUser, { data, isError, isLoading }] = useUpdateUserMutation();

  const onSubmit = async () => {
    try {
      const userUpdated = await updateUser({ id: user.id, user: values as unknown as IUser })
        .then((res) => {
          setSuccessMessage(`${t('dashboardProfile.updated_succuss')}`);
        })
        .catch((err) => {
          console.log(err);
          //    setProblem(`${t('postForm.check_fiels')}`);

          // setProblem(err.data.message);
        });
      if (currentUser.role !== 'ADMIN') {
        updatePersistedData('user', userUpdated);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(`${t('dashboardProfile.updated_succuss')}`);
        if (backStudentsList) {
          console.log('backStudentsList', backStudentsList);

          navigate(
            `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/${PATHS.DASHBOARD.ADMIN.STUDENTS}`,
          );
        } else if (backOwnersList) {
          console.log('backOwnersList', backOwnersList);

          navigate(
            `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/${PATHS.DASHBOARD.ADMIN.OWNERS}`,
          );
        }
      }, 800);
    }
  }, [successMessage]);
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        reset({
          email: user.email,
          username: user.username,
          image: user.image,
          phone: user.phone || '',
          university: user.university || '',
        });
      });
    }
  }, []);

  return (
    <Stack py={3}>
      {successMessage && <Toast type={'success'} text={successMessage} />}
      {problem && <Toast type={'error'} text={problem} />}
      {!isAdmin && (
        <Typography
          variant="h4"
          sx={{ textAlign: 'initial', fontSize: '26px', paddingBottom: '1rem' }}
        >
          {t('dashboardProfile.txt_1')}
        </Typography>
      )}

      <StackCenter direction={'row'} spacing={1}>
        {!isAdmin && (
          <Stack
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            direction={'column'}
            spacing={1}
          >
            <ImgProfile height={30} src={imgProfile} alt={'ProfileImg'} />
            <Typography variant="h3">{user.username}</Typography>
            <Typography variant="body2">{user.email}</Typography>
          </Stack>
        )}
        <BoxStyled
          p={4}
          sx={{ boxShadow: !isAdmin ? 'none' : `1px 1px 8px -2px ${COLORS.GREY[800]}` }}
        >
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} alignItems={'center'} width={'90'}>
              <InputLabel label={t('dashboardProfile.email')}>
                <TextField name={fields.email.name} type={'text'} label={''} />
              </InputLabel>
              <InputLabel label={t('dashboardProfile.username')}>
                <TextField name={fields.username.name} type={'text'} label={''} />
              </InputLabel>
              <InputLabel label={t('dashboardProfile.phone')}>
                <TextField name={fields.phone.name} type={'text'} label={''} />
              </InputLabel>
              {user && user.role === 'STUDENT' && (
                <InputLabel label={t('dashboardProfile.university')}>
                  <SelectField
                    type={'text'}
                    options={tunisian_universities_data}
                    placeholder={user.university ? user.university : ''}
                    name={fields.university.name}
                    id={fields.university.name}
                    label={
                      user.university
                        ? user.university
                        : (t('dashboardProfile.university_placeholder') as string)
                    }
                  />
                </InputLabel>
              )}
              <CustomButton
                isLoading={isSubmitting}
                colorBack={`${theme.palette.primary.main}`}
                colorText={`${theme.palette.warning.main}`}
              >
                {t('dashboardProfile.btn_confirm') as string}
              </CustomButton>
            </Stack>
          </FormProvider>
        </BoxStyled>
      </StackCenter>
    </Stack>
  );
};
