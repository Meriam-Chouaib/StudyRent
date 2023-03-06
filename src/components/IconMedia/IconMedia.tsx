import { Box } from '@mui/material';
import { IconMediaProps } from './IconMediaProps.types';
import { ImgSocial } from './IconMedia.styles';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export const IconMedia: React.FC<IconMediaProps> = ({ alt, src, link }) => {
  return (
    <>
      <Link to={link}>
        <ImgSocial src={src} alt={alt} />
      </Link>
    </>
  );
};
