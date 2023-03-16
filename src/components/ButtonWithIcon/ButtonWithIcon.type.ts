import { ButtonProps } from '@mui/material';

export interface ButtonWithIconProps extends ButtonProps {
  icon: React.ReactNode;
  txt: string;
}
