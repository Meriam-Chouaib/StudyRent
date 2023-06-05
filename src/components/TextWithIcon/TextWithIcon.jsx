import { Link } from 'react-router-dom';
import { BoxIcon } from '../CardPost/BoxEditDelete/BoxIcon';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

interface TextWithIconProps {
  children?: React.ReactNode;
  label?: string;
  value: any;
}
export const TextWithIcon = ({ children, label, value }: TextWithIconProps) => {
  return (
    <>
      <Stack sx={{ display: 'flex', flexDirection: 'row' }} spacing={2} direction={'row'}>
        {children}

        <Typography variant="h3">{label}</Typography>
        <Typography variant="body1"> {value}</Typography>
      </Stack>
    </>
  );
};
