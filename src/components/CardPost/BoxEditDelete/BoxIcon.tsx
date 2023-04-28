import { ReactNode } from 'react';
import { BoxIconStyled } from './BoxEditDelete.styles';
import { ButtonIcon } from '../../Icon/Icon.styles';
interface BoxIconProps {
  children: ReactNode;
  handleSubmit?: () => void;
  color: string;
}
export const BoxIcon = ({ children, handleSubmit, color }: BoxIconProps) => {
  return (
    <>
      <BoxIconStyled sx={{ backgroundColor: `${color}` }}>
        <ButtonIcon onClick={handleSubmit}>{children}</ButtonIcon>
      </BoxIconStyled>
    </>
  );
};
