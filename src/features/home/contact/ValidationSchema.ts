import * as Yup from 'yup';
import { ContactModel } from '../../../models/contact.model';
const { fields } = ContactModel;
export interface FormValues {
  email: string;
  message: string;
}
export const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email(fields.email.invaliErrorMessage)
    .required(fields.email.requiredErrorMessage),
  message: Yup.string().required(fields.message.requiredErrorMessage),
});
