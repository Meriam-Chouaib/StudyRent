import { Button } from '@mui/material';

import { useController, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { BasicTextField } from '../BasicTextField/BasicTextField';
import { FormProps } from './FormProps.type';

export const Form = ({ onSubmit, inputs, children }: FormProps) => {
  return (
    <>
      <form onSubmit={onSubmit} method="POST">
        {inputs.map(({ name, label }) => {
          const { field } = useController({ name });
          // return <BasicTextField placeholder={name} name={name} label={label} {...field} />;
          return (
            <BasicTextField placeholder={name} label={label} {...field} name={name} key={name} />
          );
        })}

        {children}

        <Button>Connect</Button>
      </form>
    </>
  );
};
