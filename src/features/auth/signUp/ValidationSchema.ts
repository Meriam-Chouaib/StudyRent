import * as Yup from 'yup';
import { RegisterModel } from '../../../models/Register.model';
const { fields } = RegisterModel;
export interface FormValues {
  email: string;
  password: string;
}
export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email(fields.email.invaliErrorMessage)
    .required(fields.email.requiredErrorMessage),
  username: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Username can only contain alphabetic characters')
    .required(fields.username.requiredErrorMessage),
  password: Yup.string()
    .min(6, fields.password.password_invalid_length)
    .required(fields.password.requiredErrorMessage),
});
