import { Icon } from '@mui/material';

interface CustomIconProps {
  isAtive: boolean;
}
export default function CustomIcon({ isAtive }: CustomIconProps) {
  return <Icon sx={{ color: isAtive ? '#fff' : '#fff' }} />;
}
