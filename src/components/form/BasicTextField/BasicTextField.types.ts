import { ErrorOption } from 'react-hook-form';

export interface BasicTextFieldProps {
  placeholder: string;
  type?: string;
  name: string;
  label: string;
  error?: ErrorOption;
}
