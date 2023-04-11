import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';
export interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  colorBack?: string;
  colorText?: string;
}
