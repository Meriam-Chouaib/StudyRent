import { CustomButtonStyle } from './CustomButton.styles';
import { ClipLoader } from 'react-spinners';
import { CustomButtonProps } from './CustomButton.types';
import { BoxCenterStyled } from '../../BoxCenter/BoxCenterStyled.styles';

export const CustomButton = ({
  isLoading,
  children,
  onClick,
  colorBack,
  colorText,
}: CustomButtonProps) => {
  return (
    <BoxCenterStyled>
      <CustomButtonStyle
        onClick={onClick}
        type="submit"
        sx={{ color: `${colorText}`, backgroundColor: `${colorBack}` }}
      >
        {isLoading ? <ClipLoader color="#ffffff" size={20} /> : children}
      </CustomButtonStyle>
    </BoxCenterStyled>
  );
};
