import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { FormProps } from './HookFormProps.types';

export const HookForm = ({ children }: FormProps) => {
  const methods = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
