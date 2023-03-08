import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from '../../../components/form/Form/Form';
import { ValidationSchema } from '../../../components/form/Form/ValidationSchema';

import { BasicTextFieldProps } from '../../../components/form/BasicTextField/BasicTextField.types';
import { FormValuesTypes } from '../../../components/form/Form/FormValues';
import { HookForm } from '../../../components/hookform/HookForm';

export function SignIn() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  const inputs: BasicTextFieldProps[] = [
    { name: 'email', label: t('signin.email_label'), placeholder: t('signin.email_label') },
    {
      name: 'password',
      label: t('signin.password_label'),
      placeholder: t('signin.password_label'),
    },
  ];

  const onSubmit = (data: FormValuesTypes) => console.log(data);

  function handleSubmit(onSubmit: (data: FormValuesTypes) => void): () => void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <HookForm inputs={inputs} validationSchema={ValidationSchema}>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          ValidationSchema={ValidationSchema}
          inputs={inputs}
        />
      </HookForm>

      <Typography variant="h1">{t('signin.title')}</Typography>
    </>
  );
}
