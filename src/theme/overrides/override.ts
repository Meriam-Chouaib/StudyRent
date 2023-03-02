import { Theme } from '@mui/material';
import { Button, TextField } from './';

export const override = (theme: Theme) => {
  return Object.assign(Button(theme), TextField(theme));
};
