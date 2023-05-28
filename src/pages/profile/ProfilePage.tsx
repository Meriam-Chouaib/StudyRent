// profile page//

import { Typography, Stack } from '@mui/material';
import { getPersistData, updatePersistedData } from '../../utils';
import { FormProvider, TextField } from '../../components/hookform';
import { useSelector, useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { BoxCenter, CustomButton, Toast } from '../../components';
import { BoxStyled, StackStyled } from './ProfilePage.style';
import theme from '../../theme';
import { ImgProfile } from './ProfilePage.style';
import imgProfile from '../../assets/images/profile_icon.png';
import { SelectField } from '../../components/selectField/SelectField';
import { UserModel } from '../../models/user.model';
import { InputLabel } from '../../components/hookform/InputLabel';
import { StackCenter } from '../../components/CustomStack/CustomStackStyled.styles';
import { useTranslation } from 'react-i18next';
import { tunisian_universities_data } from '../../features/home/posts/fakeData';
import { useUpdateUserMutation } from '../../redux/api/user/user.api';
import { IUser } from '../../redux/api/user/user.types';
import { RootState } from '../../redux/store';

export const ProfilePage = () => {
  const [university, setUniversity] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState('');
  const [problem, setProblem] = useState('');

  const user = getPersistData('user', true);

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
          console.log('res', res);

          setSuccessMessage(`${t('dashboardProfile.updated_succuss')}`);
        })
        .catch((err) => {
          console.log(err);
          //    setProblem(`${t('postForm.check_fiels')}`);

          // setProblem(err.data.message);
        });
      updatePersistedData('user', userUpdated);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(`${t('dashboardProfile.updated_succuss')}`);
      }, 800);
    }
  }, [successMessage]);
  useEffect(() => {
    console.log('user data', user);

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
      <Typography
        variant="h4"
        sx={{ textAlign: 'initial', fontSize: '26px', paddingBottom: '1rem' }}
      >
        {t('dashboardProfile.txt_1')}
      </Typography>

      <StackCenter direction={'row'} spacing={1}>
        <Stack
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          direction={'column'}
          spacing={1}
        >
          <ImgProfile height={30} src={imgProfile} alt={'ProfileImg'} />
          <Typography variant="h3">{user.username}</Typography>
          <Typography variant="body2">{user.email}</Typography>
        </Stack>
        <BoxStyled p={4} sx={{ boxShadow: 'none' }}>
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
              {user.role == 'STUDENT' && (
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
