import { Box } from '@mui/material';
import { ImageProps } from '../../image/ImageProps.types';
import { StyledLogoTopRight } from './LogoTopRight.styles';
import { BoxRightTop } from '../../BoxRightTop.styles';
// eslint-disable-next-line react/prop-types
export const LogoTopRight: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <BoxRightTop>
      <StyledLogoTopRight src={src} alt={alt} />
    </BoxRightTop>
  );
};
