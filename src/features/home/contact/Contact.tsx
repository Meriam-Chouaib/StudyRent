import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { BoxCenterSpaceBetween, CustomButton } from '../../../components';
import { FormProvider, TextField } from '../../../components/hookform';
import { ContactModel } from '../../../models/contact.model';
import { BoxImageMap, CustomImageMap } from './Contact.style';
import { ContactSchema } from './ValidationSchema';
import Map from '../../../assets/images/map-contact-home.svg';

export const Contact = () => {
  const { fields, defaultValues } = ContactModel;
  const { t } = useTranslation();
  const methods = useForm({
    resolver: yupResolver(ContactSchema),
    defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: { email: string; message: string }) => {
    try {
      console.log(data);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      reset();
      setError('email', { ...error, message: error.message });
      setError('message', { ...error, message: error.message });
    }
  };
  return (
    <BoxCenterSpaceBetween>
      <Box sx={{ width: '50%' }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <TextField name={fields.email.name} type={'text'} label={t(fields.email.label)} />
          <TextField
            name={fields.message.name}
            type={'text'}
            label={t(fields.message.label)}
            multiline
            rows={4}
            variant="standard"
          />
          <Box sx={{ width: '7rem', padding: '1.7rem 0' }}>
            <CustomButton isLoading={isSubmitting} sx={{ width: '20rem' }}>
              {t('home.btn_contact')}
            </CustomButton>
          </Box>
        </FormProvider>
      </Box>
      <BoxImageMap>
        <CustomImageMap src={Map} alt={'localisation of the agence'} />
      </BoxImageMap>
    </BoxCenterSpaceBetween>
  );
};
