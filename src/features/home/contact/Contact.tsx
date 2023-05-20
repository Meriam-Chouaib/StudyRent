import { Box } from '@mui/material';
import { BoxCenter, BoxCenterSpaceBetween } from '../../../components';
import { BoxImageMap, CustomImageMap } from './Contact.style';
import Maps from '../../../assets/images/plugin_easy_maps.png.webp';
import { ContactForm } from './ContactForm';
import { Map } from '../../map/Map';
export function Contact() {
  return (
    <BoxCenter marginY={2}>
      {/* <CustomImageMap /> */}
      <Map longitude={10.8252} latitude={35.7796} />
    </BoxCenter>
  );
}
