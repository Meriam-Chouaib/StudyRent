import { BoxCenter, ButtonIconStyled } from './ButtonWithIcon.style';
import { ButtonWithIconProps } from './ButtonWithIcon.type';

export const ButtonWithIcon = ({
  icon,
  txt,
  onClick,
  justify,
  margBottom,
}: ButtonWithIconProps) => {
  return (
    <>
      <BoxCenter sx={{ justifyContent: `${justify}`, marginBottom: `${margBottom}` }}>
        <ButtonIconStyled
          variant="contained"
          endIcon={margBottom ? null : icon}
          startIcon={margBottom ? icon : null}
          onClick={onClick ? onClick : () => {}}
        >
          {txt}
        </ButtonIconStyled>
      </BoxCenter>
    </>
  );
};
