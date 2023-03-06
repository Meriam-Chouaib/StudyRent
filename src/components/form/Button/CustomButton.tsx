import { CustomButtonStyle } from './CustomButton.styles';
import { ClipLoader } from 'react-spinners';
import { CustomButtonProps } from './CustomButton.types';

export default function CustomButton({ isLoading, children, onClick }: CustomButtonProps) {
  return (
    <CustomButtonStyle onClick={onClick}>
      {isLoading ? <ClipLoader color="#ffffff" size={20} /> : children}
    </CustomButtonStyle>
  );
}
