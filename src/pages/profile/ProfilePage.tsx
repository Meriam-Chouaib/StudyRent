import { Typography, Stack, Avatar, Box } from '@mui/material';
import { getPersistData } from '../../utils';
import { FormProvider, TextField } from '../../components/hookform';
import { useForm } from 'react-hook-form';
import { RegisterModel } from '../../models/Register.model';
import { useEffect } from 'react';
import { BoxCenter, CustomButton } from '../../components';
import { BoxStyled, StackStyled } from './ProfilePage.style';
import theme from '../../theme';
import { ImgProfile } from './ProfilePage.style';
import imgProfile from '../../assets/images/profile_icon.png';
import { SelectField } from '../../components/selectField/SelectField';
import { UserModel } from '../../models/user.model';
import { InputLabel } from '../../components/hookform/InputLabel';
import { StackCenter } from '../../components/CustomStack/CustomStackStyled.styles';
import { useTranslation } from 'react-i18next';

export const ProfilePage = () => {
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
  const onSubmit = async () => {
    console.log('test');
  };
  useEffect(() => {
    console.log(user);

    if (user) {
      setTimeout(() => {
        reset({
          email: user.email,
          username: user.username,
          university: user.statut,
          image: user.image,
        });
      });
    }
  }, [user, reset]);
  // TODO add input map to get localisation of university

  return (
    <Stack py={3}>
      <Typography variant="h4" sx={{ textAlign: 'initial', fontSize: '26px' }}>
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
                <TextField name={fields.username.name} type={'text'} label={''} />
              </InputLabel>
              {user.role == 'STUDENT' && (
                <InputLabel label={t('dashboardProfile.university')}>
                  <SelectField
                    variant="standard"
                    id={'university'}
                    label={''}
                    placeholder={'t(fields.university.label)'}
                    name={fields.university.name}
                    options={['ISITCOM', 'ENIM', 'ENIZO', 'EPI']}
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
