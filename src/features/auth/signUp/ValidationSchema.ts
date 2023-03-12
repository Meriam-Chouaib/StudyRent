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
    .matches(/^[A-Za-z]+$/, fields.username.invaliErrorMessage)
    .required(fields.username.requiredErrorMessage),
  password: Yup.string()
    .min(6, fields.password.invaliErrorMessage)
    .required(fields.password.requiredErrorMessage),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Password confirmation is required'),
});
