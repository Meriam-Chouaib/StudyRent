import { BoxCenter, ButtonIconStyled } from './ButtonWithIcon.style';
import { ButtonWithIconProps } from './ButtonWithIcon.type';

export const ButtonWithIcon = ({ icon, txt }: ButtonWithIconProps) => {
  return (
    <>
      <BoxCenter>
        <ButtonIconStyled variant="contained" endIcon={icon}>
          {txt}
        </ButtonIconStyled>
      </BoxCenter>
    </>
  );
};
