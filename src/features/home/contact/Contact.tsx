import { Box } from '@mui/material';
import { BoxCenterSpaceBetween } from '../../../components';
import { BoxImageMap, CustomImageMap } from './Contact.style';
import Map from '../../../assets/images/map-contact-home.svg';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <BoxCenterSpaceBetween>
      <Box sx={{ width: '50%' }}>
        <ContactForm />
      </Box>
      <BoxImageMap>
        <CustomImageMap src={Map} alt={'localisation of the agence'} />
      </BoxImageMap>
    </BoxCenterSpaceBetween>
  );
};
