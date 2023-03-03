import { Theme } from '@mui/material';
import { Button, TextField } from './';

export function componentsOverrides(theme: Theme) {
  return Object.assign(Button(theme), TextField(theme));
}
