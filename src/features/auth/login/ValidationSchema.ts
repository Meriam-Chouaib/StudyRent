import * as Yup from 'yup';
import { LoginModel } from '../../../models/Login.model';

const { fields } = LoginModel;
export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});
export interface FormValues {
  email: string;
  password: string;
}
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(fields.email.invaliErrorMessage)
    .required(fields.email.requiredErrorMessage),
  password: Yup.string().required('Password is required'),
});
