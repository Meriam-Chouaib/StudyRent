import { ImageProps } from '../../Image/ImageProps.types';
import { StyledLogoTopRight } from './LogoTopRight.styles';
import { BoxRightTop } from '../../../components';
export const LogoTopRight = ({ src, alt }: ImageProps) => {
  return (
    <BoxRightTop>
      <StyledLogoTopRight src={src} alt={alt} />
    </BoxRightTop>
  );
};
