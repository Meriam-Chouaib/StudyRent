import * as Yup from 'yup';
import { UserModel } from '../../models/user.model';
const { fields } = UserModel;

const { phone, email, password, username, role, image } = fields;
export const ValidationUserSchema = Yup.object().shape({
  [email.name]: Yup.string().email(email.invaliErrorMessage).optional(),
  [username.name]: Yup.string()
    .matches(/^[A-Za-z][A-Za-z0-9]*$/, fields.username.invaliErrorMessage)
    .optional(),
  [password.name]: Yup.string()
    .min(6, fields.password.invaliErrorMessage)
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,30}$/, 'signup.password_invalid_back')
    .optional(),

  [role.name]: Yup.string().optional(),
  [image.name]: Yup.string().optional(),
  [phone.name]: Yup.string()
    .matches(/^(\+?\d{1,3}\s?)?\d{8,12}$/, 'dashboardProfile.invalid_phone')
    .nullable()
    .optional(),
});
