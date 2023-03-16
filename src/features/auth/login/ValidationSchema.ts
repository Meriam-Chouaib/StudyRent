import * as Yup from 'yup';
import { LoginModel } from '../../../models/Login.model';
const { fields } = LoginModel;
export interface FormValues {
  email: string;
  password: string;
}
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(fields.email.invaliErrorMessage)
    .required(fields.email.requiredErrorMessage),
  password: Yup.string()
    .min(6, fields.password.password_invalid_length)
    .required(fields.password.requiredErrorMessage),
});
