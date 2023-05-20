import { Box } from '@mui/material';
import { BoxCenter, BoxCenterSpaceBetween } from '../../../components';
import { BoxImageMap, CustomImageMap } from './Contact.style';
import Maps from '../../../assets/images/plugin_easy_maps.png.webp';
import { ContactForm } from './ContactForm';
import { Map } from '../../map/Map';
import { Localization } from '../../../redux/api/post/post.types';
interface ContactProps {
  localizations: Localization[];
}
export function Contact({ localizations }: ContactProps) {
  return (
    <BoxCenter marginY={2}>
      {/* <CustomImageMap /> */}
      <Map localizations={localizations} />
    </BoxCenter>
  );
}
