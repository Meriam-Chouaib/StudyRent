import { BasicTextFieldProps } from '../form/BasicTextField/BasicTextField.types';

export interface FormProps {
  inputs: BasicTextFieldProps[];
  handleSubmit?: () => void;
  children: React.ReactNode;
  validationSchema: unknown;
}
