import { ReactNode } from 'react';
export interface CustomButtonProps {
  isLoading: boolean;
  children: ReactNode;
  onClick: () => void;
}
