import * as Yup from 'yup';
import { RegisterModel } from '../../../models/Register.model';
const { fields } = RegisterModel;

const { confirm_password, email, password, username } = fields;
export const RegisterSchema = Yup.object().shape({
  [email.name]: Yup.string()
    .email(email.invaliErrorMessage)
    .required(fields.email.requiredErrorMessage),
  [username.name]: Yup.string()
    .matches(/^[A-Za-z]+$/, fields.username.invaliErrorMessage)
    .required(fields.username.requiredErrorMessage),
  [password.name]: Yup.string()
    .min(6, fields.password.invaliErrorMessage)
    .required(fields.password.requiredErrorMessage),
  [confirm_password.name]: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});
