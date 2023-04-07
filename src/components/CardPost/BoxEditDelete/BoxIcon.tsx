import { ReactNode } from 'react';
import { BoxIconStyled } from './BoxEditDelete.styles';
interface BoxIconProps {
  children: ReactNode;
}
export const BoxIcon = ({ children }: BoxIconProps) => {
  return (
    <>
      <BoxIconStyled>{children}</BoxIconStyled>
    </>
  );
};
