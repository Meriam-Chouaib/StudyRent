import { ImageProps } from '../../Image/ImageProps.types';
import { StyledLogoTopRight } from './LogoTopRight.styles';
import { BoxRightTopStyled } from '../../../components';
export const LogoTopRight = ({ src, alt }: ImageProps) => {
  return (
    <BoxRightTopStyled>
      <StyledLogoTopRight src={src} alt={alt} />
    </BoxRightTopStyled>
  );
};
