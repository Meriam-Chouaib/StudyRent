import { Box } from '@mui/material';
import { BoxCenter, BoxCenterSpaceBetween } from '../../../components';
import { BoxImageMap, CustomImageMap } from './Contact.style';
import Map from '../../../assets/images/plugin_easy_maps.png.webp';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <BoxCenter marginY={2}>
      <CustomImageMap />
    </BoxCenter>
  );
}
