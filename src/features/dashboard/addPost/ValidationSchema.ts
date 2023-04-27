import * as Yup from 'yup';
import { PostModel } from '../../../models/Post.model';
const { fields } = PostModel;
const {
  title,
  description,
  price,
  surface,
  city,
  state,
  postal_code,
  nb_roommate,
  nb_rooms,
  // colocation,
  files,
} = fields;

export const PostSchema = Yup.object().shape({
  [surface.name]: Yup.number()
    .min(70, surface.invaliErrorMessage)
    .required(surface.requiredErrorMessage),
  [city.name]: Yup.string().required(city.requiredErrorMessage),
  [state.name]: Yup.string().min(3, city.invaliErrorMessage).required(city.requiredErrorMessage),
  [title.name]: Yup.string().required(title.requiredErrorMessage).min(6, title.invaliErrorMessage),
  [description.name]: Yup.string()
    .min(6, description.invaliErrorMessage)
    .required(description.requiredErrorMessage),
  [price.name]: Yup.number().min(1, price.invaliErrorMessage).required(price.requiredErrorMessage),
  [postal_code.name]: Yup.string().required(postal_code.requiredErrorMessage),
  [nb_roommate.name]: Yup.number().required(nb_roommate.requiredErrorMessage),
  [nb_rooms.name]: Yup.number().required(nb_rooms.requiredErrorMessage),
  [files.name]: Yup.mixed().required(files.requiredErrorMessage),
});
