import { Icon } from '@material-ui/core';
import { ReactNode } from 'react';

interface CustomIconProps {
  isActive: boolean;
  icon: ReactNode;
}
export default function CustomIcon({ isActive }: CustomIconProps) {
  return <Icon color={isActive ? 'primary' : 'secondary'} />;
}
