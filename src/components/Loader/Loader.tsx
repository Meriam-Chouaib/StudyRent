import { Box } from '@mui/material';
import { LoaderProps } from './LoaderProps.types';
import { CircleLoader } from 'react-spinners';
export const Loader = ({ color, size }: LoaderProps) => {
  return (
    <Box>
      <CircleLoader color={color} size={size} />
    </Box>
  );
};
