import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { FormProps } from './HookFormProps.types';

export const HookForm = ({ children, onSubmit }: FormProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
