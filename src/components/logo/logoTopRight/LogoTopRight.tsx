import { StyledLogoTopRight } from './LogoTopRight.styles';
import { BoxRightTopStyled, TranslationStyled } from '../../../components';
import { ImageProps } from '../../image/ImageProps.types';
export const LogoTopRight = ({ src, alt }: ImageProps) => {
  return (
    <BoxRightTopStyled>
      <StyledLogoTopRight src={src} alt={alt} />
    </BoxRightTopStyled>
  );
};
