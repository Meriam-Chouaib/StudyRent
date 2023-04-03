import * as Yup from 'yup';
import { PostModel } from '../../../models/Post.model';
const { fields } = PostModel;

export const PostSchema = Yup.object().shape({
  title: Yup.string()
    .required(fields.title.requiredErrorMessage)
    .min(6, fields.title.invaliErrorMessage),
  description: Yup.string()
    .min(6, fields.description.invaliErrorMessage)
    .required(fields.description.requiredErrorMessage),
});
