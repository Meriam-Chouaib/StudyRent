/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Stack, Typography } from '@mui/material';

interface TextWithIconProps {
  children?: React.ReactNode;
  label?: string;
  value: any;
}
export const TextWithIcon = ({ children, label, value }: TextWithIconProps) => {
  return (
    <>
      <Stack sx={{ display: 'flex', flexDirection: 'row' }} spacing={3} direction={'row'}>
        {children}

        <Typography variant="h3">{label}</Typography>
        <Typography variant="body1"> {value}</Typography>
      </Stack>
    </>
  );
};
interface TextValidIconProps {
  text?: string;
}
export const TextValidIcon = ({ text }: TextValidIconProps) => {
  return (
    <>
      <Stack sx={{ display: 'flex', flexDirection: 'row' }} spacing={3} direction={'row'}>
        <CheckCircleIcon color="primary" />
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          {text}
        </Typography>
      </Stack>
    </>
  );
};
