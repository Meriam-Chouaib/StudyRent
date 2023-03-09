import { IconMediaProps } from './IconMediaProps.types';
import { ImgSocial } from './IconMedia.styles';
import { Link } from 'react-router-dom';

export const IconMedia = ({ alt, src, link }: IconMediaProps) => {
  return (
    <>
      <Link to={link}>
        <ImgSocial src={src} alt={alt} />
      </Link>
    </>
  );
};
