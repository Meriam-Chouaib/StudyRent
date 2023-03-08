import { ReactNode } from 'react';
import { BasicTextFieldProps } from '../BasicTextField/BasicTextField.types';
import * as Yup from 'yup';
export interface FormProps {
  onSubmit: () => void;
  inputs: BasicTextFieldProps[];

  children?: ReactNode;
  ValidationSchema?: Yup.ObjectSchema<any>;
}
