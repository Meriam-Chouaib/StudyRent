import { Box } from '@mui/material';
import { BoxCenter, BoxCenterSpaceBetween } from '../../../components';
import { BoxImageMap, CustomImageMap } from './Contact.style';
import Maps from '../../../assets/images/plugin_easy_maps.png.webp';
import { ContactForm } from './ContactForm';
import { Map } from '../../map/Map';
import { Localization, Post } from '../../../redux/api/post/post.types';
interface ContactProps {
  localizations: Localization[];
  posts: Post[];
}
export function Contact({ localizations, posts }: ContactProps) {
  return (
    <BoxCenter marginY={2}>
      {/* <CustomImageMap /> */}
      <Map localizations={localizations} posts={posts} />
    </BoxCenter>
  );
}
