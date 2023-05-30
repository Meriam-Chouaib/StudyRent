import { BoxCenter, ButtonIconStyled } from './ButtonWithIcon.style';
import { ButtonWithIconProps } from './ButtonWithIcon.type';

export const ButtonWithIcon = ({ icon, txt, onClick, justify }: ButtonWithIconProps) => {
  return (
    <>
      <BoxCenter sx={{ justifyContent: `${justify}` }}>
        <ButtonIconStyled variant="contained" endIcon={icon} onClick={onClick ? onClick : () => {}}>
          {txt}
        </ButtonIconStyled>
      </BoxCenter>
    </>
  );
};
