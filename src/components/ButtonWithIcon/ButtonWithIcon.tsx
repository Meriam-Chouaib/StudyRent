import { BoxCenter, ButtonIconStyled } from './ButtonWithIcon.style';
import { ButtonWithIconProps } from './ButtonWithIcon.type';

export const ButtonWithIcon = ({ icon, txt, onClick }: ButtonWithIconProps) => {
  return (
    <>
      <BoxCenter>
        <ButtonIconStyled variant="contained" endIcon={icon} onClick={onClick ? onClick : () => {}}>
          {txt}
        </ButtonIconStyled>
      </BoxCenter>
    </>
  );
};
