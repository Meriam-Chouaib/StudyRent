import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FormValuesTypes } from '../form/Form/FormValues';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from '../form/Form/Form';
import { FormProps } from './HookFormProps.types';

export const HookForm = ({ inputs, validationSchema }: FormProps) => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)} inputs={inputs}></Form>
    </FormProvider>
  );
};
