import { ButtonProps } from '@mui/material';

export interface ButtonWithIconProps extends ButtonProps {
  icon: React.ReactNode;
  txt: string;
  bgColor?: string;
  onClick?: () => void;
  justify?: string;
  margBottom?: string;
}
