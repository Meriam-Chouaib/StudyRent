import * as Yup from 'yup';
import { RegisterModel } from '../../../models/Register.model';
const { fields } = RegisterModel;

const { confirm_password, email, password, username, role } = fields;
export const RegisterSchema = Yup.object().shape({
  [email.name]: Yup.string()
    .email(email.invaliErrorMessage)
    .required(fields.email.requiredErrorMessage),
  [username.name]: Yup.string()
    .matches(/^[A-Za-z]+$/, fields.username.invaliErrorMessage)
    .required(fields.username.requiredErrorMessage),
  [password.name]: Yup.string()
    .min(6, fields.password.invaliErrorMessage)
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,30}$/, 'signup.password_invalid_back')
    .required(fields.password.requiredErrorMessage),
  [confirm_password.name]: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], 'signup.password_not_match'),
  [role.name]: Yup.string().required('signup.role_required'),
});
