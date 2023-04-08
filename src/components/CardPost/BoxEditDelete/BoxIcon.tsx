import { ReactNode } from 'react';
import { BoxIconStyled } from './BoxEditDelete.styles';
import { ButtonIcon } from '../../Icon/Icon.styles';
interface BoxIconProps {
  children: ReactNode;
  handleSubmit: () => void;
}
export const BoxIcon = ({ children, handleSubmit }: BoxIconProps) => {
  return (
    <>
      <BoxIconStyled>
        <ButtonIcon onClick={handleSubmit}>{children}</ButtonIcon>
      </BoxIconStyled>
    </>
  );
};
